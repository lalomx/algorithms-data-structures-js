const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])

const toSort = [6, 8, 9, 3, 4, 1, 7, 11, 14, 2, 23, 98]

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pivotIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++
      swap(arr, pivotIdx, i)
    }
  }
  swap(arr, start, pivotIdx)

  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)

    // left
    quickSort(arr, left, pivotIdx - 1)
    // right
    quickSort(arr, pivotIdx + 1, right)
  }

  return arr;
}


console.log(quickSort(toSort))