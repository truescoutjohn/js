const INITIAL_VALUE_COUNTER = -1;

export function makeCounter() {
  let counter = INITIAL_VALUE_COUNTER;

  return function () {
    counter += 1;
    return counter;
  };
}
