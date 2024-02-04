class LinkedList {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
  prepend(value) {
    const current = new LinkedList(this.value, this.next);
    this.next = current;
    this.value = value;
  }
  append(value) {
    this.getLastElement().next = new Node(value);
  }
  getLastElement(obj = this) {
    const self = this;
    if (obj.next === null) {
      return obj;
    } else {
      return self.getLastElement(obj.next);
    }
  }
  // append(value) {}
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
console.log(list);
