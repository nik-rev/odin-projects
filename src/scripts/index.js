import Player from "./player";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";
import Bot from "./ai";

function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(require.context("../styles/", true, /\.css$/));

const bob = new Player("bob", null, true);
const chatgpt = new Bot("chatgpt", bob, false);
bob.enemy = chatgpt;
const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
updateDomBoard(bob, domBoard);
// updateDomBoard(bob, domBoard);
updateDomShips(bob.unplacedShips, domShips);

export { chatgpt, bob };
