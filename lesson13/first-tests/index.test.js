const getEvenNumbers = numbers => numbers.filter(number => !(number % 2));

it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

it('Проверка функции на фильтрацию четных чисел', () => {
  const expectArray = getEvenNumbers([1, 2, 3, 4, 5]);

  expect(expectArray).toEqual([2, 4]);
});
