const n = Math.floor(Math.random() * (1000001 - 1)) + 1;
console.log(n)

function verify(num) {
  if (n < num) return 1;
  if (n > num) return -1;
  return 0;
}

function guessNumber() {
  const max = 1000000;
  let guess = 1;
  let out = max / 2;
  let temp = out;

  while (guess < 50) {
    const v = verify(out);

    if (temp < 2) {
      temp = temp * 2
    } else {
      temp = temp / 2
    }

    temp = Math.ceil(temp)

    if (v === 1) {
      out -= temp;
    }
    else if (v === -1) {
      out += temp;
    }
    else {
      console.log('You win!');
      break;
    }

    guess++

  }

  console.log('Your guess is ' + guess)
}

guessNumber()