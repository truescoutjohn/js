import { getTasks, KEY_TASKS, changeTaskState } from './storage.js';

// input: object, object
// ouput: undefined
const _updateTaskField = (checkbox, listItemElem) => {
  const task = getTasks(KEY_TASKS).find(({ id }) => id === listItemElem.dataset.id);
  if (!task.done) {
    checkbox.setAttribute('checked', '');
  } else {
    checkbox.removeAttribute('checked');
  }
  changeTaskState(task.id, !task.done, new Date());
};

// input: object, function
// output: boolean
const updateStateTaskHandler = (event, callbackRender) => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return false;
  }
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  listItemElem.classList.toggle('list__item_done');
  _updateTaskField(checkbox, listItemElem);
  callbackRender();
  return true;
};

// input: function
// ouput: function
export const updateStateTask = callbackRender => {
  return function (event) {
    updateStateTaskHandler(event, callbackRender);
  };
};
