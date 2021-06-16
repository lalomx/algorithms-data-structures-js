function stockPairs(stocksProfit, target) {
  let num = 0
  for (let i = 0; i < stocksProfit.length; i++) {
    for (let j = 0; j < stocksProfit.length; j++) {
      if (i === j) {
        continue;
      }

      if (stocksProfit[i] + stocksProfit[j] === target) {
        num += 1;
      }
    }
  }

  console.log(num);
  return num;
}

const stocks = [3, 6, 8, 1, 5, 5, 4, 4, 4, 6]
const target = 10

stockPairs(stocks, target)