function random(from, to) {
  if (from === to) {
    return 0;
  }

  return Math.floor((Math.random() * from)) + from - to;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}
