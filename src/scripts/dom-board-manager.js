import { bob, chatgpt } from ".";
import Bot from "./ai";
import setupDragEventListeners from "./drag-manager";
import setupHitEventListeners from "./hit-event-listeners";

function createDomBoard(player, parent, setup) {
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
        if (!(bob instanceof Bot) && !(chatgpt instanceof Bot)) {
          if (player === bob && bob.canHit) {
            focus = player.board.coords(x, y);
          }
          if (player === chatgpt && bob.canHit) {
            focus = player.showBoard().coords(x, y);
            setupHitEventListeners(cell, [x, y]);
          }
          if (player === chatgpt && chatgpt.canHit) {
            focus = player.board.coords(x, y);
          }
          if (player === bob && chatgpt.canHit) {
            focus = player.showBoard().coords(x, y);
            setupHitEventListeners(cell, [x, y]);
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
        setupDragEventListeners(cell, player, [x, y]);
      }
      if (player instanceof Bot) {
        setupHitEventListeners(cell, [x, y]);
      }

      parent.append(cell);
    }
  }
}

function clearDomBoard(parent) {
  const domCells = [...parent.querySelectorAll(".cell")];
  domCells.forEach((domCell) => {
    parent.removeChild(domCell);
  });
}

function updateDomBoard(player, parent, setup = true) {
  // function updateDomBoard(player, player2, parent, setup = true) {
  clearDomBoard(parent);
  // createDomBoard(player, player2, parent, setup);
  createDomBoard(player, parent, setup);
}

export default updateDomBoard;
