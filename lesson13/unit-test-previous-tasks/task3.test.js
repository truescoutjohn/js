import { getAdults } from './task3';

it('Check if function works correctly', () => {
  const testObject = { Bob: 18, Alice: 18, John: 18 };
  expect(getAdults({ Bob: 17, Alice: 15, John: 18 })).toEqual({ John: 18 });
  expect(getAdults(testObject)).not.toBe(testObject);
  expect(getAdults({})).toEqual({});
});
