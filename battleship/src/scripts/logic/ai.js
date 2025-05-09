import Player from "./player";

class Bot extends Player {
  constructor(...args) {
    super(...args);
    this.placeRandomShips();
  }

  randomHit() {
    let xCoord = Math.ceil(Math.random() * 10);
    let yCoord = Math.ceil(Math.random() * 10);

    while (!this.enemy.board.coords(xCoord, yCoord).isAlive) {
      xCoord = Math.ceil(Math.random() * 10);
      yCoord = Math.ceil(Math.random() * 10);
    }

    intelligentGuess: for (let x = 1; x <= 10; x++) {
      for (let y = 1; y <= 10; y++) {
        const current = this.enemy.showBoard().coords(x, y);
        const above = this.enemy.showBoard().coords(x, y + 1);
        const left = this.enemy.showBoard().coords(x - 1, y);
        const right = this.enemy.showBoard().coords(x + 1, y);
        const below = this.enemy.showBoard().coords(x, y - 1);
        const possibilities = [above, left, right, below].filter(
          (possibility) => Boolean(possibility)
        );
        if (Object.hasOwn(current, "segment")) {
          for (const possibility of possibilities) {
            if (possibility.isAlive) {
              xCoord = possibility.x;
              yCoord = possibility.y;
              break intelligentGuess;
            }
          }
        }
      }
    }
    this.hitEnemy(xCoord, yCoord);
  }

  placeRandomShips() {
    while (this.unplacedShips.length !== 0) {
      try {
        const randomX = Math.ceil(Math.random() * 10);
        const randomY = Math.ceil(Math.random() * 10);
        const randBool = Math.random() > 0.5;
        const size = this.unplacedShips[0];
        this.placeShip(size, randBool, [randomX, randomY]);
      } catch {
        //
      }
    }
  }
}

export default Bot;
