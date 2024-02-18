import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";

function cleanUpAfterShipPlacement() {
  const ships = document.getElementById("ships");
  const originalBoard = document.getElementById("board");
  const gameContainer = document.getElementById("game-container");
  gameContainer.removeChild(ships);
  gameContainer.removeChild(originalBoard);
}

function domShipManager2({ player2, playerOne, playerTwo }) {
  const gameContainer = document.getElementById("game-container");
  cleanUpAfterShipPlacement();
  const ships = document.createElement("div");
  const board = document.createElement("div");
  const rotateButton = document.createElement("button");
  rotateButton.id = "rotate";
  rotateButton.textContent = "Rotate Ships";
  ships.id = "ships";
  board.id = "board";
  ships.append(rotateButton);
  gameContainer.append(ships, board);
  updateDomBoard({ player: player2, parent: board, playerOne, playerTwo });
  updateDomShips({
    shipsArray: player2.unplacedShips,
    parent: ships,
    playerOne,
    playerTwo,
  });
}

function startGame({ player1, player2, playerOne, playerTwo }) {
  player2 ??= playerTwo;
  const gameContainer = document.getElementById("game-container");
  cleanUpAfterShipPlacement();
  const playerOneBoard = document.createElement("div");
  const playerTwoBoard = document.createElement("div");
  // const status = document.createElement("h1");
  // status.textContent = `${player1.name}, your turn to strike!`;
  gameContainer.append(playerOneBoard, playerTwoBoard);
  playerOneBoard.id = `board-${player1.name}`;
  playerTwoBoard.id = `board-${player2.name}`;
  playerOneBoard.classList.add("board");
  playerTwoBoard.classList.add("board");
  updateDomBoard({
    player: player2,
    parent: playerTwoBoard,
    setup: false,
    playerOne,
    playerTwo,
  });
  updateDomBoard({
    player: player1,
    parent: playerOneBoard,
    setup: false,
    playerOne,
    playerTwo,
  });
}

export default startGame;
export { domShipManager2 };
