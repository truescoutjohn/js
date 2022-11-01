// input: undefined
// output: undefined
export const finishForm = () => {
  const input = document.createElement('input');
  input.setAttribute('name', 'login');
  document.querySelector('.login-form').prepend(input);
  document.querySelector('input[name=password]').setAttribute('type', 'password');
};

finishForm();
