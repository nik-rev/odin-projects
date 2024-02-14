import GameBoard from "./gameboard";

class Player {
  constructor(name, enemy, canHit) {
    this.name = name;
    this.board = new GameBoard();
    this.enemy = enemy;
    this.unplacedShips = [4, 3, 3, 2, 2, 2, 1];
    this.activeShips = [];
    this.canHit = canHit;
  }

  placeShip(size, lay, coords) {
    if (lay) {
      console.log(...coords, [coords[0] + size - 1, coords[1]]);
      this.board.placeShip([...coords], [coords[0] + size - 1, coords[1]]);
    } else {
      this.board.placeShip([...coords], [coords[0], coords[1] + size - 1]);
    }
  }
}

// class AI extends Player {}

export default Player;
