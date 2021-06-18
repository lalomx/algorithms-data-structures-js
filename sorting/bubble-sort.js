function bubbleSort(arr) {
  
  for(var i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) continue;
      const temp = arr[j];
      arr[j] = arr[j + 1]
      arr[j + 1] = temp;
      noSwap = false
    }

    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([7, 2, 9, 32, 123, 8, 1, 0, -1]))

