function naiveSearchStr(str, sub) {
  if(sub.length > str.length) return 0;
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    let isMatch = sub[0] === str[i];
    if (!isMatch) continue;
    let k = i
    for (let j = 1; j < sub.length; j++) {
      if (sub[j] !== str[k + 1]) break;
      if (j === sub.length - 1) {
        num++
      }
      k++
    }
  }

  return num
}

console.log(naiveSearchStr('lahaahperroah', 'ah'))

// lichaahperro
//      ah