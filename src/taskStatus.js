const checkbox = document.getElementsByClassName('checkbox');
const par = document.getElementsByTagName('p');

function updateCompletedInStorage(status, index) {
  const listOfTasks = JSON.parse(localStorage.getItem('todo'));
  if (!status) {
    listOfTasks.forEach((item, i) => {
      if (i === index) {
        item.completed = false;
        localStorage.setItem('todo', JSON.stringify(listOfTasks));
      }
      for (let i = 0; i < par.length; i += 1) {
        par[index].classList.remove('lineThrough');
      }
    });
  } else {
    listOfTasks.forEach((item, i) => {
      if (i === index) {
        item.completed = true;
        localStorage.setItem('todo', JSON.stringify(listOfTasks));
      }
      for (let i = 0; i < par.length; i += 1) {
        par[index].className = 'lineThrough';
      }
    });
  }
}

const status = () => {
  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('change', () => {
      const { checked } = checkbox[i];
      if (checked) {
        updateCompletedInStorage(true, i);
      } else {
        updateCompletedInStorage(false, i);
      }
    });
  }
};

export default status;