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
// list.append("goodbye");
// list.append("yo bro");

function getLastElement(obj) {
  if (obj.next === null) {
    console.log(obj);
    return obj;
  } else {
    getLastElement(obj.next);
  }
}

console.log(getLastElement(list));
