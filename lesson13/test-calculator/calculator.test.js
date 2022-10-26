import { calc } from './calculator';

it('Check if function receive wrong argument and return null', () => {
  expect(calc(undefined)).toEqual(null);
  expect(calc(null)).toEqual(null);
  expect(calc(Number.MAX_SAFE_INTEGER)).toEqual(null);
  expect(calc({})).toEqual(null);
});

it('Check if sum works correctly', () => {
  expect(calc('1 + 3')).toEqual('1 + 3 = 4');
});

it('Check if subtract works correctly', () => {
  expect(calc('1 - 3')).toEqual('1 - 3 = -2');
});

it('Check if multiply works correctly', () => {
  expect(calc('1 * 3')).toEqual('1 * 3 = 3');
});

it('Check if dividing works correctly', () => {
  expect(calc('2 / 2')).toEqual('2 / 2 = 1');
});
