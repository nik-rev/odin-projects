import updateDomBoard from "./dom-board-manager";
import Bot from "../logic/ai";

function setupHitEventListeners({ cell, coordinates, playerOne, playerTwo }) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  const status = document.querySelector("#status");
  cell.addEventListener("click", () => {
    let mistake = false;
    try {
      if (playerOne instanceof Bot || playerTwo instanceof Bot) {
        playerOne.hitEnemy(...coordinates);
        playerTwo.randomHit();
      } else if (playerTwo.canHit) {
        playerTwo.hitEnemy(...coordinates);
      } else {
        playerOne.hitEnemy(...coordinates);
      }
    } catch {
      status.textContent = "You cannot hit there!";
      status.style.color = "red";
      mistake = true;
    }

    const winner = playerOne.winner || playerTwo.winner;

    if (winner) {
      document.body.removeChild(document.querySelector("#game-container"));
      document.querySelector("#game-over").classList.remove("no-display");
      if (playerOne.winner) {
        status.textContent = `${playerOne.name} has won!`;
      } else if (playerTwo.winner) {
        status.textContent = `${playerTwo.name} has won!`;
      }
    }

    if (!mistake && !winner) {
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
    }
  });
}
export default setupHitEventListeners;
