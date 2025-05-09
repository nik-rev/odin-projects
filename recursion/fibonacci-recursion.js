function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const previous = fibsRec(n - 1);
    const lastNumber = previous.at(-1);
    const secondToLastNumber = previous.at(-2);
    const sum = lastNumber + secondToLastNumber;
    return previous.concat(sum);
  }
}

document.getElementById(
  "fibonacci-recursive"
).textContent = `Fibonacci Recursive: ${fibsRec(25)}`;
