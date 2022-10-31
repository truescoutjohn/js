import { createCalculator } from '.';

it('Check if createCalculator works correctly', () => {
  const calculator1 = createCalculator();
  const calculator2 = createCalculator();
  calculator1.add(5);
  calculator1.decrease(6);
  expect(calculator1).not.toBe(calculator2);
  expect(calculator1.getMemo()).toEqual(-1);

  calculator1.reset();
  expect(calculator1.getMemo()).toEqual(0);
});
