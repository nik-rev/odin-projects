import Bot from "../ai";
import Player from "../player";

describe("Testing player class", () => {
  const john = new Player("John", null, true);
  const bot = new Bot("Bot", john, false);
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
    it("Bot doesn't have an empty board", () => {
      const chatgpt = new Bot("ChatGPT", null, false);
      let actual = 0;
      for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
          if (chatgpt.board.coords(x, y).segment) actual++;
        }
      }
      const expected = 0;
      expect(actual).not.toBe(expected);
    });
  });
  describe("Testing placeShip method with human player", () => {
    it("Can game start when no ships were placed?", () => {
      expect(john.canGameStart()).toBe(false);
    });
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
    it("Can game start after one ship was placed?", () => {
      expect(john.canGameStart()).toBe(false);
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
    it("Can game start after several more ships were placed?", () => {
      expect(john.canGameStart()).toBe(false);
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
    it("Can't place 1 decker nearby occupied", () => {
      expect(() => {
        john.placeShip(1, true, [9, 7]);
      }).toThrow("You cannot place your ship there");
      expect(john.board.isShipDestroyed(9, 7)).toBe("No ship");
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
    it("Can game start after all ships were placed?", () => {
      expect(john.canGameStart()).toBe(true);
    });
  });
  describe("Testing AI player placing ships", () => {
    bot.placeRandomShips();
    it("There are 20 segments on the board", () => {
      let actual = 0;
      for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
          if (bot.board.coords(x, y).segment) actual++;
        }
      }
      const expected = 20;
      expect(actual).toBe(expected);
    });
    it("None of the ships touch any of the other ships", () => {
      let actual = 0;
      for (let y = 10; y > 0; y--) {
        for (let x = 1; x <= 10; x++) {
          if (bot.board.coords(x, y).segment) {
            const ship = bot.board.constructShip(x, y);
            const area = bot.board.getShipArea(x, y);
            let segmentCount = 0;

            area.forEach((cell) => {
              if (Object.hasOwn(cell, "segment")) {
                segmentCount += 1;
              }
            });

            if (segmentCount !== ship.length) {
              actual += 1;
            }
          }
        }
      }
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });
  describe("Testing showBoard method", () => {
    const nathan = new Player("Nathan", null, true);
    nathan.placeShip(4, true, [2, 9]);
    nathan.board.coords(2, 9).hit();
    nathan.board.coords(4, 9).hit();
    const exposedBoard = nathan.showBoard();
    it("Doesn't show a ship cell that hasn't been hit", () => {
      const coordsThatWerentHit = [
        exposedBoard.coords(2, 9),
        exposedBoard.coords(4, 9),
      ];
      const actual =
        Object.hasOwn(coordsThatWerentHit[0], "segment") &&
        Object.hasOwn(coordsThatWerentHit[1], "segment");
      expect(actual).toBe(true);
    });
    it("Does show a ship cell that has been hit", () => {
      const coordsThatWereHit = [
        exposedBoard.coords(3, 9),
        exposedBoard.coords(5, 9),
      ];
      const actual =
        !Object.hasOwn(coordsThatWereHit[0], "segment") &&
        !Object.hasOwn(coordsThatWereHit[1], "segment");
      expect(actual).toBe(true);
    });
    it("Original board hasn't changed", () => {
      expect(Object.hasOwn(nathan.board.coords(3, 9), "segment")).toBe(true);
      expect(Object.hasOwn(nathan.board.coords(5, 9), "segment")).toBe(true);
    });
  });
  describe("Player can see another player's board", () => {
    const guy = new Player("guy", null, false);
    const girl = new Player("girl", guy, true);
    guy.enemy = girl;
    guy.placeShip(3, false, [5, 5]);
    girl.hitEnemy(5, 6);
    it("Cannot see enemy ship if it was not hit", () => {
      const target = girl.seeEnemyBoard().coords(5, 5);
      expect(Object.hasOwn(target, "segment")).toBe(false);
    });
    it("Can see enemy ship if it was hit", () => {
      const target = girl.seeEnemyBoard().coords(5, 6);
      expect(Object.hasOwn(target, "segment")).toBe(true);
    });
  });
  describe("Testing win condition", () => {
    let guy;
    let girl;
    beforeEach(() => {
      guy = new Player("guy", null, true);
      girl = new Player("girl", guy, false);
      guy.enemy = girl;
      guy.unplacedShips = [4];
      girl.unplacedShips = [4];
      guy.placeShip(4, true, [3, 3]);
      girl.placeShip(4, false, [6, 7]);
    });
    afterEach(() => {
      guy = null;
      girl = null;
    });

    it("Correct initial canHit conditions", () => {
      expect(guy.canHit === true).toBe(true);
      expect(girl.canHit === true).toBe(false);
    });
    it("Cannot hit twice in a row", () => {
      guy.hitEnemy(6, 7);
      expect(() => {
        guy.hitEnemy(6, 8);
      }).toThrow("Please wait for the other player to hit");
      expect(girl.board.coords(6, 8).isAlive).toBe(true);
    });
    it("After 1 hit the initial conditions correctly change", () => {
      guy.hitEnemy(6, 7);
      try {
        guy.hitEnemy(6, 8);
      } catch {}
      expect(guy.canHit).toBe(false);
      expect(girl.canHit).toBe(true);
    });
    it("Please wait for the other player to hit after first attempt to hit twice has failed", () => {
      guy.hitEnemy(6, 7);
      expect(() => {
        guy.hitEnemy(6, 9);
      }).toThrow("Please wait for the other player to hit");
      expect(girl.board.coords(6, 9).isAlive).toBe(true);
    });
    it("The conditions dont change despite trying to hit twice", () => {
      guy.hitEnemy(6, 7);
      try {
        guy.hitEnemy(6, 8);
      } catch {
        //
      }
      try {
        guy.hitEnemy(6, 9);
      } catch {
        //
      }
      expect(guy.canHit).toBe(false);
      expect(girl.canHit).toBe(true);
    });
    it("After 2nd hit the conditions correctly change to be like initial", () => {
      guy.hitEnemy(6, 7);
      girl.hitEnemy(3, 3);
      expect(guy.canHit).toBe(true);
      expect(girl.canHit).toBe(false);
    });
    it("Game is not over when not all ships are destroyed", () => {
      guy.hitEnemy(6, 7);
      expect(guy.isGameOver()).toBe(false);
      expect(girl.isGameOver()).toBe(false);
    });
    it("Game is not over when not all ships are destroyed 2", () => {
      guy.hitEnemy(6, 7);
      girl.hitEnemy(3, 3);
      guy.hitEnemy(6, 8);
      girl.hitEnemy(5, 4); // Miss
      guy.hitEnemy(6, 9);
      girl.hitEnemy(4, 3);
      guy.hitEnemy(1, 1); // Miss
      girl.hitEnemy(5, 3);
      expect(guy.isGameOver()).toBe(false);
      expect(girl.isGameOver()).toBe(false);
    });
    it("Game is over when all ships are destroyed", () => {
      guy.hitEnemy(6, 7);
      girl.hitEnemy(3, 3);
      guy.hitEnemy(6, 8);
      girl.hitEnemy(5, 4); // Miss
      guy.hitEnemy(6, 9);
      girl.hitEnemy(4, 3);
      guy.hitEnemy(1, 1); // Miss
      girl.hitEnemy(5, 3);
      guy.hitEnemy(6, 10);
      expect(guy.isGameOver()).toBe(true);
      expect(girl.isGameOver()).toBe(true);
    });
    it("Guy is winner, girl is loser", () => {
      guy.hitEnemy(6, 7);
      girl.hitEnemy(3, 3);
      guy.hitEnemy(6, 8);
      girl.hitEnemy(5, 4); // Miss
      guy.hitEnemy(6, 9);
      girl.hitEnemy(4, 3);
      guy.hitEnemy(1, 1); // Miss
      girl.hitEnemy(5, 3);
      guy.hitEnemy(6, 10);
      expect(guy.winner).toBe(true);
      expect(girl.winner).toBe(false);
    });
  });
});
