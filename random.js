function random(from, to) {
  if (from === to) {
    return 0;
  }

  return Math.floor((Math.random() * from)) + from - to;
}

function isOdd(num) {
  return 0;
}
