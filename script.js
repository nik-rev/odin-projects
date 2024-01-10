const para = document.querySelector(".abc");
para.textContent = ``;

function factorial(input) {
  if (input === 0) {
    return 1;
  } else if (input % 1 !== 0) {
    return "ERROR";
  }

  storedInput = input;
  for (let i = input - 1; i > 0; i--) {
    storedInput *= i;
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
  return input1 + input2;
}

function subtract(input1, input2) {
  return input1 - input2;
}

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

function power(input1, input2) {
  return input1 ** input2;
}
