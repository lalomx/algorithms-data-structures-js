class TreeNode {
  constructor(val, left, right) {
    this.value = null || val;
    this.left = null || left;
    this.right = null || right;
  }

  traverse(p, q) {
    // p => 14
    // q => 5

    const visited = [];
    const current = this;
    let anc = null

    function preorder(node) {
      visited.push(node.value);
      let left = false;
      let right = false
      if(node.left) { 
        left = preorder(node.left);
      }
      if(node.right) { 
        right = preorder(node.right);
      }
      const mid = node.value === p || node.value === q

      if(left + right + mid >= 2) {
        anc = node.value
      }

      return left || right || mid;
    }

    preorder(current);
    return anc;
  }
}

//         10
//      9        7
//   14   8   20   1
// 5   15   21
//   13
const root = new TreeNode(10);
root.left = new TreeNode(9)
root.right = new TreeNode(7)

root.left.left = new TreeNode(14)
root.left.right = new TreeNode(8)
root.right.left = new TreeNode(20)
root.right.right = new TreeNode(1)

root.left.left.left = new TreeNode(5)
root.left.left.right = new TreeNode(15)
root.right.left.left = new TreeNode(21)

root.left.left.right.left = new TreeNode(13)

const visited = root.traverse(21, 1)

console.log(visited)