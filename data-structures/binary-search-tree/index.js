class BST {
  constructor() {
    this.root = null;
  }

  traverse_bfs() {
    if (!this.root) { return []; }
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }

      visited.push(current.value);
    }

    return visited;
  }

  find(value) {
    if (!this.root) { return null; }
    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) { 
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        } else {
          current = current.left;
          continue;
        }
      }
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
          continue;
        }
      }
    }
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.traverse_bfs());