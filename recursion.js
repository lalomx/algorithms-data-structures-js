 const countDown = (number) => {
  if (number <= 0) {
    console.log('Done')
    return
  }

  console.log(number)
  number--
  countDown(number)
}


const sumRange = (num) => {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

const factorial = (num) => {
  return num === 1 ? 1 : num * factorial(num - 1)
}

const collectOdds = (arr) => {
  let result = []

    (function helper(input) {
      if (!input.length) return

      if (input[0] % 2 !== 0) result.push(input[0])

      helper(input.slice(1))
    })(arr)

  return result
}

const power = (num, exp) => {
  if (exp === 0) return 1
  return num * power(num, exp - 1)
}

// [1, 2, 3]
const productOfArray = (arr) => {
  let total = 1

    (function helper(array) {
      if (!array.length) return
      total *= array[0]
      helper(array.slice(1))
    })(arr)

  return total
}

// 6

const recursiveRange = (num) => {

  let total = 0

  function helper(n) {
    if (n === 0) return
    total += n
    n--
    helper(n)
  }

  helper(num)

  return total
}

const fib = (n, memo=[]) => {
  if(memo[n] !== undefined) { return memo[n] }
  if(n <= 2) { return 1; }
  const res = fib(n-2, memo) + fib(n-1, memo)
  memo[n] = res
  return res
}

const fibTab = (n) => {
  if (n <= 2) { return 1; }
  const fibs = [0, 1, 1];
  for(let i = 3; i <= n; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
  }

  console.log(fibs)
  return fibs[n]
}

console.log(fibTab(15000))