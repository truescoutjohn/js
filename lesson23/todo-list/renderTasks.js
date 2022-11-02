import { switchStateTaskWrapper } from './eventsHandler.js';

// input: object, string
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

// input: boolean
// output: object
function createCheckbox(done, eventHandler) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.addEventListener('change', eventHandler);
  return checkbox;
}

// input: object
// output: undefined
export const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = createListItem(done, id);
      const checkbox = createCheckbox(done, switchStateTaskWrapper(renderTasks));
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
