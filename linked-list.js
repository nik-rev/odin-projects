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
  at(index, counter = 0, obj = this) {
    const self = this;

    if (index !== counter) {
      return self.at(index, ++counter, obj.next);
    }

    return obj;
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

const list = new LinkedList("1");
list.prepend("2");
list.prepend("3");
list.prepend("4");
list.prepend("5");
list.append("hello BROO");
list.append("AYOOOOOO LETS GOOOOO");
// list.append("goodbye");
// list.append("yo bro");
console.log(list.tail());
