import taskStatus from './taskStatus.js';
import domObjects from './interactive.js';

const deletebtn = document.getElementsByClassName('fa-trash-alt');
function removefromlist(index) {
  const list = JSON.parse(localStorage.getItem('todo'));
  list.splice(index, 1);
  localStorage.setItem('todo', JSON.stringify(list));
  domObjects();
  taskStatus();
}

const deleteItem = () => {
  for (let i = 0; i < deletebtn.length; i += 1) {
    deletebtn[i].addEventListener('click', () => {
      removefromlist(i);
      window.location.reload();
    });
  }
};
export default deleteItem;