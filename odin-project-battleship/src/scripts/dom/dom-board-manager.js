import Bot from "../logic/ai";
import setupDragEventListeners from "./drag-manager";
import setupHitEventListeners from "./hit-event-listeners";

function createDomBoard({ player, parent, setup, playerOne, playerTwo }) {
  const status = document.querySelector("#status");
  status.style.color = "white";
  if (setup) {
    status.textContent = `${player.name}'s turn to place ships!`;
  } else {
    status.textContent = `${playerOne.name}'s turn to strike!`;
  }
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell-alive");
      cell.classList.add("cell");
      let focus;
      if (player instanceof Bot) {
        focus = player.showBoard().coords(x, y);
      } else {
        focus = player.board.coords(x, y);
      }
      if (!setup) {
        if (!(playerOne instanceof Bot) && !(playerTwo instanceof Bot)) {
          if (playerOne.canHit) {
            status.textContent = `${playerOne.name}'s turn to strike!`;
            if (player === playerOne) {
              focus = player.board.coords(x, y);
            } else {
              focus = player.showBoard().coords(x, y);
              setupHitEventListeners({
                cell,
                coordinates: [x, y],
                playerOne,
                playerTwo,
              });
            }
          } else if (playerTwo.canHit) {
            status.textContent = `${playerTwo.name}'s turn to strike!`;
            if (player === playerOne) {
              focus = player.showBoard().coords(x, y);
              setupHitEventListeners({
                cell,
                coordinates: [x, y],
                playerOne,
                playerTwo,
              });
            } else {
              focus = player.board.coords(x, y);
            }
          }
        }
      }

      if (Object.hasOwn(focus, "segment")) {
        cell.classList.add("cell-segment");
      }
      if (!focus.isAlive) {
        cell.classList.remove("cell-alive");
        cell.classList.add("cell-dead");
      }
      if (setup) {
        setupDragEventListeners({
          cell,
          player,
          coords: [x, y],
          playerOne,
          playerTwo,
        });
      }
      if (player instanceof Bot) {
        setupHitEventListeners({
          cell,
          coordinates: [x, y],
          playerOne,
          playerTwo,
        });
      }

      parent.append(cell);
    }
  }
}

function clearDomBoard({ parent }) {
  const domCells = [...parent.querySelectorAll(".cell")];
  domCells.forEach((domCell) => {
    parent.removeChild(domCell);
  });
}

function updateDomBoard({
  player,
  parent,
  setup = true,
  playerOne,
  playerTwo,
}) {
  clearDomBoard({ parent });
  createDomBoard({ player, parent, setup, playerOne, playerTwo });
}

export default updateDomBoard;
