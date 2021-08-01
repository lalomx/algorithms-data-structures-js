class ListNode {
  constructor(value, next) {
    this.value = value || null
    this.next = next || null
  }

  toString() {
    let curr = this
    let next = curr.next;
    while(curr !== null) {
      if(curr != null) {
        console.log(curr.value);
      }

      curr = curr.next
    }
  }

  push(value) {
    let curr = this;
    while(true) {
      let next = curr.next;
      if (next === null) { 
        curr.next = new ListNode(value);
        return;
      } else { 
        curr = next;
      }
    }
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.value = null || val;
    this.left = null || left;
    this.right = null || right;
  }
}

const root = new TreeNode(10)
root.left = new TreeNode(3);
root.right = new TreeNode(15)
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(17);


//        10
//    3       15
//  1  7    11  17

// output
// 10
// 3 -> 15
// 1 -> 7 -> 11 -> 17

function countDepth(treeNode) { 

  const listMap = {};

  function search(node, count=0) {
    if(!node) { return count; }
    list =  listMap[count] || new ListNode(node.value)

    if (list.value !== node.value) {
      list.push(node.value);
    }

    listMap[count] = list
    search(node.left, count+1)
    search(node.right, count+1) 
  }
  search(treeNode)

  for(let i in listMap) {
    console.log(listMap[i].toString())
  }
}

countDepth(root)
