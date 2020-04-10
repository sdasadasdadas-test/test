function random(from, to) {
  if (from === to) {
    return 0;
  }

  return Math.floor((Math.random() * from)) + from - to;
}

function isOdd(num) {
  switch(num) {
    case 0:
      return false;
    case 1:
      return false;
    case 2:
      return true;
  }
}
