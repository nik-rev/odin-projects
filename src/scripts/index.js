import Player from "./player";
import Bot from "./ai";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";

function importAllCSS(require) {
  require.keys().forEach(require);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

const battleshipPlayerOne = new Player("battleshipPlayerOne", null, true);
const battleshipPlayerTwo = new Bot(
  "battleshipPlayerTwo",
  battleshipPlayerOne,
  false
);
battleshipPlayerOne.enemy = battleshipPlayerTwo;

const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
updateDomBoard(battleshipPlayerOne, domBoard);
updateDomShips(battleshipPlayerOne.unplacedShips, domShips);

export { battleshipPlayerTwo, battleshipPlayerOne };
