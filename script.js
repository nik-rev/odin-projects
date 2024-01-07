let mainContainer = document.querySelector(".main-content");

// Select all cell-divs

function createCellDivs(length) {
  for (let i = 0; i < length ** 2; i++) {
    // Should create desired amount of divs and give them all a correct class
    let cellDiv = document.createElement("div");
    mainContainer.appendChild(cellDiv);
    cellDiv.classList.add("cell-div");
  }
}

function calculateSize(length) {
  let size = 1 / length;
  return size;
}

function setDivStyle(length) {
  let allDivs = document.querySelectorAll(".cell-div");
  console.log(allDivs);
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.width = "100px";
    allDivs[i].style.height = "100px";
    // Remove this later
    allDivs[i].style.border = "3px solid red";
  }
}

createCellDivs(50);
setDivStyle(50);
