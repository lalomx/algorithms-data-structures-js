class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue (value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    let index = this.values.length - 1;
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (node.priority < parent.priority) {
        this.values[index] = parent;
        this.values[parentIndex] = node;
        index = parentIndex;
      } else { break; }
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (!this.values.length) {
      return min;
    }

    this.values[0] = end;
    let idx = 0;
    
    while(true) {
      const node = this.values[idx];
      const leftIdx = 2*idx + 1;
      const rightIdx = 2*idx + 2;
      const left = this.values[leftIdx]
      const right = this.values[rightIdx];
      let min;
      
      if (!left && !right) {
        break;
      } else if(!left && !!right) {
        min = right;
      } else if(!!left && !right) {
        min = left;
      } else { 
        if (left.priority < right.priority) {
          min = left
        } else {
          min = right
        }
      }

      if(min.priority > node.priority) {
        break;
      }

      let temp, maxIdx;

      if(min.priority === left.priority) {
        temp = left;
        maxIdx = leftIdx
      } else {
        temp = right
        maxIdx = rightIdx
      }
      
      this.values[maxIdx] = this.values[idx];
      this.values[idx] = temp;
      idx = maxIdx;
    }
    return min;
  }
}

module.exports = PriorityQueue

// const er = new PriorityQueue();
// er.enqueue('flu', 5);
// er.enqueue('gunshot', 1);
// er.enqueue('high fever', 4);
// er.enqueue('broken arm', 2);
// er.enqueue('glass in foot', 3);

// // 10
// // 10 11
// // 11 10 12
// console.log(er.values)

// console.log(er.dequeue())
// console.log(er.dequeue())
// console.log(er.dequeue())
// console.log(er.dequeue())
// console.log(er.dequeue())