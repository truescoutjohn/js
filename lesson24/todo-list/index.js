// algo
// 1. Create event which is switched state of global state object
//   1.1. Find appropriate element in global state by id
//   1.2. Update field done
//   1.3. Call render method
//     1.3.1. Create list item, check done state and place relevalent class to this item
//     1.3.2. Create checkbox, check done state and place relevalent class to this item
//     1.3.3. Repeat from 1.3.1 to 1.3.2 while all objects is over and save to memory this array
//     1.3.4. Place to list all previous items
// 2. Create event which is made task by clicking creating button
//   2.1. Check if input is empty
//   2.2. If so it just skip all these steps
//   2.3. Paste in global state this object with right id and according done field (equivalent false)
//   2.4. Call render method and do 1.3.1 - 1.3.4 steps
// 3. All events should plugin to relevalent elements

const tasks = [
  { id: '1', text: 'Buy milk', done: false, date: new Date(1900, 1, 1) },
  { id: '2', text: 'Pick up Tom from airport', done: false, date: new Date(1900, 1, 5) },
  { id: '3', text: 'Visit party', done: false, date: new Date(1900, 1, 4) },
  { id: '4', text: 'Visit doctor', done: true, date: new Date(1900, 1, 3) },
  { id: '5', text: 'Buy meat', done: true, date: new Date(1900, 1, 2) },
];

// input: object, function
// output: undefined
const switchStateTaskHandler = (event, callbackRender) => {
  const checkbox = event.target;
  const listItemElem = event.target.closest('.list__item');
  listItemElem.classList.toggle('list__item_done');
  const task = tasks.find(({ id }) => id === listItemElem.dataset.id);
  task.done = !task.done;
  task.date = new Date();
  if (task.done) {
    checkbox.setAttribute('checked', '');
  } else {
    checkbox.removeAttribute('checked');
  }
  callbackRender(tasks);
  console.log(tasks);
};

// input: function
// ouput: function
const switchStateTaskWrapper = callbackRender => {
  return function (event) {
    switchStateTaskHandler(event, callbackRender);
  };
};

// input: object, function
// output: undefined
const createNewTaskHandler = (event, callbackRender) => {
  const input = event.target.parentElement.querySelector('.task-input');
  if (input.value) {
    tasks.push({
      id: (tasks.length + 1).toString(),
      text: input.value,
      done: false,
      date: new Date(),
    });
    input.value = '';
  }
  callbackRender(tasks);
  console.log(tasks);
};

// input: function
// output: function
const createNewTaskWrapper = callbackRender => {
  return function (event) {
    createNewTaskHandler(event, callbackRender);
  };
};

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
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((task1, task2) =>
      task1.done === task2.done ? task2.date - task1.date : task1.done - task2.done,
    )
    .map(({ id, text, done }) => {
      const listItemElem = createListItem(done, id);
      const checkbox = createCheckbox(done, switchStateTaskWrapper(renderTasks));
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

// input: undefined
// output: undefined
const initializeTodoHandler = () => {
  renderTasks(tasks);
  document
    .querySelector('.create-task-btn')
    .addEventListener('click', createNewTaskWrapper(renderTasks));
};

initializeTodoHandler();

document.addEventListener('DOMContentLoaded', initializeTodoHandler);
