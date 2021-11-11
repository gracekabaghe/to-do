import localStorageMock from "./localStorage";

function generateID(tasks) {
  const newTask = {
    description: document.getElementById('addTask').value,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorageMock.setItem('todo', tasks);
}

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

export default {generateID, tasksArr};