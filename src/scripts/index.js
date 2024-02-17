import Player from "./player";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";
import Bot from "./ai";

function importAllCSS(r) {
  r.keys().forEach(r);
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
updateDomBoard(battleshipPlayerOne, domBoard);
updateDomShips(battleshipPlayerOne.unplacedShips, domShips);

export { battleshipPlayerTwo, battleshipPlayerOne };
