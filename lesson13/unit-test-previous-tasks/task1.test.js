import { reverseArray } from './task1';

it('Check if function reverse array correctly', () => {
  expect(reverseArray([1, 3, 5])).toEqual([5, 3, 1]);
  expect(reverseArray(null)).toEqual(null);
  expect(reverseArray([1, [], {}])).toEqual([{}, [], 1]);
});
