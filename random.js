function random(from, to) {
  return Math.floor((Math.random() * from)) + to - from;
}

function isOdd(num) {
  return num % 2 !== 0;
}