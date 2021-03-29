export const addUpToFirst = (n) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }

  return total
}

export const addUpToSecond = (n) => n * (n + 1) / 2

export const countUpAndDown = (n) => {
  console.log('Going up!')
  for (let i = 0; i < n; i++) {
    console.log(i)
  }

  console.log('At the top!\nGoing down...')

  for (let j = n; j >= 0; j--) {
    console.log(j)
  }

  console.log('Backed down..Bye!')
}

export const printAllPairs = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}