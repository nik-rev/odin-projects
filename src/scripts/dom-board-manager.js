import Bot from "./ai";
import setupDragEventListeners from "./drag-manager";
import setupHitEventListeners from "./hit-event-listeners";

function createDomBoard({ player, parent, setup, playerOne, playerTwo }) {
  // function createDomBoard(player, player2, parent, setup) {
  // The board will be the GameBoard class, not the array of 10 arrays

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
      // focus = player.board.coords(x, y);

      if (Object.hasOwn(focus, "segment")) {
        cell.classList.add("cell-segment");
      }
      if (!focus.isAlive) {
        cell.classList.remove("cell-alive");
        cell.classList.add("cell-dead");
      }
      // if (setup) setupDragEventListeners(cell, player, player2, [x, y]);
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
  // function updateDomBoard(player, player2, parent, setup = true) {
  clearDomBoard({ parent });
  // createDomBoard(player, player2, parent, setup);
  createDomBoard({ player, parent, setup, playerOne, playerTwo });
}

export default updateDomBoard;
