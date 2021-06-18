function selectionSort(arr) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]])
  for (var i = 0; i < arr.length; i++) {
    let min = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[min]) continue;
      min = j
    }

    if (i !== min) swap(arr, i, min)
  }

  return arr;
}

console.log(selectionSort([7, 2, 9, 32, 123, 8, 1, 0, -1]))