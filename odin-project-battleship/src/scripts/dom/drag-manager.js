import Bot from "../logic/ai";
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

function onDrop({ event, player, playerOne, playerTwo }) {
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
    updateDomBoard({ player, parent: board, playerOne, playerTwo });
    updateDomShips({
      shipsArray: player.unplacedShips,
      parent: ships,
      playerOne,
      playerTwo,
    });
    if (player.canGameStart()) {
      if (!(playerTwo instanceof Bot)) {
        domShipManager2({ player2: playerTwo, playerOne, playerTwo });
        if (playerTwo.canGameStart()) {
          startGame({ player1: playerOne, playerOne, playerTwo });
        }
      } else {
        startGame({ player1: player, playerOne, playerTwo });
      }
    }
  } catch (error) {
    clearHighlightFromAllCellsExceptInputCells();
  }
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

function setupDragEventListeners({
  cell,
  player,
  coords,
  playerOne,
  playerTwo,
}) {
  cell.addEventListener("dragenter", (event) => {
    onDragEnter({ event, player, playerOne, playerTwo });
  });
  cell.addEventListener("drop", (event) => {
    onDrop({ event, player, playerOne, playerTwo });
  });
  // Necessary to allow dropping
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  cell.setAttribute("id", `${coords[0]}-${coords[1]}`);
}

export default setupDragEventListeners;
export { onDragStart, onDragEnd };
