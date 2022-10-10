import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  private tail: Cell[];
  private head: Cell;
  private dir: Direction;
  constructor() {
    this.tail = [new Cell(1, 0), new Cell(0, 0)];
    this.head = new Cell(2, 0);
    this.dir = "Down";
  }
  setDirection(direction: Direction) {
    this.dir = direction;
  }

  move() {
    this.tail.unshift(new Cell(this.head.x, this.head.y));
    this.tail.pop();
    switch (this.dir) {
      case "Down":
        this.head.y++;
        break;
      case "Up":
        this.head.y--;
        break;
      case "Right":
        this.head.x++;
        break;
      case "Left":
        this.head.x--;
      default:
        //expload
        break;
    }
  }

  grow() {
    let lastCell = this.tail.at(-1) || new Cell(0, 0);
    this.tail.push(new Cell(lastCell.x, lastCell.y));
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.dir;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return !!this.tail.filter(
      (snakeBit) => snakeBit.x === cell.x && snakeBit.y === cell.y
    ).length;
  }
}
