export default function parallax(event) {
  const body = document.querySelector("body");
  const box = body.getBoundingClientRect();
  const xCenter = (box.left + box.right) / 2;
  const yCenter = (box.top + box.bottom) / 2;

  const X = event.clientX;
  const Y = event.clientY;

  const Xdifference = X - xCenter;
  const Ydifference = Y - yCenter;

  for (let i = 1; i <= 11; i++) {
    const thingy = document.getElementById(`layer-${i}`);
    thingy.style.transform = `translateX(${
      Xdifference * i * 0.01
    }px) translateY(${Ydifference * i * 0.01}px)`;
  }
}
