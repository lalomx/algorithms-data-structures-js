class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }


  push(val) {
    // insert item at the beginning
    var node = new Node(val)
    if (!this.head) {
      this.head = node;
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
    return this
  }

  pop() {
    if (!this.length) return undefined;
    var current = this.head
    var tail = current
    while (current.next) {
      tail = current
      current = current.next
    }

    this.tail = tail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    };
    return current
  }

  unshift(val) {
    var newHead = new Node(val);
    if (!this.head) {

      this.head = newHead
      this.tail = this.head
    } else {
      newHead.next = this.head;
      this.head = newHead
    }

    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined

    let counter = 0
    let first = this.head

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        break;
      }
      first = first.next
    }

    return first
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    node.val = val;

    return true
  }

  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val)
    const node = this.get(index - 1);
    if(!node) return false;

    const newNode = new Node(val)
    const current = node.next
    newNode.next = current;
    node.next = newNode;
    this.length++
    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop()
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next
    this.length--
    return removed.val
  }

  reverse() {
    let node = this.head
    let prev = null;
    this.head = this.tail
    this.tail = node

    for (let i = 0; i < this.length; i++) {
      let next = node.next;
      node.next = prev;
    }
  }
}

let linkedList = new LinkedList()
linkedList.push('Hello')
linkedList.push('World')
linkedList.push('Mother fuckers!')
// let node = new Node('Hello');
// node.next = new Node('World');
// node.next.next = new Node('Mother fuckers!')

linkedList.pop()
linkedList.pop()
linkedList.pop()

linkedList.unshift('HOla');
linkedList.unshift('Bonjour')





linkedList.set(1, 'Wilkommen')

linkedList.insert(1, 'Ochinawa')
linkedList.insert(0, 'Bouongiorno')

linkedList.reverse()

console.log(linkedList)