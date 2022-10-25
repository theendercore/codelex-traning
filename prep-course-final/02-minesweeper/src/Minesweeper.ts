import { Level } from "./levels";

interface CellPositions {
  x: number;
  y: number;
}

const cellPositions: CellPositions[] = [
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: +1, y: -1 },
  { x: -1, y: 0 },
  { x: +1, y: 0 },
  { x: -1, y: +1 },
  { x: 0, y: +1 },
  { x: +1, y: +1 },
];

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
  constructor(
    isOpen: boolean,
    mines: number,
    isBombs: boolean,
    isFlag: boolean,
    isUnsure: boolean
  ) {
    this.isOpen = isOpen;
    this.mines = mines;
    this.isBomb = isBombs;
    this.isFlag = isFlag;
    this.isUnsure = isUnsure;
  }
}

export class Minesweeper {
  private level: Level;
  private cells: Cell[][] = new Array(2);
  private time: number;
  private mines: number;
  private endState: string;
  private qestionMarks: boolean;

  constructor(level: Level) {
    this.level = level;
    this.mines = level.mines;
    this.time = 0;
    this.endState = "";
    this.qestionMarks = false;
    this.genCells();
  }

  columnsCount(): number {
    return this.level.columns;
  }

  getCells(): Cell[][] {
    return this.cells;
  }

  onLeftMouseDown(x: number, y: number) {}

  onLeftMouseUp(x: number, y: number) {
    let cell = this.cells[x][y];

    if (cell.isOpen || cell.isFlag || cell.isUnsure || this.endState !== "") {
      return;
    }
    if (cell.isBomb) {
      this.endState = "-";
      this.showAll();
      return;
    }

    cell.isOpen = true;
    if (cell.mines === 0) {
      this.neighborPropagate(x, y);
    }

    let pm = 0;
    this.cells.forEach((cells) =>
      cells.forEach((cell) => (pm += Number(cell.isOpen)))
    );
    if (pm + this.level.mines === this.level.columns * this.level.rows) {
      this.endState = "+";
      this.showAll();
    }
  }

  onRightMouseUp(x: number, y: number) {
    let cell = this.cells[x][y];
    if (this.endState.includes("+") || this.endState.includes("-")) {
      return;
    }
    if (cell.isFlag && this.qestionMarks) {
      cell.isFlag = false;
      cell.isUnsure = true;
      return;
    } else if (cell.isUnsure) {
      cell.isUnsure = false;
      return;
    }
    if (cell.isFlag) {
      cell.isFlag = false;
      this.mines++;
    } else if (!cell.isFlag) {
      cell.isFlag = true;
      this.mines--;
    }
  }

  isTense(): boolean {
    return true;
  }

  timePassed(): number {
    return this.time++;
  }

  minesLeftCount() {
    return this.mines;
  }

  reset() {
    this.time = 0;
    this.mines = this.level.mines;
    this.endState = "";
    this.qestionMarks = false;
    this.genCells();
  }

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    this.level = level;
  }

  isLost(): boolean {
    return this.endState.includes("-");
  }

  isWon(): boolean {
    return this.endState.includes("+");
  }

  isQuestionMarksEnabled(): boolean {
    return this.qestionMarks;
  }

  toggleQuestionMarksEnabled() {
    this.qestionMarks = !this.qestionMarks;
  }

  private genCells() {
    let minesToSet = this.level.mines;
    for (let i = 0; i < this.level.rows; i++) {
      let c: Cell[] = [];
      for (let j = 0; j < this.level.columns; j++) {
        c.push(new Cell(false, 0, false, false, false));
      }
      this.cells[i] = c;
    }

    while (0 < minesToSet) {
      let x = Math.floor(Math.random() * this.level.rows);
      let y = Math.floor(Math.random() * this.level.columns);
      if (!this.cells[x][y].isBomb) {
        this.cells[x][y].isBomb = true;
        this.cells[x][y].mines = -1;
        minesToSet -= 1;
      }
    }

    for (let i = 0; i < this.level.rows; i++) {
      for (let j = 0; j < this.level.columns; j++) {
        let cell = this.cells[i][j];
        if (!cell.isBomb) {
          cellPositions.forEach((pos) => {
            let X = i + pos.x;
            let Y = j + pos.y;
            if (this.isReal(X, Y) && this.cells[X][Y].isBomb) {
              cell.mines++;
            }
          });
        }
      }
    }
  }

  private neighborPropagate(x: number, y: number) {
    cellPositions.forEach((pos) => {
      let X = x + pos.x;
      let Y = y + pos.y;
      if (
        this.isReal(X, Y) &&
        !this.cells[X][Y].isFlag &&
        !this.cells[X][Y].isUnsure &&
        !this.cells[X][Y].isOpen
      ) {
        if (this.cells[X][Y].mines === 0) {
          this.cells[X][Y].isOpen = true;
          this.neighborPropagate(X, Y);
        } else {
          this.cells[X][Y].isOpen = true;
        }
      }
    });
  }

  private isReal(x: number, y: number): boolean {
    return x > -1 && x < this.level.rows && y > -1 && y < this.level.columns
      ? true
      : false;
  }

  private showAll() {
    this.cells.forEach((cells) => {
      cells.map((cell) => (cell.isOpen = true));
    });
  }
}
