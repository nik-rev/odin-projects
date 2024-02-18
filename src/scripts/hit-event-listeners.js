import updateDomBoard from "./dom-board-manager";
import Bot from "./ai";

function setupHitEventListeners({ cell, coordinates, playerOne, playerTwo }) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  cell.addEventListener("click", () => {
    if (playerOne instanceof Bot || playerTwo instanceof Bot) {
      playerOne.hitEnemy(...coordinates);
      playerTwo.randomHit();
      if (playerOne.winner) {
        alert("BattleshipPlayerOne won!");
      }
    } else {
      if (playerTwo.canHit) {
        playerTwo.hitEnemy(...coordinates);
      } else {
        playerOne.hitEnemy(...coordinates);
      }
    }
    if (playerOne instanceof Bot || playerTwo instanceof Bot) {
      updateDomBoard({
        player: playerOne,
        parent: playerOneBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
      updateDomBoard({
        player: playerTwo,
        parent: playerTwoBoard,
        setup: false,
        playerOne,
        playerTwo,
      });
    } else {
      let hittingPlayer;
      if (playerOne.canHit) {
        hittingPlayer = playerOne;
      } else {
        hittingPlayer = playerTwo;
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
