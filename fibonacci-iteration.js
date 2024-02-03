function fibsIter(n) {
  let a = 1;
  let b = 1;
  const array = [0, a, b];
  let c;
  for (let i = 3; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    array.push(c);
  }
  return array;
}

document.getElementById(
  "fibonacci-iteration"
).textContent = `Fibonacci Iteration: ${fibsIter(25)}`;
