function getLetters() {
  const letters = []
  for (var i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i))
  }
  return letters
}

const letters = getLetters()
console.log(letters)

// (?=.*Odoo)(?=.*\#rules).*