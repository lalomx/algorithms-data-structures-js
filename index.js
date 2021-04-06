import {
  validAnagram,
  countUniqueValues,
  sameFrequency,
  areThereDuplicates,
  averagePairs,
  isSubsequence
} from './pointers'

import {
  minSubArrayLen,
  maxSubArray,
  findLongestSubstring
} from './slidingwindow'

console.log(validAnagram('zaa', 'aaz'))

console.log(countUniqueValues([1, 1, 2, 2, 3, 5, 7, 7])) // 5
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([])) // 0

console.log(maxSubArray([6, 4, 72, 2354, 2, 5, 4, 2, 7], 3))

console.log(sameFrequency(123, 321))

console.log(areThereDuplicates(1, 2, 2, 4, 4, 5, 6, 7, 7, 3))


console.log(averagePairs([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))

isSubsequence('abc', 'abracadabra')

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))

console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thecatinthehat'))