import updateDomBoard from "./dom-board-manager";
import chatgpt from ".";

function cleanUpAfterShipPlacement() {
  const ships = document.getElementById("ships");
  const originalBoard = document.getElementById("board");
  document.body.removeChild(ships);
  document.body.removeChild(originalBoard);
}

function startGame(player1, player2 = chatgpt) {
  cleanUpAfterShipPlacement();
  const playerOneBoard = document.createElement("div");
  const playerTwoBoard = document.createElement("div");
  const status = document.createElement("h1");
  status.textContent = `${player1.name}, your turn to strike!`;
  document.body.append(status, playerOneBoard, playerTwoBoard);
  console.log(player1.name, player2.name);
  playerOneBoard.id = `board-${player1.name}`;
  playerTwoBoard.id = `board-${player2.name}`;
  playerOneBoard.classList.add("board");
  playerTwoBoard.classList.add("board");
  updateDomBoard(player2, playerTwoBoard, false);
  updateDomBoard(player1, playerOneBoard, false);
}

export default startGame;
