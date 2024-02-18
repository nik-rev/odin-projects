import Player from "./player";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";
import Bot from "./ai";

function importAllCSS(require) {
  require.keys().forEach(require);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

const playerOne = new Player("battleshipPlayerOne", null, true);
const playerTwo = new Bot("battleshipPlayerTwo", playerOne, false);
playerOne.enemy = playerTwo;

const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
updateDomBoard({
  player: playerOne,
  parent: domBoard,
  playerOne,
  playerTwo,
});
// const unplacedShips = battleshipPlayerOne.unplacedShips;
// updateDomShips(battleshipPlayerOne.unplacedShips, domShips);
updateDomShips({
  shipsArray: playerOne.unplacedShips,
  parent: domShips,
  playerOne,
  playerTwo,
});
