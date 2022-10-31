export const createCalculator = () => {
  let currentValue = 0;
  return {
    add(number) {
      currentValue += number;
    },
    decrease(number) {
      currentValue -= number;
    },
    reset() {
      currentValue = 0;
    },
    getMemo() {
      return currentValue;
    },
  };
};
