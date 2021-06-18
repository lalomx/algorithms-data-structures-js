function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var val = arr[i]
    var j = i - 1
    while(j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = val
  }

  return arr;
}

console.log(insertionSort([7, 2, 9, 32, 123, 8, 1, 0, -1]))