function pythagoras(x, y) {
  return Math.sqrt(x ** 2 + y ** 2);
}

export default function parallax(event) {
  const body = document.querySelector("body");
  const box = body.getBoundingClientRect();
  const xCenter = (box.left + box.right) / 2;
  const yCenter = (box.top + box.bottom) / 2;

  const X = event.clientX;
  const Y = event.clientY;

  const Xdifference = X - xCenter;
  const Ydifference = Y - yCenter;

  const difference = pythagoras(Xdifference, Ydifference);

  for (let i = 1; i <= 11; i++) {
    const thingy = document.getElementById(`layer-${i}`);
    thingy.style.left = `${Xdifference * i * 0.01}px`;
    thingy.style.top = `${Ydifference * i * 0.01}px`;
    // thingy["left"] = difference * i * 0.1;
    // console.log(thingy.top, thingy.left);
  }
}
