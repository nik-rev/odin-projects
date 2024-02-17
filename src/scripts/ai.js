import Player from "./player";

class Bot extends Player {
  constructor(...args) {
    super(...args);
    this.placeRandomShips();
  }

  randomHit() {
    let x = Math.ceil(Math.random() * 10);
    let y = Math.ceil(Math.random() * 10);
    while (!this.enemy.board.coords(x, y).isAlive) {
      x = Math.ceil(Math.random() * 10);
      y = Math.ceil(Math.random() * 10);
    }
    this.hitEnemy(x, y);
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

// if (this.unplacedShips.length === 0) {
//   let prettyPrint = "";
//   for (let y = 10; y > 0; y--) {
//     let row = "";
//     for (let x = 1; x <= 10; x++) {
//       const identifier = this.board.coords(x, y).segment ? "█" : "░";
//       row = row.concat(identifier + " ");
//     }
//     prettyPrint = prettyPrint.concat(row + "\n");
//   }
//   break;
// }
