function toChunks(array) {
  return Array.from({ length: Math.ceil(array.length / 2) }, (v, i) =>
    array.slice(i * 2, i * 2 + 2)
  );
}

function ArrayIncludesArray(parentArray, subsetArray) {
  let counter = 0;
  parentArray.forEach((subarray) => {
    if (JSON.stringify(subarray) === JSON.stringify(subsetArray)) {
      counter += 1;
    }
  });
  return counter !== 0;
}

function clearHighlightFromAllCellsExceptInputCells(cells) {
  // const board = document.querySelector("#board");
  // const doNotUnHighlight = toChunks(JSON.parse(board.className.split(" ")[1]));
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const coordinates = [x, y];
      if (!ArrayIncludesArray(cells, coordinates)) {
        const cell = document.getElementById(`${x}-${y}`);
        cell.classList.remove("highlight");
      }
    }
  }
}

function onDragStart(event) {
  const target = event.currentTarget;
  // event.dataTransfer.clearData();
  setTimeout(() => target.classList.add("low-opacity"));
  setTimeout(() => target.classList.add("draggable"));
  // Set the drag's format and data.
  // Use the event target's id for the data
}

// function boardClassManager(board, coords) {
//   const amountOfCoordinates = board.className.match(/]/g);
//   if (Array.isArray(amountOfCoordinates) && amountOfCoordinates.length >= 2) {
//     const classToRemove = board.className.split(" ")[0];
//     board.classList.remove(classToRemove);
//   }
//   board.classList.add(`[${coords}]`);
// }

function highlightCells(coordinates) {
  coordinates.forEach((coordinate) => {
    const highlight = document.getElementById(
      `${coordinate[0]}-${coordinate[1]}`
    );
    highlight.classList.add("highlight");
  });
}

function onDragEnter(event, player) {
  const [x, y] = event.target.id.split("-").map((str) => Number(str));
  const board = document.querySelector("#board");
  const sizeOfShip = document
    .querySelector(".draggable")
    .className.match(/\d+/)
    .map((el) => Number(el))[0];
  try {
    const coords = player.placeShip(sizeOfShip, false, [x, y], true);
    // if (board.classList)
    // boardClassManager(board, coords);
    highlightCells(coords);
    clearHighlightFromAllCellsExceptInputCells(coords);
  } catch (error) {
    // do nothing for now
  }
}

function onDragLeave() {
  // const board = document.querySelector("#board");
  // const amountOfCoordinates = board.className.match(/]/g);
  // if (Array.isArray(amountOfCoordinates) && amountOfCoordinates.length >= 2) {
  //   const classToNotUnhighlight = toChunks(JSON.parse(board.className.split(" ")[1]));
  //   const chunked = toChunks(classToNotUnhighlight);
  //   for (let y = 10; y >= 1; y--) {
  //     for (let x = 1; x <= 10; x++) {
  //       const arr = [x, y];
  //       if (!ArrayIncludesArray(chunked, arr)) {
  //         break;
  //       }
  //       const cell = document.getElementById(`${x}-${y}`);
  //       cell.classList.remove('highlight');
  //     }
  //   }
  // }
}

function onDrop(event) {
  // console.log(event.dataTransfer.getData("text"));
  // console.log(event.target);
}

function onDragEnd(event) {
  const success = false;

  if (success) {
    // do something cool
  } else {
    const target = event.currentTarget;
    target.classList.remove("low-opacity");
    target.classList.remove("draggable");
  }
}

export { onDragStart, onDragEnd, onDragEnter, onDragLeave, onDrop };
