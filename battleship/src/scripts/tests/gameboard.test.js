import Cell from "../logic/cell";
import GameBoard from "../logic/gameboard";
import Segment from "../logic/segment";

describe("Testing gameboard class", () => {
  const board = new GameBoard();
  describe("Testing gameBoard properties", () => {
    it("Is an array of 10 rows of 10 cells each", () => {
      const actual = board.board.reduce(
        (acc1, row) =>
          acc1 +
          row.reduce((acc2, cell) => {
            if (cell instanceof Cell) return acc2 + 1;
            return 0;
          }, 0),
        0
      );
      const expected = 100;
      expect(actual).toBe(expected);
    });
    it("Knows when a cell has been hit", () => {
      const spy = jest.spyOn(board, "notifyBoardOfHit");
      board.coords(5, 4).hit();
      expect(spy).toHaveBeenCalledWith(5, 4);
    });
  });
  describe("Testing getAdjacent method", () => {
    const testingBoard = new GameBoard();

    const checkTheseCoordinates = [
      [1, 1],
      [9, 1],
      [5, 3],
      [4, 8],
      [10, 10],
    ];

    const expected = [
      [
        [1, 2],
        [2, 1],
        [2, 2],
      ],
      [
        [9, 2],
        [10, 1],
        [10, 2],
        [8, 1],
        [8, 2],
      ],
      [
        [5, 4],
        [6, 3],
        [6, 4],
        [4, 3],
        [5, 2],
        [4, 2],
        [6, 2],
        [4, 4],
      ],
      [
        [4, 9],
        [5, 8],
        [5, 9],
        [3, 8],
        [4, 7],
        [3, 7],
        [5, 7],
        [3, 9],
      ],
      [
        [9, 10],
        [10, 9],
        [9, 9],
      ],
    ];

    checkTheseCoordinates.forEach((coordinate, index) => {
      it(`Correctly finds the adjacent cells of ${coordinate}`, () => {
        const coordinates = testingBoard.getAdjacent(...coordinate);
        const actual = coordinates
          .filter((vector) => vector instanceof Cell)
          .map((vector) => vector.getCoordinates());
        expect(actual).toEqual(expected[index]);
      });
    });
    checkTheseCoordinates.forEach((coordinate) => {
      it(`Correctly finds the adjacent nulls of ${coordinate}`, () => {
        const coordinates = testingBoard.getAdjacent(...coordinate);
        coordinates
          .filter((vector) => !(vector instanceof Cell))
          .forEach((vector) => {
            expect(vector).toBe(null);
          });
      });
    });
  });
  describe("Testing isSegment method", () => {
    it("Returns true if a cell is a segment", () => {
      board.coords(4, 4).attach(new Segment());
      const actual = board.isSegment(4, 4);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it("Returns false if a cell is not a segment", () => {
      const actual = board.isSegment(5, 2);
      const expected = false;
      expect(actual).toBe(expected);
    });
    it("Returns false for null", () => {
      const actual = board.isSegment(null);
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
  describe("Testing constructShip method", () => {
    const newTestBoard = new GameBoard();
    const segment1 = new Segment();
    const segment2 = new Segment();
    const segment3 = new Segment();
    const segment4 = new Segment();

    newTestBoard.coords(4, 7).attach(segment1);
    newTestBoard.coords(4, 8).attach(segment2);
    newTestBoard.coords(4, 9).attach(segment3);
    newTestBoard.coords(4, 10).attach(segment4);
    const expected = [
      newTestBoard.coords(4, 7),
      newTestBoard.coords(4, 8),
      newTestBoard.coords(4, 9),
      newTestBoard.coords(4, 10),
    ];

    it("Constructs the array when the cell is a segment of the ship", () => {
      const actual = newTestBoard.constructShip(4, 8);
      expect(actual).toEqual(expected);
    });
    it("Constructs the array when the cell is another segment of the ship", () => {
      const actual = newTestBoard.constructShip(4, 10);
      expect(actual).toEqual(expected);
    });
    it("Constructs the array when the cell is yet another segment of the ship", () => {
      const actual = newTestBoard.constructShip(4, 9);
      expect(actual).toEqual(expected);
    });
    it("Doesn't construct the array when the cell is not a segment of the ship", () => {
      const actual = newTestBoard.constructShip(4, 6);
      expect(actual).toEqual(null);
    });
    it("Doesn't construct the array when the cell is not a segment of the ship 2", () => {
      const actual = newTestBoard.constructShip(5, 6);
      expect(actual).toEqual(null);
    });
  });
  describe("Testing isShipDestroyed method and if nearby cells die when a ship is destroyed", () => {
    const testingShipDestruction = new GameBoard();

    it("Checks if the 1-segment ship has been destroyed", () => {
      testingShipDestruction.coords(7, 7).attach();
      testingShipDestruction.coords(7, 7).hit();
      const actual = testingShipDestruction.isShipDestroyed(7, 7);
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("Checks if the cells around the 1-segment ship are dead", () => {
      expect(testingShipDestruction.coords(7, 7).isAlive).toBe(false);
      expect(testingShipDestruction.coords(7, 8).isAlive).toBe(false);
      expect(testingShipDestruction.coords(7, 6).isAlive).toBe(false);
      expect(testingShipDestruction.coords(8, 7).isAlive).toBe(false);
      expect(testingShipDestruction.coords(6, 7).isAlive).toBe(false);
      expect(testingShipDestruction.coords(8, 8).isAlive).toBe(false);
      expect(testingShipDestruction.coords(6, 6).isAlive).toBe(false);
      expect(testingShipDestruction.coords(8, 6).isAlive).toBe(false);
      expect(testingShipDestruction.coords(6, 8).isAlive).toBe(false);
    });

    it("Checks if the 2-segment ship has been destroyed after hit once already", () => {
      testingShipDestruction.coords(4, 8).attach();
      testingShipDestruction.coords(3, 8).attach();
      testingShipDestruction.coords(4, 8).hit();
      const actual = testingShipDestruction.isShipDestroyed(4, 8);
      const expected = false;
      expect(actual).toBe(expected);
    });

    it("Responds with no ship if there is no ship", () => {
      const actual = testingShipDestruction.isShipDestroyed(4, 9);
      const expected = "No ship";
      expect(actual).toBe(expected);
    });
    it("Checks that the 4-segment ship is destroyed when it has been hit for the 4th time", () => {
      testingShipDestruction.coords(6, 10).attach();
      testingShipDestruction.coords(7, 10).attach();
      testingShipDestruction.coords(8, 10).attach();
      testingShipDestruction.coords(9, 10).attach();
      testingShipDestruction.coords(6, 10).hit();
      testingShipDestruction.coords(7, 10).hit();
      testingShipDestruction.coords(8, 10).hit();
      testingShipDestruction.coords(9, 10).hit();
      const actual = testingShipDestruction.isShipDestroyed(7, 10);
      const expected = true;
      expect(actual).toBe(expected);
    });
    it("Checks if the cells around and including the 4-segment ship are dead", () => {
      expect(testingShipDestruction.coords(5, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(6, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(7, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(8, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(9, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(10, 10).isAlive).toBe(false);
      expect(testingShipDestruction.coords(5, 9).isAlive).toBe(false);
      expect(testingShipDestruction.coords(6, 9).isAlive).toBe(false);
      expect(testingShipDestruction.coords(7, 9).isAlive).toBe(false);
      expect(testingShipDestruction.coords(8, 9).isAlive).toBe(false);
      expect(testingShipDestruction.coords(9, 9).isAlive).toBe(false);
      expect(testingShipDestruction.coords(10, 9).isAlive).toBe(false);
    });
    it("checks that the 3-segment ship has not been destroyed when it has been hit for the 2nd time", () => {
      testingShipDestruction.coords(4, 4).attach();
      testingShipDestruction.coords(4, 5).attach();
      testingShipDestruction.coords(4, 6).attach();
      testingShipDestruction.coords(4, 5).hit();
      testingShipDestruction.coords(4, 6).hit();
      const actual = testingShipDestruction.isShipDestroyed(4, 4);
      const actual2 = testingShipDestruction.isShipDestroyed(4, 6);
      const expected = false;
      expect(actual).toBe(expected);
      expect(actual2).toBe(expected);
    });
    it("Checks if the 2-segment ship has not been destroyed after first hit", () => {
      testingShipDestruction.coords(9, 1).attach();
      testingShipDestruction.coords(9, 2).attach();
      testingShipDestruction.coords(9, 1).hit();
      const actual = testingShipDestruction.isShipDestroyed(9, 2);
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
  describe("Testing placeShip method", () => {
    const testShipPlacement = new GameBoard();
    it("Can place ship with 1 segment", () => {
      testShipPlacement.placeShip([7, 7], [7, 7]);
      const actual = testShipPlacement.constructShip(7, 7).length;
      const expected = 1;
      expect(expected).toBe(actual);
    });
    it("Can place ship with 2 segments", () => {
      testShipPlacement.placeShip([3, 8], [4, 8]);
      const actual = testShipPlacement.constructShip(3, 8).length;
      const expected = 2;
      expect(expected).toBe(actual);
    });
    it("Can place ship with 3 segments", () => {
      testShipPlacement.placeShip([4, 4], [4, 6]);
      const actual = testShipPlacement.constructShip(4, 6).length;
      const expected = 3;
      expect(expected).toBe(actual);
    });
    it("Can place ship with 4 segments", () => {
      testShipPlacement.placeShip([6, 10], [9, 10]);
      const actual = testShipPlacement.constructShip(7, 10).length;
      const expected = 4;
      expect(expected).toBe(actual);
    });
    it("Does not allow to place ships of incorrect dimensions", () => {
      expect(() => {
        testShipPlacement.placeShip([1, 1], [2, 2]);
      }).toThrow("Invalid ship size");
      expect(() => {
        testShipPlacement.placeShip([1, 10], [1, 6]);
      }).toThrow("Invalid ship size");
    });

    it("Does not allow to place ships outside of bounds", () => {
      expect(() => {
        testShipPlacement.placeShip([0, 1], [2, 1]);
      }).toThrow("Invalid ship placement");
      expect(() => {
        testShipPlacement.placeShip([15, 5], [8, 7]);
      }).toThrow("Invalid ship placement");
    });

    it("Does not allow to place ships inside of other ships", () => {
      expect(() => {
        testShipPlacement.placeShip([3, 5], [5, 5]);
      }).toThrow("You cannot place your ship there");
      expect(() => {
        testShipPlacement.placeShip([7, 7], [7, 7]);
      }).toThrow("You cannot place your ship there");
    });

    it("Does not allow to place ships near other ships", () => {
      expect(() => {
        testShipPlacement.placeShip([8, 6], [8, 5]);
      }).toThrow("You cannot place your ship there");
      expect(() => {
        testShipPlacement.placeShip([4, 7], [3, 7]);
      }).toThrow("You cannot place your ship there");
    });
  });
});
