let convert = function (s, numRows) {
  // P       H
  // A     S I
  // Y   I   R
  // P L     I G
  // A       N

  // PHASIYIRPLIGAN

  // PAYPALISHIRING

  //    0.    1.  2   3.   4.  5
  // 0 [['P', '', '', '', 'H', '']
  // 1 ['A', '', '', 'S', 'I', '']
  // 2 ['Y', '', 'I', '', 'R', '']
  // 3 ['P', 'L', '', '', 'I', 'G']
  // 4 ['A', '', '', '', 'N', '']]

  // {
  //   0: 'PH',
  //   1: 'ASI',
  //   2: 'YIR',
  //   3: 'PLIN',
  //   4: 'AN'
  // }

  // - I R C
  // P 0 0 0
  // A 1 1 0
  // Y 2 2 0
  // P 3 3 0
  // A 4 4 0
  // L 5 3 1
  // I 6 2 2
  // S 7 1 3
  // H 8 0 4
  // I 9 1 4
  // R 10 2 4
  // I 11 3 4
  // N 12 4 4 
  // G 13 3 5
  // Q 14 2 6
  // S 15 1 7
  // T 16 0 8
  // H 17 1 8

  let i = 0
  let rowIndex = 0
  let obj = {}
  for (let k = 0; k < numRows; k++) {
    obj[k] = ''
  }

  let countup = true
  while (i < s.length) {
    obj[rowIndex] += s[i]

    if (countup) {
      ++rowIndex;

      if (rowIndex >= numRows - 1) countup = false;
    }
    else {
      --rowIndex;

      if (rowIndex <= 0) countup = true;
    }
    i++
  }
  console.log(Object.values(obj).join(''));
};

convert('paypalishiring', 5)