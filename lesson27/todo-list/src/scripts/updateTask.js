import { getTasks, KEY_TASKS, changeTaskState } from './storage.js';

// input: object, object
// ouput: undefined
const changeTaskField = (checkbox, listItemElem) => {
  const task = getTasks(KEY_TASKS).find(({ id }) => id === listItemElem.dataset.id);
  task.done = !task.done;
  task.date = new Date();
  if (task.done) {
    checkbox.setAttribute('checked', '');
  } else {
    checkbox.removeAttribute('checked');
  }
  changeTaskState(task.id, task.done);
};

// input: object, function
// output: undefined
const updateStateTaskHandler = (event, callbackRender) => {
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  listItemElem.classList.toggle('list__item_done');
  changeTaskField(checkbox, listItemElem);
  callbackRender();
};

// input: function
// ouput: function
export const updateStateTaskWrapper = callbackRender => {
  return function (event) {
    updateStateTaskHandler(event, callbackRender);
  };
};
