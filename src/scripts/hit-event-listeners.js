import updateDomBoard from "./dom-board-manager";
import { bob, chatgpt } from ".";

function setupHitEventListeners(cell, coordinates) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  cell.addEventListener("click", () => {
    bob.hitEnemy(...coordinates);
    chatgpt.randomHit();
    updateDomBoard(bob, playerOneBoard, false);
    updateDomBoard(chatgpt, playerTwoBoard, false);
  });
}
export default setupHitEventListeners;
