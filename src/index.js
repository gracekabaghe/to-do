import './style.css';
import taskDisplay from './interactive.js';
import taskStatus from './taskStatus.js';
import removeTask from './removeTask.js';

const addNewTask = require('./addNewTask.js');

const inputField = document.getElementById('addTask');
const addTaskbtn = document.getElementById('addTaskbtn');

removeTask();
const displayOnLoad = () => {
  if (localStorage.getItem('todo') != null) {
    taskDisplay();
  }
};
displayOnLoad();

const clear = document.getElementById('clear');
const clearCompleted = () => {
  clear.addEventListener('click', () => {
    let list = JSON.parse(localStorage.getItem('todo'));
    list = list.filter((el) => el.completed === false);
    localStorage.setItem('todo', JSON.stringify(list));
    taskDisplay();
    window.location.reload();
  });
};

const list = document.getElementsByClassName('list');
const updateContent = (newDescription, index) => {
  const list = JSON.parse(localStorage.getItem('todo'));
  list.forEach((element, i) => {
    if (i === index) {
      element.description = newDescription;
      localStorage.setItem('todo', JSON.stringify(list));
    }
  });
};
const update = () => {
  for (let i = 0; i < list.length; i += 1) {
    const newContent = list[i];
    list[i].addEventListener('input', () => {
      const editedConent = newContent.textContent;
      updateContent(editedConent, i);
    });
  }
};

const execute = () => {
  addNewTask.tasksArr();
  taskDisplay();
  taskStatus();
  update();
  removeTask();
  inputField.value = '';
};

addTaskbtn.addEventListener('click', () => {
  execute();
});

addNewTask.generateID();
removeTask();
taskStatus(0);
update();
clearCompleted();