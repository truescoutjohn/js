const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// input: boolean
// ouput: object
const createCheckbox = done => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  return checkbox;
};

// input: string, boolean
// output: object
const createLi = (text, done) => {
  const li = document.createElement('li');
  li.classList.add('list__item');

  if (done) {
    li.classList.add('list__item_done');
  }

  li.textContent = text;
  return li;
};

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const elementsTasks = tasksList.map(({ text, done }) => {
    const checkbox = createCheckbox(done);
    const li = createLi(text, done);
    li.prepend(checkbox);
    return li;
  });
  const list = document.querySelector('.list');
  list.innerHTML = '';
  list.append(...elementsTasks);
};

window.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});
