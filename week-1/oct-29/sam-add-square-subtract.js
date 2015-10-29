function add(a, b) {
  return a + b;
}

function addThenSquare(c,d) {
  return add(c,d) * add(c,d);
}

function addThenSquareThenSubtract(e, f) {
  return addThenSquare(e, f) - e - f;
}

addThenSquareThenSubtract(2,3);
