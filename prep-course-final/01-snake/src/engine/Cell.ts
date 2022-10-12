export class Cell {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  compare(cell: Cell): boolean {
    return this.x === cell.x && this.y === cell.y;
  }
}
