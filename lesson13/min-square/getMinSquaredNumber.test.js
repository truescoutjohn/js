import getMinSquaredNumber from './getMinSquaredNumber';

it('Check if function receive empty array', () => {
  expect(getMinSquaredNumber([])).toEqual(null);
});

it('Check if function receive string', () => {
  expect(getMinSquaredNumber('asd')).toEqual(null);
});

it('Check if function receive empty array', () => {
  expect(getMinSquaredNumber([-777, -2, 3])).toEqual(4);
});
