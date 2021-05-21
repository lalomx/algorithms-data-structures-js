function sumArray(arr) {
  let sum = 0;
  arr
    .filter(s => /^\-?[1-9]\d*$/.test(s))
    .forEach(n => sum += +n)

  console.log(sum);
}

const arr = ['1', 'hola', '333', '-2'];

function sumArrayRecursive(arr, i) {
  if (i === arr.length) return 0;
  let sum = 0;
  let s = arr[i]
  if (/^\-?[1-9]\d*$/.test(s)) {
    sum += +s
  }
  return sum += sumArrayRecursive(arr, ++i)
}
sumArray(arr);
sumArrayRecursive(arr, 0)