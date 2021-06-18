function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const value1 = arr1[i];
    const value2 = arr2[j];

    if (value1 < value2) {
      result.push(value1);
      i++
    } else {
      result.push(value2);
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle))
  console.log(left, right)
  return merge(left, right)
}

// console.log(sort([1, 2, 3, 4, 10], [3, 7, 90, 100]))

console.log(mergeSort([5, 73452, 21, 6, 2, 7, 3, 6,9 ,57,65, 32]))