export const countDown = (number) => {
  if (number <= 0) {
    console.log('Done')
    return
  }

  console.log(number)
  number--
  countDown(number)
}