/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
 var mincostTickets = function(days, costs) {
  const durations = [1, 7, 30]
  const memo = new Array(days.length)
    
  return (function dp(i) {
    if (i >= days.length) return 0
    if(!!memo[i]) return memo[i]
    
    let min = Infinity
    let j = i
    for(let k = 0; k < durations.length; k++) {
      while(j < days.length && days[j] < days[i] + durations[k]) {
        j++
        min = Math.min(min, dp(j) + costs[k])
      }
    }
    
    memo[i] = min
    return min
  })(0)
};

mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2, 7, 15])