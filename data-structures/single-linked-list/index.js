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

    console.log(current.val)
    console.log(tail.val)
    
    this.tail = tail
    this.tail.next = null
    this.length -= 1

    if (!this.length) {
      this.head = null;
      this.tail = null
    }
    return current;
  }

  traverse() {
    var current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
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
console.log(linkedList)