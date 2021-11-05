export function retrieveStorage() {
  return localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
}

export function saveToStorage(item) {
  localStorage.setItem('todo', JSON.stringify(item));
}

function completedTrue(status, id) {
  const taskList = JSON.parse(localStorage.getItem('todo'));
  const taskId = parseInt(id, 10);
  if (status === true) {
    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i].index === taskId) {
        taskList[i].completed = true;
      }
    }
  } else {
    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i].index === taskId) {
        taskList[i].completed = false;
      }
    }
  }
  saveToStorage(taskList);
  localStorage.setItem('todo', JSON.stringify(taskList));
}

export function completed(item) {
  item.addEventListener('change', () => {
    if (item.checked === true) {
      completedTrue(true, item.id);
      item.nextElementSibling.classList.add('lineThrough');
    } else {
      completedTrue(false, item.id);
      item.nextElementSibling.classList.remove('lineThrough');
    }
  });
}

export default { completed, retrieveStorage, saveToStorage };