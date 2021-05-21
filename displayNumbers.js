function displayNumbers() {
  for (var i = 1; i < 100; i++) {
    const open = i % 3 === 0 ? 'Open' : '';
    const source = i % 7 === 0 ? 'Source' : '';

    console.log(`${open}${source}` || i);
  }
}

displayNumbers();