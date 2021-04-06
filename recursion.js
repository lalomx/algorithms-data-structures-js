export const countDown = (number) => {
  if (number <= 0) {
    console.log('Done')
    return
  }

  console.log(number)
  number--
  countDown(number)
}


export const sumRange = (num) => {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

export const factorial = (num) => {
  return num === 1 ? 1 : num * factorial(num - 1)
}

export const collectOdds = (arr) => {
  let result = []

    (function helper(input) {
      if (!input.length) return

      if (input[0] % 2 !== 0) result.push(input[0])

      helper(input.slice(1))
    })(arr)

  return result
}

export const power = (num, exp) => {
  if (exp === 0) return 1
  return num * power(num, exp - 1)
}

// [1, 2, 3]
export const productOfArray = (arr) => {
  let total = 1

    (function helper(array) {
      if (!array.length) return
      total *= array[0]
      helper(array.slice(1))
    })(arr)

  return total
}

// 6

export const recursiveRange = (num) => {

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

export const fib = (num) => {

}