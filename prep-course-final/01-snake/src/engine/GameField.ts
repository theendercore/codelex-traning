import { Cell } from "./Cell";
import configuration from "../configuration";
// import
export class GameField {
  private apples: Cell[] = [];
  constructor() {
    this.seed();
  }

  /**
   * Called when level completed
   */
  seed(): void {
    for (let i = 0; i < 5; i++) {
      this.apples.push(
        new Cell(
          this.getRand(configuration.nbCellsX - 10) + 5,
          this.getRand(configuration.nbCellsY - 10) + 5
        )
      );
    }
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
    this.apples = this.apples.filter((apple) => !apple.compare(cell));
  }

  isEmpty(): boolean {
    return !this.apples.length;
  }
  private getRand(max: number) {
    return Math.floor(Math.random() * max);
  }
}
