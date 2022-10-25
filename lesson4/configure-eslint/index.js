function run() {
  var a = 0;

  if (a == 1) {
    return c;
  }

  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  return (d = a);
}

run();

const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }

  return Math.max([...arr.map((number) => Math.abs(number))]);
};
