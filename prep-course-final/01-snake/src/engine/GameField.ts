import { Cell } from "./Cell";
import configuration from "../configuration";
// import
export class GameField {
  private apples: Cell[] = [
    new Cell(18, 15),
    new Cell(7, 17),
    new Cell(30, 16),
    new Cell(24, 20),
    new Cell(15, 7),
  ];
  constructor() {
    // this.seed();
  }

  /**
   * Called when level completed
   */
  seed(): void {
    for (let i = 0; i < 5; i++) {
      this.apples.push(
        new Cell(
          this.getRand(configuration.nbCellsX),
          this.getRand(configuration.nbCellsY)
        )
      );
    }
    console.log(":) leave");
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    return !!this.apples.filter(
      (apple) => apple.x === cell.x && apple.y === cell.y
    ).length;
  }

  removeApple(cell: Cell): void {
    this.apples = this.apples.filter(
      (apple) => apple.x !== cell.x && apple.y !== cell.y
    );
  }

  isEmpty(): boolean {
    return !this.apples.length;
  }
  private getRand(max: number) {
    return Math.floor(Math.random() * max);
  }
}
