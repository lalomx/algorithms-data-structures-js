class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) { return null;}
    const temp = this.first
    if(this.last === this.first) { 
      this.last = null
    }
    this.first = this.first.next
    this.first = temp
    this.size--
    return temp.val;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}