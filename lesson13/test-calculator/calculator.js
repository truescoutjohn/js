export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [operand1, operation, operand2] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = Number(operand1) + Number(operand2);
      break;
    case '-':
      result = Number(operand1) - Number(operand2);
      break;
    case '*':
      result = Number(operand1) * Number(operand2);
      break;
    case '/':
      result = Number(operand1) / Number(operand2);
      break;
    default:
      console.error(new Error('Something goes wrong'));
  }

  return `${expression} = ${result}`;
};
