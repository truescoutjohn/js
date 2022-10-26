export default numbers =>
  Array.isArray(numbers) && numbers.length
    ? numbers.reduce((acc, number) => {
        if (Math.abs(number) < Math.abs(acc)) {
          return Math.abs(number);
        }
        return Math.abs(acc);
      }) ** 2
    : null;
