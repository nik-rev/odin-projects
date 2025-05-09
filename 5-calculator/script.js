const inputField = document.querySelector(".input-field");
const noteField = document.querySelector(".sub-text");
const storage = document.querySelector(".storage");
const allButtonsContainer = document.querySelector(".calculator");
const allButtonsArray = Array.from(
  allButtonsContainer.querySelectorAll("button")
);
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
const rowThree = document.querySelector(".row-three");
const rowFour = document.querySelector(".row-four");
const rowFive = document.querySelector(".row-five");
const rowSix = document.querySelector(".row-six");
let input1, input2, operator, operatorSingle;

function programConstructor() {
  configureAllButtons();
  createNumberButtons();
}

function calculator() {
  singleOperatorManager();
  doubleOperatorManager();
}

programConstructor();

function evaluateStorage() {
  if (storage.textContent === "Welcome to my calculator!") {
    storage.textContent = "";
  }
}

function evaluateInput() {
  if (
    inputField.textContent.includes("e") ||
    inputField.textContent.includes("Infinity") ||
    inputField.textContent.includes("NaN")
  ) {
    input1 = 0;
    input2 = undefined;
    operator = undefined;
    operatorSingle = undefined;
    inputField.textContent = "";
    noteField.textContent = "";
  } else if (inputField.textContent.includes("ERROR")) {
    inputField.textContent = inputField.textContent.replace("ERROR", "");
    noteField.textContent = "";
  }
}

function singleOperatorManager() {
  if (operator && operatorSingle === true) {
    input1 = inputField.textContent;
    if (operator === "!") {
      inputField.textContent = factorial(input1);
    } else if (operator === "sin") {
      inputField.textContent = sin(input1);
    } else if (operator === "cos") {
      inputField.textContent = cos(input1);
    } else if (operator === "tan") {
      inputField.textContent = tan(input1);
    }
  }
}

function doubleOperatorManager() {
  if (operator && input2 !== undefined) {
    if (operator === "+") {
      inputField.textContent = add(+input1, +input2);
    } else if (operator === "-") {
      inputField.textContent = subtract(+input1, +input2);
    } else if (operator === "*") {
      inputField.textContent = multiply(+input1, +input2);
    } else if (operator === "/") {
      inputField.textContent = divide(+input1, +input2);
    } else if (operator === "**") {
      inputField.textContent = power(+input1, +input2);
    }
  }
}

function configureAllButtons() {
  for (button in allButtonsArray) {
    allButtonsArray[button].addEventListener("click", function () {
      evaluateInput();
      evaluateStorage();
      noteField.textContent = "";
      if (inputField.textContent === "ERROR") {
        inputField.textContent = "";
      }
    });
  }
}

function createNumberButtons() {
  for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    const buttonValue = document.createTextNode(`${i}`);
    button.appendChild(buttonValue);
    button.addEventListener("click", function () {
      inputField.textContent += `${i}`;
      evaluateInput();
      evaluateStorage();
    });

    if (i === 0) {
      rowSix.insertBefore(button, btnReverseSign);
    } else if (i < 4) {
      rowFive.insertBefore(button, btnAdd);
    } else if (i < 7) {
      rowFour.insertBefore(button, btnMultiply);
    } else if (i < 10) {
      rowThree.insertBefore(button, btnDel);
    }
  }
}

function defineInput() {
  input1 = inputField.textContent;
  storage.textContent = `${input1} ${operator}`;
  inputField.textContent = ``;
}

function equals() {
  input2 = inputField.textContent;
  storage.textContent = ``;
  calculator();
}

btnReverseSign.addEventListener("click", function () {
  inputField.textContent = -+inputField.textContent;
});

btnAdd.addEventListener("click", function () {
  operator = "+";
  operatorSingle = false;
  defineInput();
});

btnSubtract.addEventListener("click", function () {
  operator = "-";
  operatorSingle = false;
  defineInput();
});

btnMultiply.addEventListener("click", function () {
  operator = "*";
  operatorSingle = false;
  defineInput();
});

btnDivide.addEventListener("click", function () {
  operator = "/";
  operatorSingle = false;
  defineInput();
});

btnPower.addEventListener("click", function () {
  operator = "**";
  operatorSingle = false;
  defineInput();
});

btnEquals.addEventListener("click", function () {
  equals();
});

btnFactorial.addEventListener("click", function () {
  operator = "!";
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

btnDel.addEventListener("click", function () {
  inputField.textContent = inputField.textContent.slice(0, -1);
});

btnAc.addEventListener("click", function () {
  inputField.textContent = "";
  storage.textContent = "";
});

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
