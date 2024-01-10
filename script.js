///
/// DECLARING ALL GLOBAL VARIABLES
///

const inputField = document.querySelector(".input-field");
const noteField = document.querySelector(".sub-text");
const allButtonsContainer = document.querySelector(".calculator");
const allButtonsArray = Array.from(
  allButtonsContainer.querySelectorAll("button")
);
const btnNine = document.querySelector(".nine");
const btnEight = document.querySelector(".eight");
const btnSeven = document.querySelector(".seven");
const btnSix = document.querySelector(".six");
const btnFive = document.querySelector(".five");
const btnFour = document.querySelector(".four");
const btnThree = document.querySelector(".three");
const btnTwo = document.querySelector(".two");
const btnOne = document.querySelector(".one");
const btnZero = document.querySelector(".zero");
const btnDel = document.querySelector(".del");
const btnAc = document.querySelector(".ac");
const btnReverseSign = document.querySelector(".reverse-sign");
const btnEquals = document.querySelector(".equals");
const btnPeriod = document.querySelector(".period");
const btnFactorial = document.querySelector(".factorial");
const btnSin = document.querySelector(".sin");
const btnCos = document.querySelector(".cos");
const btnTan = document.querySelector(".tan");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnDivide = document.querySelector(".divide");
const btnMultiply = document.querySelector(".multiply");
const btnPower = document.querySelector(".power");

let input1 = 0;
let input2;
let operator;
let operatorSingle;

///
///
///

///
/// MAIN PROGRAM LOGIC
///

function calculator() {
  // add code here to check if input1 or input2 contain
  // the letter "e" or "Infinity", if so they should be
  // immediately reset

  if (operator && operatorSingle === true) {
    input1 = inputField.textContent;
    if (operator === "factorial") {
      inputField.textContent = factorial(input1);
    } else if (operator === "sin") {
      inputField.textContent = sin(input1);
    } else if (operator === "cos") {
      inputField.textContent = cos(input1);
    } else if (operator === "tan") {
      inputField.textContent = tan(input1);
    }
  } else if (operator && input2 !== undefined) {
    if (operator === "add") {
      inputField.textContent = add(+input1, +input2);
    } else if (operator === "subtract") {
      inputField.textContent = subtract(+input1, +input2);
    } else if (operator === "multiply") {
      inputField.textContent = multiply(+input1, +input2);
    } else if (operator === "divide") {
      inputField.textContent = divide(+input1, +input2);
    } else if (operator === "power") {
      inputField.textContent = power(+input1, +input2);
    }
  }
}

for (button in allButtonsArray) {
  allButtonsArray[button].addEventListener("click", function () {
    noteField.textContent = "";
    if (inputField.textContent === "ERROR") {
      inputField.textContent = "";
    }
  });
}

function defineInput() {
  input1 = inputField.textContent;
  inputField.textContent = "";
}

function equals() {
  input2 = inputField.textContent;
  calculator();
}

///
///
///

///
/// ADDING BUTTON EVENT LISTENERS
///
btnReverseSign.addEventListener("click", function () {
  inputField.textContent = -+inputField.textContent;
});

btnAdd.addEventListener("click", function () {
  operator = "add";
  operatorSingle = false;
  defineInput();
});

btnSubtract.addEventListener("click", function () {
  operator = "subtract";
  operatorSingle = false;
  defineInput();
});

btnMultiply.addEventListener("click", function () {
  operator = "multiply";
  operatorSingle = false;
  defineInput();
});

btnDivide.addEventListener("click", function () {
  operator = "divide";
  operatorSingle = false;
  defineInput();
});

btnPower.addEventListener("click", function () {
  operator = "power";
  operatorSingle = false;
  defineInput();
});

btnEquals.addEventListener("click", function () {
  equals();
});

btnFactorial.addEventListener("click", function () {
  operator = "factorial";
  operatorSingle = true;
  calculator();
});

btnSin.addEventListener("click", function () {
  operator = "sin";
  operatorSingle = true;
  calculator();
});

btnCos.addEventListener("click", function () {
  operator = "cos";
  operatorSingle = true;
  calculator();
});

btnTan.addEventListener("click", function () {
  operator = "tan";
  operatorSingle = true;
  calculator();
});

btnPeriod.addEventListener("click", function () {
  // First let's check if inputField.textContent contains period
  if (inputField.textContent.includes(".")) {
    let index = inputField.textContent.indexOf(".");
    let split = inputField.textContent.split("");
    split.splice(index, 1);
    let test123 = split.join("");
    inputField.textContent = test123;
  }

  inputField.textContent += ".";
});

btnNine.addEventListener("click", function () {
  inputField.textContent += "9";
});

btnEight.addEventListener("click", function () {
  inputField.textContent += "8";
});

btnSeven.addEventListener("click", function () {
  inputField.textContent += "7";
});

btnSix.addEventListener("click", function () {
  inputField.textContent += "6";
});

btnFive.addEventListener("click", function () {
  inputField.textContent += "5";
});

btnFour.addEventListener("click", function () {
  inputField.textContent += "4";
});

btnThree.addEventListener("click", function () {
  inputField.textContent += "3";
});

btnTwo.addEventListener("click", function () {
  inputField.textContent += "2";
});

btnOne.addEventListener("click", function () {
  inputField.textContent += "1";
});

btnZero.addEventListener("click", function () {
  inputField.textContent += "0";
});

btnDel.addEventListener("click", function () {
  inputField.textContent = inputField.textContent.slice(0, -1);
});

btnAc.addEventListener("click", function () {
  inputField.textContent = "";
});

///
///
///

///
/// MATHEMATICAL OPERATORS LOGIC
///

function factorial(input) {
  if (input === 0) {
    return 1;
  } else if (input < 0) {
    noteField.textContent = "Factorial undefined for negative values";
    return "ERROR";
  } else if (input % 1 !== 0) {
    noteField.textContent = "Factorial undefined for non-integer values";
    return "ERROR";
  }
  storedInput = input;

  for (let i = input - 1; i > 0; i--) {
    storedInput *= i;
    if (storedInput >= 1e100) {
      noteField.textContent = "Answer exceeds 1e100";
      return "ERROR";
    }
  }
  return storedInput;
}

function sin(input) {
  return Math.sin(input);
}

function cos(input) {
  return Math.cos(input);
}

function tan(input) {
  return Math.tan(input);
}

function add(input1, input2) {
  if (input1 + input2 >= 1e100) {
    noteField.textContent = "Answer exceeds 1e100";
    return "ERROR";
  }
  return input1 + input2;
}

function subtract(input1, input2) {
  if (input1 - input2 <= -1e100) {
    noteField.textContent = "Answer is below -1e100";
    return "ERROR";
  }
  return input1 - input2;
}

function multiply(input1, input2) {
  if (input1 * input2 >= 1e100) {
    noteField.textContent = "Answer exceeds -1e100";
    return "ERROR";
  }
  return input1 * input2;
}

function divide(input1, input2) {
  if (input2 === 0) {
    noteField.textContent = "Cannot divide by 0";
    return "ERROR";
  } else {
    return input1 / input2;
  }
}

function power(input1, input2) {
  return input1 ** input2;
}

///
///
///
