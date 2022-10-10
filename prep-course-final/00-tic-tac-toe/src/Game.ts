export type XO = "X" | "O" | "-";

export class Game {
  private cells: XO[] = [];
  private turn: XO;
  private winner: XO;
  private tie = false;
  constructor() {
    this.clearCells();
    this.turn = "X";
    this.winner = "-";
  }

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    return this.winner;
  }

  isTie(): boolean {
    return this.tie;
  }

  onClick(i: number): void {
    if (this.cells[i] != "-" || this.tie || this.winner != "-") {
      return;
    }
    this.cells[i] = this.turn;
    if (!this.cells.includes("-")) {
      this.tie = true;
      return;
    }
    let winCond = Array(3).fill(this.turn).toString();
    if (
      [...this.cells].slice(0, 3).toString() === winCond ||
      [...this.cells].slice(3, 6).toString() === winCond ||
      [...this.cells].slice(6).toString() === winCond ||
      `${this.cells[0]},${this.cells[3]},${this.cells[6]}` === winCond ||
      [this.cells[1], this.cells[4], this.cells[7]].toString() === winCond ||
      [this.cells[2], this.cells[5], this.cells[8]].toString() === winCond ||
      [this.cells[0], this.cells[4], this.cells[8]].toString() === winCond ||
      [this.cells[2], this.cells[4], this.cells[6]].toString() === winCond
    ) {
      this.winner = this.turn;
    }
    // console.log(this.cells.includes("-"));
    this.turn = this.turn == "X" ? "O" : "X";
  }

  restart(): void {
    this.clearCells();
    this.turn = "X";
    this.winner = "-";
    this.tie = false;
  }

  private clearCells(): void {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = "-";
    }
  }
}
