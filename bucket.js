export class Bucket {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }

  size(obj = this, counter = 0) {
    const self = this;
    if (obj.next === null) {
      if (obj.value !== null && obj.key !== null) {
        counter++;
      }
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
    if (index === 0 && this.next === null) {
      this.key = null;
      this.value = null;
    } else if (index === 0) {
      this.key = this.next.key;
      this.value = this.next.value;
      this.next = this.next.next;
      // new Bucket(this.next.key, this.next.value, this.next.next);
    } else {
      this.at(index - 1).next = this.at(index + 1);
    }
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
  findIndex(key) {
    if (!this.contains(key)) return null;
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).key === key) {
        return i;
      }
    }
  }
  findValue(key) {
    if (!this.contains(key)) return null;
    // For every node in the bucket
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).key === key) {
        return this.at(i).value;
      }
    }
  }
  contains(key, obj = this) {
    const self = this;
    if (obj.key === key) {
      return true;
    }
    if (obj.next === null) {
      return false;
    } else {
      return self.contains(key, obj.next);
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
