import updateDomBoard from "./dom-board-manager";
import { battleshipPlayerOne, battleshipPlayerTwo } from ".";
import Bot from "./ai";

function setupHitEventListeners({ cell, coordinates, playerOne, playerTwo }) {
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
      updateDomBoard({
        player: battleshipPlayerOne,
        parent: playerOneBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
      updateDomBoard({
        player: battleshipPlayerTwo,
        parent: playerTwoBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
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
      updateDomBoard({
        player: hittingPlayer,
        parent: playerOneBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
      updateDomBoard({
        player: hittingPlayer.enemy,
        parent: playerTwoBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
    }
  });
}
export default setupHitEventListeners;
