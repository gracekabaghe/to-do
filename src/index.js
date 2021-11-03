import './style.css';

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
addItems();