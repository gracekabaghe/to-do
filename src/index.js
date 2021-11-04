import './style.css';
import { completed, saveToStorage  } from './interactive.js';

const container = document.querySelector('.included-item');
const list = [
  {
    description: 'Buy Apples',
    completed: false,
    index: 1,
  },
  {
    description: 'Cut Hair',
    completed: false,
    index: 2,
  },
  {
    description: 'Make Cookies',
    completed: false,
    index: 3,
  },
];

function addItems() {
  removeElement(container);
  list.forEach((item) => {
    container.innerHTML += `
      <div class="included-item">
         <div class="checkbox-p">
                <input class="check" id="${item.index}" type="checkbox">
                <p class="included-item-p" id="${item.index}">${item.description}</p>
                <i class="fas fa-ellipsis-v trash"></i>
                </div>   
            <div><hr></div>
        </div>`;
  });
}

function removeElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
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
}

// okay
window.addEventListener('DOMContentLoaded', () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    displayTodo(list);
  }
  saveToStorage(list);
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    completed(e.target, list);
  }
});