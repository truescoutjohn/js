import { tasks } from './tasks.js';

// input: object
// output: undefined
const switchStateTaskHandler = (event, callbackRender) => {
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  const task = tasks.find(({ id }) => id === listItemElem.dataset.id);
  task.done = !task.done;
  listItemElem.classList.toggle('list__item_done');
  if (task.done) {
    checkbox.setAttribute('checked', '');
  } else {
    checkbox.removeAttribute('checked');
  }
  callbackRender(tasks);
};

// input: function
// ouput: function
export const switchStateTaskWrapper = callbackRender => {
  return function (event) {
    switchStateTaskHandler(event, callbackRender);
  };
};

let currentId = 5;

// input: object
// output: undefined
const createNewTaskHandler = (event, callbackRender) => {
  const input = event.target.parentElement.querySelector('.task-input');
  if (input.value) {
    currentId += 1;
    tasks.push({ id: currentId.toString(), text: input.value, done: false });
    input.value = '';
  }
  callbackRender(tasks);
};

export const createNewTaskWrapper = callbackRender => {
  return function (event) {
    createNewTaskHandler(event, callbackRender);
  };
};
