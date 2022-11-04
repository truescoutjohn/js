import { changeTaskState, getTasks, KEY_TASKS } from './storage.js';

// input: object, function
// output: undefined
const switchStateTaskHandler = (event, callbackRender) => {
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  const tasks = getTasks(KEY_TASKS);
  const task = tasks.find(({ id }) => id === listItemElem.dataset.id);
  task.done = !task.done;
  listItemElem.classList.toggle('list__item_done');
  if (task.done) {
    checkbox.setAttribute('checked', '');
  } else {
    checkbox.removeAttribute('checked');
  }
  changeTaskState(task.id, task.done);
  callbackRender(tasks);
};

// input: function
// ouput: function
export const switchStateTaskWrapper = callbackRender => {
  return function (event) {
    switchStateTaskHandler(event, callbackRender);
  };
};
