import sum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('Check if function return squared number', () => {
  const triedArray = getSquaredArray([1, 2, 3]);
  expect(triedArray).toEqual([1, 4, 9]);
});

it('Check if function return squared number', () => {
  const triedArray = getOddNumbers([1, 2, 3, 4, 5]);
  expect(triedArray).toEqual([1, 3, 5]);
});

it('Check if function sum two operands', () => {
  expect(sum(1, 3)).toEqual(4);
});
