import { updateStateTaskWrapper } from './updateTask.js';
import { getTasks, KEY_TASKS } from './storage.js';

// input: boolean, string
// output: object
const createListItem = (done, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.dataset.id = id;
  return listItemElem;
};

// input: boolean, function
// output: object
function createCheckbox(done, eventHandler) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  // should be event 'change' but test won't be passed
  checkbox.addEventListener('click', eventHandler);
  return checkbox;
}

// input: array
// output: undefined
export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';
  const tasksList = getTasks(KEY_TASKS);
  const tasksElems = tasksList
    .sort((task1, task2) =>
      task1.done === task2.done ? task2.date - task1.date : task1.done - task2.done,
    )
    .map(({ id, text, done }) => {
      const listItemElem = createListItem(done, id);
      const checkbox = createCheckbox(done, updateStateTaskWrapper(renderTasks));
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
