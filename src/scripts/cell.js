import Segment from "./segment";

class Cell {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.board = board;
  }

  attach() {
    if (this.segment) {
      throw new Error("This cell is already occupied");
    }
    this.segment = new Segment();
    return this.segment;
  }

  getCoordinates() {
    return [this.x, this.y];
  }

  hit() {
    if (this.isAlive === true) {
      this.isAlive = false;
    } else {
      console.log(this.x, this.y);
      throw new Error("This cell has already been hit");
    }
    if (this.segment !== undefined) {
      if (this.board) {
        this.board.notifyBoardOfHit(this.x, this.y);
      }
      this.segment.kill();
      return "Hit";
    }
    if (this.board) {
      this.board.notifyBoardOfHit(this.x, this.y);
    }
    return "Miss";
  }
}

export default Cell;
