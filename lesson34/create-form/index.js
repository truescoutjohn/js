// algo
// 1. Validate form and unblock button
// 2. On submit
//   2.1. Prevent default behavior
//   2.2. Create form data
//   2.3. Make fetch request
// 3. Add event to inputs and form
const _baseUrl = 'https://636a8bfbc07d8f936da160be.mockapi.io/api/v1/users';

const _form = document.querySelector('.login-form');
const _FIELDS_FORM_AMOUNT = _form.querySelectorAll('.form-input').length;
const _statesValidationForm = {};
const _button = document.querySelector('.submit-button');

const _setValidationFlagToObject = input => {
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
  _setValidationFlagToObject(event.target);
  const states = Object.values(_statesValidationForm);
  _setButtonDisabled(_button, states);
};

const _createUser = data =>
  fetch(_baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

const _resetFlagsObject = () => {
  Object.keys(_statesValidationForm).forEach(key => {
    _statesValidationForm[key] = false;
  });
};
const _onSubmitForm = event => {
  event.preventDefault();

  const data = Array.from(new FormData(event.target)).reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {},
  );

  _createUser(data).then(task => {
    event.target.reset();
    alert(JSON.stringify(task));
    _button.setAttribute('disabled', '');
    _resetFlagsObject();
  });
};

const initHandlers = () => {
  [..._form.querySelectorAll('.form-input')].forEach(element =>
    element.addEventListener('input', _onInput),
  );
  _form.addEventListener('submit', _onSubmitForm);
};

// document.addEventListener('DOMContentLoaded', initHandlers);
initHandlers();
