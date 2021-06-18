function binarySearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (right >= left) {
    let item = arr[middle];
    if (arr[middle] === value) return middle
    if (item > value) right = middle - 1;
    else left = middle + 1
    middle = Math.floor((right + left) / 2);
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([1, 2, 3, 4, 5], 6))
