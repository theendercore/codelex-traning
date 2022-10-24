import { Level } from "./levels";

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
  private time: number = 0;
  private mines: number;
  private qestionMarks: boolean = false;
  constructor(level: Level) {
    this.level = level;
    this.mines = 1;
    this.genCells();
  }

  columnsCount(): number {
    return 10;
  }

  getCells(): Cell[][] {
    return this.cells;
  }

  onLeftMouseDown(x: number, y: number) {
    console.log(`${x} ${y}`);
  }

  onLeftMouseUp(x: number, y: number) {}

  onRightMouseUp(x: number, y: number) {}

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
    this.getCells();
  }

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    this.level = level;
  }

  isLost(): boolean {
    return false;
  }

  isWon(): boolean {
    return false;
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
        c.push(new Cell(false, 0, false, false, false));
      }
      this.cells[i] = c;
    }
  }
}
