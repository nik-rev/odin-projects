import Cell from "./cell";
import isWithinBounds from "./is-within-bounds";

function validatePlaceCoordinates(coords1, coords2) {
  const [cx1, cy1, cx2, cy2] = coords1.concat(coords2);
  const coords = [cx1, cy1, cx2, cy2];
  coords.forEach((coord) => {
    if (coord > 10 || coord < 1 || !Number.isInteger(coord)) {
      throw new Error("Invalid ship placement");
    }
  });

  const [shipWidth, shipHeight] = [
    Math.abs(coords2[0] - coords1[0]) + 1,
    Math.abs(coords2[1] - coords1[1]) + 1,
  ];
  if (shipWidth > 4 || shipHeight > 4 || shipWidth < 1 || shipHeight < 1) {
    throw new Error("Invalid ship size");
  }

  const vectors = [];
  if (coords1[1] === coords2[1]) {
    for (let i = coords1[0]; i <= coords2[0]; i++) {
      vectors.push([i, coords1[1]]);
    }
  } else if (coords1[0] === coords2[0]) {
    for (let i = coords1[1]; i <= coords2[1]; i++) {
      vectors.push([coords1[0], i]);
    }
  } else {
    throw new Error("Invalid ship size");
  }

  return vectors;
}

class GameBoard {
  constructor() {
    // for (let i = 0; i < 100; i++) {
    //   console.log("This console.log statement was in a non-test file.");
    // }
    this.createBoard();
  }

  getAdjacent(x, y) {
    const vectors = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 0],
      [0, -1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ];
    const adjacentCells = vectors
      .map((vector) => [vector[0] + x, vector[1] + y])
      .map((vector) => {
        if (isWithinBounds(...vector)) {
          return this.coords(vector[0], vector[1]);
        }
        return null;
      });
    return adjacentCells;
  }

  placeShip(coords1, coords2, mock) {
    // coords2 needs to be 'bigger' than coords1
    const vectors =
      coords2[0] + coords2[1] < coords1[0] + coords1[1]
        ? validatePlaceCoordinates(coords2, coords1)
        : validatePlaceCoordinates(coords1, coords2);

    if (mock) {
      return vectors;
    }
    // Check that the area is empty and we are able to place a ship there
    vectors.forEach((vector) => {
      const target = this.coords(...vector);
      const area = [target, ...this.getAdjacent(target.x, target.y)].filter(
        (cell) => cell !== null
      );
      area.forEach((cell) => {
        if (cell.segment) {
          throw new Error("You cannot place your ship there");
        }
      });
    });
    vectors.forEach((vector) => {
      this.coords(...vector).attach();
    });
  }

  isShipDestroyed(x, y) {
    if (this.constructShip(x, y) === null) {
      return "No ship";
    }
    const ship = this.constructShip(x, y).filter(
      (segment) => segment.isAlive === true
    );
    return ship.length === 0;
  }

  createBoard() {
    this.board = Array(10);
    for (let i = 0; i < 10; i++) {
      this.board[i] = Array(10);
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = new Cell(j + 1, i + 1, this);
      }
    }
    this.board = this.board.reverse("");
  }

  getCellNeighborsThatAreSegments(cell) {
    return this.getAdjacent(cell.x, cell.y)
      .filter((cellA) => cellA !== null)
      .filter((cellB) => cellB.segment);
  }

  constructShip(x, y) {
    // Get the focus cell
    const shipArray = [];
    const focusCell = this.coords(x, y);
    if (!Object.keys(focusCell).includes("segment")) {
      return null;
    }
    shipArray.push(focusCell);
    this.getCellNeighborsThatAreSegments(focusCell).forEach((cell) =>
      shipArray.push(cell)
    );
    shipArray.forEach((cell) => {
      const neighbors = this.getCellNeighborsThatAreSegments(cell);
      neighbors.forEach((neighbor) => {
        if (!shipArray.includes(neighbor)) {
          shipArray.push(neighbor);
        }
      });
    });
    shipArray.forEach((cell) => {
      const neighbors = this.getCellNeighborsThatAreSegments(cell);
      neighbors.forEach((neighbor) => {
        if (!shipArray.includes(neighbor)) {
          shipArray.push(neighbor);
        }
      });
    });
    shipArray.sort((a, b) => a.x - b.x).sort((a, b) => a.y - b.y);

    return shipArray;
  }

  coords(x, y) {
    return this.board[10 - y][x - 1];
  }

  getShipArea(x, y) {
    const ship = this.constructShip(x, y);
    let area = [];
    ship.forEach((segment) => {
      area = area.concat(this.getAdjacent(segment.x, segment.y));
    });
    area = [...new Set(area)];
    area = area.filter((cell) => cell !== null);
    if (ship.length === 1) {
      area.push(...ship);
    }
    return area;
  }

  isSegment(x, y) {
    if (x === null) {
      return false;
    }
    if (this.coords(x, y).segment) {
      return true;
    }
    return false;
  }

  notifyBoardOfHit(x, y) {
    const shipDestroyed = this.isShipDestroyed(x, y);
    if (shipDestroyed && this.constructShip(x, y) !== null) {
      let adjacentArray = [];
      const ship = this.constructShip(x, y);
      ship.forEach((segment) => {
        adjacentArray.push(this.getAdjacent(segment.x, segment.y));
      });
      adjacentArray = [...new Set(adjacentArray.flat())];
      adjacentArray = adjacentArray.filter((cell) => cell !== null);
      adjacentArray = adjacentArray.filter((cell) => !ship.includes(cell));
      adjacentArray = adjacentArray.filter((cell) => cell.isAlive);

      adjacentArray.forEach((cell) => {
        cell.hit();
      });
    }
  }
}

export default GameBoard;
