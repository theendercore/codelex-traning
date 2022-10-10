export type XO = "X" | "O" | "-";

export class Game {
  private Cells: XO[][] = new Array(2);
  getCells(): XO[] {
    return ["X", "-", "-", "-", "-", "-", "-", "-", "-"];
  }

  getTurn(): XO {
    return "X";
  }

  getWinner(): XO {
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    console.log(`cell ${i} clicked`);
  }

  restart(): void {
    console.log("restart called");
  }
}
