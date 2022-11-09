// algo
// 1. Validate form and unblock button
// 2. On submit
//   2.1. Prevent default behavior
//   2.2. Create form data
//   2.3. Make fetch request
// 3. Add event to inputs and form
const _baseUrl = 'https://636a8bfbc07d8f936da160be.mockapi.io/api/v1/users';

const _form = document.forms[0];
const _FIELDS_FORM_AMOUNT = [..._form.querySelectorAll('input')].length;
const _statesValidationForm = {};

const _setValideFlagToObject = input => {
  if (input.reportValidity()) {
    _statesValidationForm[input.name] = true;
  } else {
    _statesValidationForm[input.name] = false;
  }
};

const _setButtonDisabled = (button, states) => {
  if (states.every(item => item) && states.length === _FIELDS_FORM_AMOUNT) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

const _onInput = event => {
  _setValideFlagToObject(event.target);
  const states = Object.values(_statesValidationForm);
  const button = document.querySelector('button');
  _setButtonDisabled(button, states);
};

const _createUser = data =>
  fetch(_baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

const _onSubmitForm = event => {
  event.preventDefault();

  const data = Array.from(new FormData(event.target)).reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {},
  );

  _createUser(data).then(task => {
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
