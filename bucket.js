export class Bucket {
  constructor(key = null, value = null, next = null) {
    this.key = key;
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

  set(key, value, index = "modify head") {
    if (index === "modify head") {
      this.key = key;
      this.value = value;
    } else {
      this.at(index).next = new Node(key, value, this.at(index + 1));
    }
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
      stringify += `( ${this.at(i).key}, ${this.at(i).value} ) --> `;
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
  prepend(key, value) {
    const current = new Bucket(this.key, this.value, this.next);
    this.next = current;
    this.key = key;
    this.value = value;
  }
  append(key, value) {
    this.tail().next = new Node(key, value);
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

export class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}
