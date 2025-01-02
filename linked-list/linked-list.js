class LinkedList {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
  size(obj = this, counter = 0) {
    const self = this;
    if (obj.next === null) {
      counter++;
      return counter;
    } else {
      return self.size(obj.next, ++counter);
    }
  }
  pop() {
    this.at(this.size() - 2).next = null;
  }
  insertAt(value, index) {
    this.at(index).next = new Node(value, this.at(index + 1));
  }
  removeAt(index) {
    this.at(index - 1).next = this.at(index + 1);
  }
  toString() {
    let stringify = "";
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).next === null) {
        stringify += `( null )`;
        return stringify;
      }
      stringify += `( ${this.at(i).value} ) --> `;
    }
  }
  at(index, counter = 0, obj = this) {
    const self = this;

    if (index !== counter) {
      return self.at(index, ++counter, obj.next);
    }

    return obj;
  }
  find(value) {
    if (!this.contains(value)) return null;
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).value === value) {
        return i;
      }
    }
  }
  contains(value, obj = this) {
    const self = this;
    if (obj.value === value) {
      return true;
    }
    if (obj.next === null) {
      return false;
    } else {
      return self.contains(value, obj.next);
    }
  }
  prepend(value) {
    const current = new LinkedList(this.value, this.next);
    this.next = current;
    this.value = value;
  }
  append(value) {
    this.tail().next = new Node(value);
  }
  head() {
    return this;
  }
  tail(obj = this) {
    const self = this;
    if (obj.next === null) {
      return obj;
    } else {
      return self.tail(obj.next);
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
