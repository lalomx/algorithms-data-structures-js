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

  traverse_dfs_pre() {
    if (!this.root) { return []; }
    const visited = [];
    const current = this.root;

    function preorder(node) {
      visited.push(node.value);
      if (node.left) { preorder(node.left); }
      if (node.right) { preorder(node.right); }
    }

    preorder(current);

    return visited;
  }

  traverse_dfs_post() {
    if (!this.root) { return []; }
    const visited = [];
    const current = this.root;
    function postorder(node) {
      if (node.left) { 
        postorder(node.left);
      }
      if (node.right) {
        postorder(node.right);
      }
      visited.push(node.value);
    }

    postorder(current);

    return visited;
  }

  traverse_dfs_in() {
    if (!this.root) { return []; }
    const visited = [];
    const current = this.root;
    function inorder(node) {
      if (node.left) { 
        inorder(node.left);
      }
      visited.push(node.value);
      if (node.right) {
        inorder(node.right);
      }
    }

    inorder(current);

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
console.log(tree.traverse_dfs_pre())
console.log(tree.traverse_dfs_post())
console.log(tree.traverse_dfs_in())