import Bot from "../logic/ai";
import Player from "../logic/player";
import updateDomBoard from "./dom-board-manager";
import updateDomShips from "./dom-ship-manager";

const playerVsPlayerButton = document.querySelector("#player-vs-player");
const playerVsAiButton = document.querySelector("#player-vs-ai");
const form = document.querySelector("form");
const playerTwoInput = document.querySelector("#player-2-name");
const playerOneInput = document.querySelector("#player-1-name");
const heading = document.querySelector("h1");
const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
const gameContainer = document.querySelector("#game-container");
const status = document.querySelector("#status");
const restartGameButton = document.querySelector("#game-over");
restartGameButton.addEventListener("click", () => {
  // 😂
  location.reload();
});

function toggleOptionsMenu() {
  playerVsAiButton.classList.add("no-display");
  playerVsPlayerButton.classList.add("no-display");
  form.classList.remove("no-display");
}

function submitForm(event) {
  event.preventDefault();
  gameContainer.classList.remove("no-display");
  status.classList.remove("no-display");
  // if playerTwoInput doesn't have no-display that means we have selected the Player vs Player option
  const gamemodeIsPVP = !playerTwoInput.className.includes("no-display");
  heading.classList.add("no-display");
  form.classList.add("no-display");
  playerVsAiButton.classList.add("no-display");
  playerVsPlayerButton.classList.add("no-display");
  const playerOne = new Player(playerOneInput.value, null, true);
  let playerTwo;
  if (!gamemodeIsPVP) {
    playerTwo = new Bot("The AI", playerOne, false);
  } else {
    playerTwo = new Player(playerTwoInput.value, playerOne, false);
  }
  playerOne.enemy = playerTwo;

  updateDomBoard({
    player: playerOne,
    parent: domBoard,
    playerOne,
    playerTwo,
  });
  updateDomShips({
    shipsArray: playerOne.unplacedShips,
    parent: domShips,
    playerOne,
    playerTwo,
  });
}

function setupInputScreenEventListeners() {
  playerVsPlayerButton.addEventListener("click", () => {
    toggleOptionsMenu();
    playerTwoInput.classList.remove("no-display");
  });
  playerVsAiButton.addEventListener("click", () => {
    toggleOptionsMenu();
  });
  form.addEventListener("submit", (event) => {
    submitForm(event);
  });
}

export default setupInputScreenEventListeners;
