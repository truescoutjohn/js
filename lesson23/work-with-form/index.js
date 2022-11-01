// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
const getFormData = formElem => {
  const formFields = [...new FormData(formElem)];
  // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

  return formFields.reduce(function (acc, formField) {
    const prop = formField[0]; // здесь "name" инпута
    const value = formField[1]; // здесь "value" инпута
    // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
    // const [prop, value] = formField;
    return {
      // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
      ...acc,
      // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
      [prop]: value,
    };
  }, {});
};

const formElem = document.querySelector('.login-form');
const formData = getFormData(formElem);

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.entries(new FormData(formElem));
// algo
// 0. Create array of keys of form field
// 1. Create object error
// 2. Get the span of appropriate input
// 3. Find throught keys relevalent key
// 4. Validate span value
// 5. Filter and join to string our array
// 6. Insert into span previous string
const behaviourForm = event => {
  event.preventDefault();
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));
};

const isEmail = string => (!string.includes('@') ? 'Should be an email' : false);

const isRequired = string => (!string ? 'Required' : false);

const errors = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validateError = (field, element) =>
  errors[field]
    .map(validator => validator(element.value))
    .filter(errorText => errorText)
    .join(', ');

const setErrors = event => {
  const span = event.target.parentElement.querySelector(`.error-text`);
  const inputType = event.target.type;
  const errorMessage = validateError(inputType, event.target);
  span.textContent = errorMessage;
};

const inputs = [...document.querySelectorAll('.form-input')];
inputs.forEach(input => input.addEventListener('input', setErrors));
formElem.addEventListener('submit', behaviourForm);
