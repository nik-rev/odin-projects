import Player from "./player";
import Bot from "./ai";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";

function importAllCSS(require) {
  require.keys().forEach(require);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

const battleshipPlayerOne = new Player("battleshipPlayerOne", null, true);
const battleshipPlayerTwo = new Player(
  "battleshipPlayerTwo",
  battleshipPlayerOne,
  false
);
battleshipPlayerOne.enemy = battleshipPlayerTwo;

const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
updateDomBoard({
  player: battleshipPlayerOne,
  parent: domBoard,
  playerOne: battleshipPlayerOne,
  playerTwo: battleshipPlayerTwo,
});
// const unplacedShips = battleshipPlayerOne.unplacedShips;
// updateDomShips(battleshipPlayerOne.unplacedShips, domShips);
updateDomShips({
  shipsArray: battleshipPlayerOne.unplacedShips,
  parent: domShips,
  playerOne: battleshipPlayerOne,
  playerTwo: battleshipPlayerTwo,
});

export { battleshipPlayerTwo, battleshipPlayerOne };
