import { makeCounter } from './makeCounter';

it('Check if make counter works correctly', () => {
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  expect(counter1).not.toBe(counter2);
  expect(counter1()).toEqual(0);
  expect(counter2()).toEqual(0);
  expect(counter1()).toEqual(counter2());
});
