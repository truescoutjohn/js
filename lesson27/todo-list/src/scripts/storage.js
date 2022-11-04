export const KEY_TASKS = 'tasksList';

// input: undefined
// output: array
export const getTasks = key => {
  const tasks = JSON.parse(localStorage.getItem(key) || '[]');
  return tasks.map(task => ({ ...task, date: new Date(task.date) }));
};

// input: array
// output: undefined
export const setTasks = (key, tasks = []) => {
  const newTasks = getTasks(key).concat(tasks);
  console.log(newTasks);
  localStorage.setItem(key, JSON.stringify(newTasks));
};

// input: undefined
// output: number
export const getTasksLength = () => {
  return getTasks(KEY_TASKS).length;
};

// input: number, boolean
// ouput: undefined
export const changeTaskState = (objId, state, date) => {
  const tasks = getTasks(KEY_TASKS);
  const task = tasks.find(({ id }) => id === objId);
  task.done = state;
  task.date = date;
  localStorage.setItem(KEY_TASKS, JSON.stringify(tasks));
};
