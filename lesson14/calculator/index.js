let currentResult = 0;

function add(number) {
  currentResult += number;
}

function decrease(number) {
  currentResult -= number;
}

function reset() {
  currentResult = 0;
}

function getMemo() {
  return currentResult;
}
