
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// MDMXLIV - 1444

const d = new Map([
  [1000, 'M'],
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5, 'V'],
  [1, 'I']
]);


 let intToRoman = (num) => {
  if(num >= 4000) return undefined;
  let str = num.toString()

  let result = '';
  (function helper(input) {
      if (input.length <= 0) return
      let unit = input[0]
      let key = 10**(input.length - 1)
      console.log(key, unit)

      if (unit == 9) {
        result += d.get(key) + d.get(key * 10)
      } else if (unit == 4) {
        result += d.get(key) + d.get(key * 5)
      } else if (unit >= 5) {
        result += d.get(5 * key) + d.get(key).repeat(unit - 5)
      } else {
        result += d.get(key).repeat(unit)
      }
      
      helper(input.substring(1))
      
  })(str);
  
  return result;
};

console.log(intToRoman(1994))
console.log(intToRoman(1994))