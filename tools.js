function toolchanger(tools, startIndex, target) {
  const obj = {}

  for (let i = 0; i <= tools.length - 1; i++) {
    obj[tools[i]] = i
  }

  const targetIndex = obj[target];
  const total = tools.length;

  let toRight = targetIndex - startIndex + total
  let toLeft = startIndex - targetIndex

  if (toLeft < 0) {
    toLeft += total
  }

  if (toRight > total) {
    toRight -= total
  }

  return Math.min(toRight, toLeft);
}

const tools = ['1', '2', '3', '4', '5', '6']
const startIndex = 1;
const target = '5'

const moves = toolchanger(tools, startIndex, target)
console.log(moves)