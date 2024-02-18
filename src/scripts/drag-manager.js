import { battleshipPlayerOne, battleshipPlayerTwo } from ".";
import Bot from "./ai";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";
import startGame, { domShipManager2 } from "./start-game";

function ArrayIncludesArray(parentArray, subsetArray) {
  let counter = 0;
  parentArray.forEach((subarray) => {
    if (JSON.stringify(subarray) === JSON.stringify(subsetArray)) {
      counter += 1;
    }
  });
  return counter !== 0;
}

function clearHighlightFromAllCellsExceptInputCells(cells = []) {
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const coordinates = [x, y];
      if (
        !ArrayIncludesArray(cells, coordinates) &&
        document.getElementById("ships") !== null
      ) {
        const cell = document.getElementById(`${x}-${y}`);
        cell.classList.remove("highlight");
      }
    }
  }
}

function onDragStart({ event }) {
  const target = event.currentTarget;
  setTimeout(() => target.classList.add("low-opacity"));
  setTimeout(() => target.classList.add("draggable"));
}

function highlightCells(coordinates) {
  coordinates.forEach((coordinate) => {
    const highlight = document.getElementById(
      `${coordinate[0]}-${coordinate[1]}`
    );
    highlight.classList.add("highlight");
  });
}
// const lay = false;
function onDragEnter({ event, player }) {
  const [x, y] = event.target.id.split("-").map((str) => Number(str));
  const sizeOfShip = document
    .querySelector(".draggable")
    .className.match(/\d+/)
    .map((el) => Number(el))[0];
  const lay = document.querySelector(".draggable").className.includes("lay");
  try {
    const coords = player.placeShip(sizeOfShip, lay, [x, y], true);
    highlightCells(coords);
    clearHighlightFromAllCellsExceptInputCells(coords);
  } catch (error) {
    clearHighlightFromAllCellsExceptInputCells();
  }
}

function onDrop({ event, player }) {
  // function onDrop(event, player, player2) {
  const [x, y] = event.target.id.split("-").map((str) => Number(str));
  const sizeOfShip = document
    .querySelector(".draggable")
    .className.match(/\d+/)
    .map((el) => Number(el))[0];
  const lay = document.querySelector(".draggable").className.includes("lay");
  try {
    player.placeShip(sizeOfShip, lay, [x, y]);
    const board = document.getElementById("board");
    const ships = document.getElementById("ships");
    updateDomBoard({ player, parent: board });
    updateDomShips({ shipsArray: player.unplacedShips, parent: ships });
    if (player.canGameStart()) {
      // If its player vs player
      if (!(battleshipPlayerTwo instanceof Bot)) {
        domShipManager2({ player2: battleshipPlayerTwo });
        if (battleshipPlayerTwo.canGameStart()) {
          startGame({ player1: battleshipPlayerOne });
        }
      } else {
        startGame({ player1: player });
      }
    }
  } catch (error) {
    clearHighlightFromAllCellsExceptInputCells();
  }
  // console.log(event.dataTransfer.getData("text"));
  // console.log(event.target);
}

function onDragEnd({ event }) {
  const success = document.getElementById("ships");

  if (success !== null) {
    clearHighlightFromAllCellsExceptInputCells();
    const target = event.currentTarget;
    target.classList.remove("low-opacity");
    target.classList.remove("draggable");
  }
}

function setupDragEventListeners({ cell, player, coords }) {
  // function setupDragEventListeners(cell, player, player2, coords) {
  cell.addEventListener("dragenter", (event) => {
    onDragEnter({ event, player });
  });
  cell.addEventListener("drop", (event) => {
    // onDrop(event, player, player2);
    onDrop({ event, player });
  });
  // Necessary to allow dropping
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  cell.setAttribute("id", `${coords[0]}-${coords[1]}`);
}

export default setupDragEventListeners;
export { onDragStart, onDragEnd };
