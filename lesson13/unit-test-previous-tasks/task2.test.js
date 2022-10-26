import { withdraw } from './task2';

it('Check if function works correctly', () => {
  expect(withdraw(['Bob', 'Alice', 'George'], [1000, 5000, 400], 'Bob', 100000)).toEqual(-1);
  expect(withdraw(['Bob', 'Alice', 'George'], [1000, 5000, 400], 'Bob', 1000)).toEqual(0);
  expect(withdraw(['Bob', 'Alice', 'George'], [1000, 5000, 400], 'Bob', 500)).toEqual(500);
});
