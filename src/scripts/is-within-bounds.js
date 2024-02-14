function isWithinBounds(x, y) {
  if (x <= 10 && x >= 1 && y <= 10 && y >= 1) {
    return true;
  }
  return false;
}

export default isWithinBounds;
