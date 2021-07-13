

// [1,2,3,1,2]

const str = '12312'
let i = 0
let m = 2
let k = 2




while (i < str.length) {
  console.log(i)
  let curr = str.slice(i, i + m)
  let possiblePattern = str.slice(i, i + curr.length * k);

  console.log(curr, possiblePattern, curr.repeat(k))
  i++
}


// for(var i = 0; i + m < arr.length; i++) {
//   console.log(i, i + m)
//   var pattern = arr.slice(i, i + m).join('');
//   if (map.has(pattern)) {
//       let val = map.get(pattern) + 1
//       map.set(pattern, val)
//   } else {
//       map.set(pattern, 1)
//   }
// }

// var max = 0

// for (var v of map.values()) {
//   max = Math.max(max, v)
// }

return max >= k