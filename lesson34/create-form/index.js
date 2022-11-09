const _baseUrl = 'https://636a8bfbc07d8f936da160be.mockapi.io/api/v1/users';

const _form = document.forms[0];
const _statesValidationForm = {};

const _onInput = event => {
  if (event.target.reportValidity()) {
    _statesValidationForm[event.target.name] = true;
  } else if (Object.values(_statesValidationForm).all(item => item === true)) {
    document
      .querySelector('button')
      .setAttribute('disabled', _statesValidationForm[event.target.name]);
  } else {
    _statesValidationForm[event.target.name] = !_statesValidationForm[event.target.name];
  }
};

const _createUser = data =>
  fetch(_baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

const _onSubmitForm = event => {
  event.preventDefault();

  const data = Array.from(new FormData(event.target)).reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {},
  );
  _createUser(data)
    .then(response => response.json())
    .then(task => {
      event.target.reset();
      alert(JSON.stringify(task));
    });
};

const initHandlers = () => {
  [..._form.querySelectorAll('input')].forEach(element =>
    element.addEventListener('input', _onInput),
  );
  _form.addEventListener('submit', _onSubmitForm);
};

// document.addEventListener('DOMContentLoaded', initHandlers);
initHandlers();
