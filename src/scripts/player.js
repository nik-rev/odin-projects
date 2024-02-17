import GameBoard from "./gameboard";

class Player {
  constructor(name, enemy, canHit) {
    this.name = name;
    this.board = new GameBoard();
    this.enemy = enemy;
    this.unplacedShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    this.activeShips = [];
    this.canHit = canHit;
    this.winner = false;
  }

  isGameOver() {
    const isItOver =
      this.activeShips.length === 0 || this.enemy.activeShips.length === 0;
    if (isItOver && !this.winner && !this.enemy.winner) {
      this.winner = true;
    }
    return isItOver;
  }

  hitEnemy(x, y) {
    if (this.gameOver) {
      throw new Error("Game is over");
    }
    if (this.canHit) {
      this.enemy.board.coords(x, y).hit();

      if (
        this.enemy.board.constructShip(x, y) !== null &&
        this.enemy.board.isShipDestroyed(x, y) === true
      ) {
        const lengthOfShip = this.enemy.board.constructShip(x, y).length;
        this.placeShipArrayManager(lengthOfShip, false);
      }
      this.canHit = !this.canHit;
      this.enemy.canHit = !this.enemy.canHit;
    } else {
      throw new Error("Please wait for the other player to hit");
    }
    this.isGameOver();
  }

  seeEnemyBoard() {
    return this.enemy.showBoard();
  }

  showBoard() {
    const copiedBoard = this.board.board.map((row) =>
      row.map((cell) =>
        cell.isAlive
          ? Object.keys(cell).reduce((obj, key) => {
              if (key !== "segment") {
                obj[key] = cell[key];
              }
              return obj;
            }, {})
          : cell
      )
    );
    const showGameBoard = new GameBoard();
    showGameBoard.board = copiedBoard;
    return showGameBoard;
  }

  placeShip(size, lay, coords, mock = false) {
    // if mock is true it will just return the vectors where the ship would've been placed, wont actually
    // place the ship there
    // its not recursive function, they just have the same name
    let vectors;
    if (lay) {
      vectors = this.board.placeShip(
        [...coords],
        [coords[0] + size - 1, coords[1]],
        mock
      );
    } else {
      vectors = this.board.placeShip(
        [...coords],
        [coords[0], coords[1] + size - 1],
        mock
      );
    }
    if (!mock) {
      this.placeShipArrayManager(size);
    }
    return vectors;
  }

  canGameStart() {
    return this.unplacedShips.length === 0;
  }

  placeShipArrayManager(size, place = true) {
    if (place) {
      const index = this.unplacedShips.indexOf(size);
      this.activeShips.push(...this.unplacedShips.splice(index, 1));
    } else {
      const index = this.activeShips.indexOf(size);
      this.unplacedShips.push(...this.activeShips.splice(index, 1));
    }
  }
}

// class AI extends Player {}

export default Player;
