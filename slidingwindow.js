// maxSubArray
export const maxSubArray = (arr, num) => {
  // initialaze tempSum
  let tempSum = 0
  // initialize maxSum
  let maxSum = 0
  // loop over array until num to get the first n-elements sum
  for (let i = 0; i < num; i++) {
    tempSum += arr[i]
  }
  maxSum = tempSum

  // loop over array and sliding the windows of elements until
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum || null
}

export const minSubArrayLen = (arr, num) => {
  let len = 1
  let i = 0
  let j = 0
  let sum = 0
  let min = +Infinity
  while (i < arr.length) {
    if (j === arr.length) {
      break
    }
    sum = sum += arr[j]
    if (sum >= num) {
      i++
      j = i
      sum = 0
      min = Math.min(min, len)
      len = 1
    } else {
      j++
      len++
    }
  }

  return min === +Infinity ? 0 : min
}

export const findLongestSubstring = (str) => {
  // thecatinthehat

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char, start, longest, seen[char])
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count

    seen[char] = i + 1;

  }
  return longest;
}