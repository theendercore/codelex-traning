import { Level } from "./levels";

interface CellCoords {
  x: number;
  y: number;
}

const cellLocations: CellCoords[] = [
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 0, y: +1 },
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

  onLeftMouseDown(x: number, y: number) {
    let cell = this.cells[x][y];
    if (cell.isOpen || cell.isFlag || cell.isUnsure || this.endState !== "") {
      return;
    }
    cell.isOpen = true;
    if (cell.mines === 0) {
      this.checkCells(x, y);
    }
  }

  onLeftMouseUp(x: number, y: number) {
    let cell = this.cells[x][y];
    if (cell.isFlag || cell.isUnsure || this.endState !== "") {
      return;
    }
    if (cell.isBomb === true) {
      this.endState = "-";
      return;
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
    cell.isFlag = !cell.isFlag;
  }

  isTense(): boolean {
    return true;
  }

  timePassed(): number {
    return this.time;
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
    for (let i = 0; i < this.level.rows; i++) {
      let c: Cell[] = [];
      for (let j = 0; j < this.level.columns; j++) {
        c.push(
          new Cell(false, 0, i == 0 && j == 0 ? true : false, false, false)
        );
      }
      this.cells[i] = c;
    }
  }

  private checkCells(x: number, y: number) {
    cellLocations.forEach((loc) => {
      let X = x + loc.x;
      let Y = y + loc.y;
      if (
        this.realNeighbor(X, Y) &&
        !this.cells[X][Y].isFlag &&
        !this.cells[X][Y].isUnsure &&
        !this.cells[X][Y].isOpen &&
        !this.cells[X][Y].isBomb
      ) {
        this.cells[X][Y].isOpen = true;
        this.checkCells(X, Y);
      }
    });
  }
  private realNeighbor(x: number, y: number): boolean {
    if (x > -1 && x < this.level.columns && y > -1 && y < this.level.rows) {
      return true;
    }
    return false;
  }
}
