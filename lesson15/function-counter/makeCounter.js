export function makeCounter() {
  let counter = -1;

  return function () {
    counter += 1;
    return counter;
  };
}
