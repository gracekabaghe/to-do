let tasks = [];

function generateID() {
  const list = JSON.parse(localStorage.getItem('todo'));
  list.forEach((item, i) => {
    i += 1;
    item.index = i;
    localStorage.setItem('todo', JSON.stringify(list));
  });
}

const inputField = document.getElementById('addTask');
const addToList = (newTask) => {
  if (localStorage.getItem('todo') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('todo'));
  }
  tasks.push(newTask);
  localStorage.setItem('todo', JSON.stringify(tasks));
};

function tasksArr() {
  const inputFieldValue = inputField.value;
  const newTask = {
    description: inputFieldValue,
    completed: false,
    index: 0,
  };
  addToList(newTask);
  generateID();
}

export { tasksArr, generateID };
