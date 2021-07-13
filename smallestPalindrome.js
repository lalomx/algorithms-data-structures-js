function smallestPalindrome(s0) {
  let start = 0
  let end = s0.length - 1
  let first = ''
  let last = ''
  while (start <= end) {
      let left = s0[start].charCodeAt(0)
      let right = s0[end].charCodeAt(0)
      
      if (left !== right) {
          right = left
          first += String.fromCharCode(left)
          last = `${String.fromCharCode(right)}${last}`
      } else if (end - start === 0 && left > 97) {
          left++
          first += String.fromCharCode(left)
      } else if (start === end && left > 97) {
          left++
          first += String.fromCharCode(left)
          last = `${String.fromCharCode(right)}${last}`
      } else {
          first += String.fromCharCode(left)
          last = `${String.fromCharCode(right)}${last}`
      }
      
      console.log(first, last)
      
      start++
      end--
  }
  
  return first + last
}
