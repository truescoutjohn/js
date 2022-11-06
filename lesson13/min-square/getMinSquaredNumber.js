export default numbers => {
  if (Array.isArray(numbers) && numbers.length) {
    return (
      numbers.reduce((acc, number) => {
        if (Math.abs(number) < Math.abs(acc)) {
          return Math.abs(number);
        }
        return Math.abs(acc);
      }) ** 2
    );
  }
  return null;
};
