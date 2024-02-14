class Segment {
  #state = true;

  kill() {
    if (this.#state) {
      this.#state = false;
    } else {
      throw new Error("This segment has already been hit");
    }
  }
}

export default Segment;
