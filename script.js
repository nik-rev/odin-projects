let mainContainer = document.querySelector(".main-content");
let getConverterWidth = window
  .getComputedStyle(document.querySelector(".percentage-to-pixels"))
  .getPropertyValue("width");

const btnReset = document.querySelector(".reset-btn");

// Select all cell-divs

function extractNumbers(string) {
  let matches = string.match(/(\d+)/);
  if (matches) {
    return +matches[0];
  }
}

function createCellDivs(length) {
  for (let i = 0; i < length ** 2; i++) {
    // Should create desired amount of divs and give them all a correct class
    let cellDiv = document.createElement("div");
    mainContainer.appendChild(cellDiv);
    cellDiv.classList.add("cell-div");
  }
}

function calculateWidth(length) {
  let size = ((1 / length) * 100).toString() + "%";
  return size; // Percentage occupied by one div
}

function calculateHeight(length) {
  let heightWidth =
    extractNumbers(calculateWidth(length)) *
    extractNumbers(getConverterWidth) *
    0.01;

  return heightWidth;
}

function configureEachDiv(length) {
  let allDivs = document.querySelectorAll(".cell-div");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.width = `${calculateWidth(length)}`;
    allDivs[i].style.height = `${calculateHeight(length)}px`;
    allDivs[i].style.boxSizing = "border-box";
    allDivs[i].addEventListener("mouseover", function () {
      allDivs[i].classList.add("red-highlight");
    });
  }
}

function createCanvas(length = 16) {
  createCellDivs(length);
  configureEachDiv(length);
}

function deleteCanvas() {
  let allDivs = document.querySelectorAll(".cell-div");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].remove();
  }
}

btnReset.addEventListener("click", function () {
  let resetInput = document.querySelector(".reset-input").value;
  deleteCanvas();
  createCanvas(resetInput);
});

createCanvas();
