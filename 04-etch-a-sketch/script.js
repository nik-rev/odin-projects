const mainContainer = document.querySelector(".main-content");

const btnReset = document.querySelector(".reset-btn");

function getConverterWidth() {
  let converterWidth = window
    .getComputedStyle(document.querySelector(".percentage-to-pixels"))
    .getPropertyValue("width");

  return converterWidth;
}

function extractNumbersFromString(string) {
  let matches = string.match(/(\d+)/);
  if (matches) {
    return +matches[0];
  }
}

function randomNum() {
  return Math.floor(Math.random() * 256);
}

function calculateCellWidth(length) {
  let size = ((1 / length) * 100).toString() + "%";
  return size; // Percentage occupied by one div
}

function calculateCellHeight(length) {
  let heightWidth =
    extractNumbersFromString(calculateCellWidth(length)) *
    extractNumbersFromString(getConverterWidth()) *
    0.01;

  return heightWidth;
}

function addCellEventListener(allDivs, divID, length, passOverAmt) {
  allDivs[divID].addEventListener("mouseover", function () {
    passOverAmt++;
    allDivs[divID].style.backgroundColor = setRandomColor(passOverAmt);
    allDivs[divID].style.border = `${
      Math.random() * 10
    }px dashed ${setRandomColor(passOverAmt)}`;
  });
}

function setRandomColor(passOverAmt = 0) {
  let randomColor = `rgb(${randomNum() - 25 * passOverAmt}, ${
    randomNum() - 25 * passOverAmt
  }, ${randomNum() - 25 * passOverAmt})`;

  return randomColor;
}

function deleteCanvas() {
  let allDivs = document.querySelectorAll(".cell-div");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].remove();
  }
}

function createCells(length) {
  for (let i = 0; i < length ** 2; i++) {
    // Should create desired amount of divs and give them all a correct class
    let cellDiv = document.createElement("div");
    mainContainer.appendChild(cellDiv);
    cellDiv.classList.add("cell-div");
  }
}

function styleCells(allDivs, divID, length) {
  allDivs[divID].style.width = `${calculateCellWidth(length)}`;
  allDivs[divID].style.height = `${calculateCellHeight(length)}px`;
  allDivs[divID].style.boxSizing = "border-box";
  allDivs[divID].style.borderRadius = `${Math.random() * 100}px`;

  addCellEventListener(allDivs, divID, length, (passOverAmt = 0));
}

function configureEachDiv(length) {
  let allDivs = document.querySelectorAll(".cell-div");
  for (let divID = 0; divID < allDivs.length; divID++) {
    styleCells(allDivs, divID, length);
  }
}

function createCanvas(length = 4) {
  createCells(length);
  configureEachDiv(length);
}

function addResetButtonEventListener() {
  btnReset.addEventListener("click", function () {
    let resetInput = document.querySelector(".reset-input").value;
    deleteCanvas();
    createCanvas(resetInput);
  });
}

function onStartUp() {
  createCanvas();
  addResetButtonEventListener();
}

onStartUp();
