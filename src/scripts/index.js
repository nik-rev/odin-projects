import Player from "./player";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";

function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

const bob = new Player("bob", null, true);
const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
updateDomBoard(bob, domBoard);
updateDomShips(bob.unplacedShips, domShips);
