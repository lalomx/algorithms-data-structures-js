function reverseArrayOperations(arr, op) {
  for (var i = 0; i < op.length; i++) {
    let start = op[i][0];
    let end = op[i][1];
    do {
      let last = arr[end]
      let first = arr[start]
      arr[start] = last
      arr[end] = first
      start++
      end--
    } while (end > start)
  }

  return arr;
}

const arr = reverseArrayOperations([1, 2, 3, 4, 5], [[0, 1], [1, 3], [2, 4]])

console.log(arr)