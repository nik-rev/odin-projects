import updateDomBoard from "./dom-board-manager";
import { battleshipPlayerOne, battleshipPlayerTwo } from ".";
import Bot from "./ai";

function setupHitEventListeners(cell, coordinates) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  cell.addEventListener("click", () => {
    if (
      battleshipPlayerOne instanceof Bot ||
      battleshipPlayerTwo instanceof Bot
    ) {
      battleshipPlayerOne.hitEnemy(...coordinates);
      battleshipPlayerTwo.randomHit();
      if (battleshipPlayerOne.winner) {
        alert("BattleshipPlayerOne won!");
      }
    } else {
      if (battleshipPlayerTwo.canHit) {
        battleshipPlayerTwo.hitEnemy(...coordinates);
      } else {
        battleshipPlayerOne.hitEnemy(...coordinates);
      }
    }
    if (
      battleshipPlayerOne instanceof Bot ||
      battleshipPlayerTwo instanceof Bot
    ) {
      updateDomBoard(battleshipPlayerOne, playerOneBoard, false);
      updateDomBoard(battleshipPlayerTwo, playerTwoBoard, false);
    } else {
      let hittingPlayer;
      if (battleshipPlayerOne.canHit) {
        hittingPlayer = battleshipPlayerOne;
      } else {
        hittingPlayer = battleshipPlayerTwo;
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
