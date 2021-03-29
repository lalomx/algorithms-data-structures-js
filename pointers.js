// anagram
export const validAnagram = (str1, str2) => {
  // check if strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {}
  const obj2 = {}
  // create freq obj for str1
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1
  }
  // create freq obj for str2
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1
  }
  // iterate over the keys of obj1
  for (let key in obj1) {
    // check if the key exists in obj2 and have the same value
    if (!(key in obj2)) {
      // if not return false
      return false
    }
    if (obj2[key] !== obj1[key]) {
      return false
    }
  }
  // return true
  return true
}

// countUniqueValues
export const countUniqueValues = (arr) => {
  let i = 0
  let j = 1
  while (j < arr.length) {
    const scout = arr[j]
    const comparer = arr[i]
    if (scout !== comparer) {
      i++
      arr.splice(i, 1, arr[j])
    }
    j++
  }
  return i !== 0 ? i + 1 : 0
}

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

  return maxSum
}

// Function that has two arguments
// The two number have the same frequency of digits
export const sameFrequency = (num1, num2) => {
  // create freq obj of num1 and num2
  const str1 = num1.toString()
  const str2 = num2.toString()
  let digits1 = {}
  let digits2 = {}
  for (let char of str1) {
    digits1[char] = (digits1[char] || 0) + 1
  }

  for (let char of str2) {
    digits2[char] = (digits2[char] || 0) + 1
  }

  // iterate over the keys of num1 and check if it exist in
  for (let char in digits1) {
    if (!(char in digits2)) {
      return false
    }

    if (digits2[char] !== digits1[char]) {
      return false
    }

    return true
  }
  // obj2 with the same value
  // if not return false
  // if it exists but with diff value return false
  // else return true

  return true
}

// arguments duplicates
export const areThereDuplicates = (...args) => {
  const obj = {}
  for (let arg of args) {
    obj[arg] = (obj[arg] || 0) + 1
  }

  return Object.values(obj).filter(e => e > 1) > 0
}

export const averagePairs = (arr, avg) => {
  // loop over array and point to the first element
  // and the next 
  // calculate avg if match return true, else false
  if (arr.length === 0) {
    return false
  }
  let first = 0
  let next = 1
  while (next < arr.length) {
    const average = (arr[first] + arr[next]) / 2
    if (average === avg) {
      return true
    }
    first++
    next++
  }

  return false
}

export const isSubsequence = (str1, str2) => {
  // abc 
  // abracadabra

  // create obj from str1, its values are its indexes
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}