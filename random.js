function random(from, to) {
  return Math.floor((Math.random() * from)) + from - to;
}

function isOdd(num) {
  return num % 2 !== 0;
}