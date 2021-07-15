class MaxHeap {
  constructor() {
    this.values = []
  }

  insert (value) {
    this.values.push(value);
    let index = this.values.length - 1;
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value > parent) {
        this.values[index] = parent;
        this.values[parentIndex] = value;
        index = parentIndex;
      } else { break; }
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (!this.values.length) {
      return max;
    }

    this.values[0] = end;
    let idx = 0;
    
    while(true) {
      const value = this.values[idx];
      const leftIdx = 2*idx + 1;
      const rightIdx = 2*idx + 2;
      const left = this.values[leftIdx] || -1
      const right = this.values[rightIdx] || -1
      const max = Math.max(left, right);

      if (max === -1) {
        break;
      }

      if(max < value) {
        break;
      }

      let temp, maxIdx;

      if(max === left) {
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
    return max;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

maxHeap.extractMax()
maxHeap.extractMax()
maxHeap.extractMax()
maxHeap.extractMax()
maxHeap.extractMax()
maxHeap.extractMax()
maxHeap.extractMax()

// 10
// 10 11
// 11 10 12
console.log(maxHeap.values)