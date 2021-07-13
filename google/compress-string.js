// 3[abc]4[ab]c
// 2[3[a]b]

function decomp(str, times = 1) {
  let result = ''
  let i = 0;
  
  let finish = false;
  let end = str.length;
  let repeat = 0
  let chunk = ''
  while (i < end && str[i] !== ']') {
    const code = str[i].toLowerCase().charCodeAt(0);
    if (code >= 48 && code <= 57) {
      repeat = repeat * 10 + +str[i];
      console.log('num',repeat)
    } else if (code >= 97 && code <= 122) {
      console.log(str[i], times)
      result += str[i]

    } else {
      repeat = 0
    }
  }
  return result.repeat(times);
}

console.log(decomp('35[abc]4[ab]c'))
// console.log(decomp('aaa'))