import { getTasksLength, getTasks, setTasks, KEY_TASKS } from './storage.js';

// input: object, function
// output: undefined
const createNewTaskHandler = (event, callbackRender) => {
  const input = event.target.parentElement.querySelector('.task-input');
  if (input.value) {
    setTasks(KEY_TASKS, [
      { id: (getTasksLength() + 1).toString(), text: input.value, done: false },
    ]);
    input.value = '';
  }
  callbackRender(getTasks(KEY_TASKS));
};

// input: function
// output: function
export const createNewTaskWrapper = callbackRender => {
  return function (event) {
    createNewTaskHandler(event, callbackRender);
  };
};
