function toolchanger(tools, startIndex, target) {
  const obj = {}

  for (let i = 0; i <= tools.length - 1; i++) {
    obj[tools[i]] = i
  }

  const targetIndex = obj[target];

  const total = tools.length;
  let current = startIndex;
  let movesRight = 0;
  let movesLeft = 0;
  while (current !== targetIndex) {
    if (current === targetIndex) {
      break;
    }

    movesRight++
    current = (current + 1) > total ? 0 : current + 1
  }

  current = startIndex

  while (current !== targetIndex) {
    if (current === targetIndex) {
      break;
    }

    movesLeft++
    current = (current - 1) < 0 ? total - 1 : current - 1
  }

  return Math.min(movesLeft, movesRight);

}

const tools = ['1', '2', '3', '4']
const startIndex = 1;
const target = '4'

const moves = toolchanger(tools, startIndex, target)
console.log(moves)