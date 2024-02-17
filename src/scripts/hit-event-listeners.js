import updateDomBoard from "./dom-board-manager";
import { bob, chatgpt } from ".";
import Bot from "./ai";

function setupHitEventListeners(cell, coordinates) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  cell.addEventListener("click", () => {
    if (bob instanceof Bot || chatgpt instanceof Bot) {
      bob.hitEnemy(...coordinates);
      chatgpt.randomHit();
      if (bob.winner) {
        alert("Bob won!");
      }
    } else {
      if (chatgpt.canHit) {
        chatgpt.hitEnemy(...coordinates);
      } else {
        bob.hitEnemy(...coordinates);
      }
    }
    if (bob instanceof Bot || chatgpt instanceof Bot) {
      updateDomBoard(bob, playerOneBoard, false);
      updateDomBoard(chatgpt, playerTwoBoard, false);
    } else {
      let hittingPlayer;
      if (bob.canHit) {
        hittingPlayer = bob;
      } else {
        hittingPlayer = chatgpt;
      }
      [playerOneBoard.id, playerTwoBoard.id] = [
        playerTwoBoard.id,
        playerOneBoard.id,
      ];
      updateDomBoard(hittingPlayer, playerOneBoard, false);
      updateDomBoard(hittingPlayer.enemy, playerTwoBoard, false);
    }
  });
}
export default setupHitEventListeners;
