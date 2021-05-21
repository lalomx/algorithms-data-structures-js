function reverseArrayOperations(arr, op) {
  const newArr = arr.slice();
  for (var i = 0; i < op.length; i++) {
    const start = op[i][0];
    const end = op[i][1];
    const elements = end - start + 1
    console.log('elements: ' + elements)
    const limit = Math.floor(elements / 2)
    console.log('limit', limit)
    for (let j = end; j >= start; j--) {
      console.log(j)
    }
  }

  return arr;
}

const arr = reverseArrayOperations([1, 2, 3, 4, 5], [[0, 1], [1, 3]])

console.log(arr)