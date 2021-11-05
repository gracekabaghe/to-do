import './style.css';
import { completed, retrieveStorage, saveToStorage } from './interactive.js';
import { addTask, deleteTodoList } from './edit.js';

const container = document.querySelector('.included-item');
const removeCompleted = document.querySelector('.btn');
const addToList = document.querySelector('.add-list');
const list = [];

function removeElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function addItems() {
  const taskList = JSON.parse(localStorage.getItem('todo'));
  removeElement(container);
  let thetaskList;
  if (localStorage.getItem('todo') === null) {
    thetaskList = list;
  } else {
    thetaskList = taskList;
  }
  thetaskList.forEach((item) => {
    if (item.completed) {
      container.innerHTML += `
      <div class="included-item">
         <div class="checkbox-p">
                <input class="check" id="${item.index}" type="checkbox" checked>
                <p class="included-item-p lineThrough" id="${item.index}">${item.description}</p>
                <i class="fas fa-ellipsis-v trash"></i>
                </div>
            <div><hr></div>
        </div>`;
    } else {
      container.innerHTML += `
      <div class="included-item">
         <div class="checkbox-p">
                <input class="check" id="${item.index}" type="checkbox" >
                <p class="included-item-p" id="${item.index}">${item.description}</p>
                <i class="fas fa-ellipsis-v trash"></i>
                </div>
            <div><hr></div>
        </div>`;
    }
  });
  bindListenerTasks();
}

function display() {
  list.sort((a, b) => {
    const num1 = a.index;
    const num2 = b.index;

    if (num1 < num2) {
      return -1;
    }
    if (num1 > num2) {
      return 1;
    }
    return 0;
  });
}

function displayTodo() {
  display();
  addItems();
  bindListenerTasks()
}

function reindex(list) {
  list.forEach((addTaskItem, i) => {
    addTaskItem.id = i;
  });
  saveToStorage(list);
  displayTodo();
}

function bindListenerTasks() {
  const addedItem = document.querySelectorAll('.add-list-in');
  addedItem.forEach((elem => {
    elem.removeEventListener('blur', (e) => {
      switchTask(e);
    });
  }));
  addedItem.forEach((elem) => {
    elem.addEventListener('blur', (e) => {
      switchTask(e);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    displayTodo(list);
  }
  if (localStorage.getItem('todo') === null) { saveToStorage(list); }
});
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('check')) {
    list = retrieveStorage();
    completed(e.target);
  }
  saveToStorage(list);
});

// add items to the list
addToList.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoEntry = document.getElementById('addto-list').value;
  if (todoEntry === '') {
    alert('Add a task here');
  } else {
    addTask(todoEntry, false, list.length, list);
    addTodo();
    saveToStorage(list);
    addToList.reset();
  }
});

function switchTask(e) {
  const el = e.target;
  const position = el.dataset.index;
  const desc = el.innerText;

  list.forEach((job) => {
    if (job.id == position) {
      job.description = desc;
    }
  });
  saveToStorage(list);
}

container.addEventListener('click', (e) => {
  const job = document.querySelector('.addedItem').textContent;
  if (e.target.classList.contains('list-container')) {
    deleteTodoList(e.target);
  }
  if (e.target.classList.contains('delete')) {
    todoLists = todoLists.filter((item) => item.description !== job);
    reindex(list);
    window.location.reload();
  }
});

removeCompleted.addEventListener('click', () => {
  list = list.filter((item) => elem.completed === false);
  reindex(list);
  saveToStorage(list);
  window.location.reload();
});