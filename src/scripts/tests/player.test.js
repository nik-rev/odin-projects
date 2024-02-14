import AI from "../ai";
import Player from "../player";

describe("Testing player class", () => {
  const john = new Player("John", null, true);
  const bot = new AI("Bot", john, false);
  john.enemy = bot;
  describe("Player is initialised with an empty board", () => {
    it("John has an empty board", () => {
      let actual = 0;
      for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
          if (john.board.coords(x, y).segment) actual++;
        }
      }
      const expected = 0;
      expect(actual).toBe(expected);
    });
    it("Bot has an empty board", () => {
      let actual = 0;
      for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
          if (bot.board.coords(x, y).segment) actual++;
        }
      }
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });
  describe("Testing placeShip method with human player", () => {
    // it('Can game start when no ships were placed?', () => {
    //   expect(john.canGameStart()).toBe(false);
    // })
    it("Can place 4 decker", () => {
      john.placeShip(4, true, [2, 9]);
      expect(john.board.isShipDestroyed(2, 9)).toBe(false);
      const actual = john.board
        .constructShip(2, 9)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can place 3 decker for first time", () => {
      john.placeShip(3, false, [1, 5]);
      expect(john.board.isShipDestroyed(1, 5)).toBe(false);
      const actual = john.board
        .constructShip(1, 5)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [1, 5],
        [1, 6],
        [1, 7],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can place 3 decker for second time", () => {
      john.placeShip(3, true, [8, 10]);
      expect(john.board.isShipDestroyed(9, 10)).toBe(false);
      const actual = john.board
        .constructShip(8, 10)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [8, 10],
        [9, 10],
        [10, 10],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can't place 2 decker too close to another ship", () => {
      expect(() => {
        john.placeShip(2, false, [3, 7]);
      }).toThrow("You cannot place your ship there");
      expect(john.board.isShipDestroyed(3, 7)).toBe("No ship");
    });
    it("Can place 2 decker for first time", () => {
      john.placeShip(2, false, [3, 6]);
      expect(john.board.isShipDestroyed(3, 6)).toBe(false);
      const actual = john.board
        .constructShip(3, 6)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [3, 6],
        [3, 7],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can place 2 decker for second time", () => {
      john.placeShip(2, true, [7, 8]);
      expect(john.board.isShipDestroyed(7, 8)).toBe(false);
      const actual = john.board
        .constructShip(7, 8)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [7, 8],
        [8, 8],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can place 2 decker for third time", () => {
      john.placeShip(2, false, [5, 5]);
      expect(john.board.isShipDestroyed(5, 5)).toBe(false);
      const actual = john.board
        .constructShip(5, 5)
        .map((segment) => [segment.x, segment.y]);
      const expected = [
        [5, 5],
        [5, 6],
      ];
      expect(actual).toEqual(expected);
    });
    it("Can place 1 decker for first time", () => {
      john.placeShip(1, false, [1, 1]);
      expect(john.board.isShipDestroyed(1, 1)).toBe(false);
      const actual = john.board
        .constructShip(1, 1)
        .map((segment) => [segment.x, segment.y]);
      const expected = [[1, 1]];
      expect(actual).toEqual(expected);
    });
    it("Can place 1 decker for second time", () => {
      john.placeShip(1, true, [10, 1]);
      expect(john.board.isShipDestroyed(10, 1)).toBe(false);
      const actual = john.board
        .constructShip(10, 1)
        .map((segment) => [segment.x, segment.y]);
      const expected = [[10, 1]];
      expect(actual).toEqual(expected);
    });
    it("Can place 1 decker for third time", () => {
      john.placeShip(1, true, [3, 3]);
      expect(john.board.isShipDestroyed(3, 3)).toBe(false);
      const actual = john.board
        .constructShip(3, 3)
        .map((segment) => [segment.x, segment.y]);
      const expected = [[3, 3]];
      expect(actual).toEqual(expected);
    });
    it("Can place 1 decker for fourth time", () => {
      john.placeShip(1, false, [8, 2]);
      expect(john.board.isShipDestroyed(8, 2)).toBe(false);
      const actual = john.board
        .constructShip(8, 2)
        .map((segment) => [segment.x, segment.y]);
      const expected = [[8, 2]];
      expect(actual).toEqual(expected);
    });
    it("Can't place 1 decker nearby occupied", () => {
      expect(() => {
        john.placeShip(1, true, [9, 7]);
      }).toThrow("You cannot place your ship there");
      expect(john.board.isShipDestroyed(9, 7)).toBe("No ship");
    });
  });
  // describe("Testing canGameStart method");
  // describe("Testing AI player");
  // describe("Testing showBoard method");
  // describe("Player can see another player's board");
  // describe("Testing player hit method");
  // describe("Player has reference to enemy player");
  // describe("Testing win condition");
});
