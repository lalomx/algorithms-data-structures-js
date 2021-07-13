class Stack {
  constructor() {
    this.first = null;
    this.length = 0;
    this.last = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node
    } else {
      const currentFirst = this.first;
      this.first = node;
      this.first.next = currentFirst;
    }

    this.length++
    return this.length;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }

    this.length--;
    return temp.value;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

const stack = new Stack();

stack.push(34);
stack.push(65);

console.log(stack);

let val = stack.pop();


console.log(val);

console.log(stack);

val = stack.pop();

console.log(val);

console.log(stack);


val = stack.pop();

console.log(val);