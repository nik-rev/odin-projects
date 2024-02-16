import { onDragStart, onDragEnd } from "./drag-manager";

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function createDomShips(shipsArray, parent) {
  const shuffledShipsArray = shuffle(shipsArray);
  shuffledShipsArray.forEach((ship) => {
    const domShip = document.createElement("div");
    domShip.classList.add("ship");
    domShip.classList.add(`ship-${ship}`);
    domShip.setAttribute("draggable", "true");
    domShip.addEventListener("dragstart", (event) => {
      onDragStart(event);
    });
    domShip.addEventListener("dragend", (event) => {
      onDragEnd(event);
    });
    parent.append(domShip);
  });
}

function clearDomShips(parent) {
  const domShips = [...parent.querySelectorAll(".ship")];
  domShips.forEach((domShip) => {
    parent.removeChild(domShip);
  });
}

function updateDomShips(shipsArray, parent) {
  clearDomShips(parent);
  createDomShips(shipsArray, parent);
}

export default updateDomShips;
