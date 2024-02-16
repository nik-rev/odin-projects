import { onDragEnter, onDragLeave, onDrop } from "./drag-manager";

function createDomBoard(player, parent) {
  // The board will be the GameBoard class, not the array of 10 arrays
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell-alive");
      cell.classList.add("cell");
      const focus = player.board.coords(x, y);
      if (Object.hasOwn(focus, "segment")) {
        cell.classList.add("cell-segment");
      }
      if (!focus.isAlive) {
        cell.classList.remove("cell-alive");
        cell.classList.add("cell-dead");
      }
      cell.addEventListener("dragenter", (event) => {
        onDragEnter(event, player);
      });
      cell.addEventListener("dragleave", (event) => {
        onDragLeave(event);
      });
      cell.addEventListener("drop", (event) => {
        onDrop(event);
      });
      // Necessary to allow dropping
      cell.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      cell.setAttribute("id", `${x}-${y}`);
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

function updateDomBoard(player, parent) {
  clearDomBoard(parent);
  createDomBoard(player, parent);
}

export default updateDomBoard;
