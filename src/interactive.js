export function retrieveStorage() {
    return localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
  }
  
  export function saveToStorage(item) {
    localStorage.setItem('todo', JSON.stringify(item));
  }
  
  export function completed(element, item) {
    item.addEventListener('change', () => {
      const task = element.nextElementSibling.innerHTML;
      if (element.checked === true) {
        item.forEach((elem) => {
          if (elem.description === task) {
            item.completed = true;
          }
        });
        element.nextElementSibling.classList.add('linethrough');
      } else {
        item.forEach((elem) => {
          if (elem.description === task) {
            elem.completed = false;
          }
          item.nextElementSibling.classList.remove('linethrough');
        });
      }
      saveToStorage(item);
    });
  }
  
  export default { completed, retrieveStorage, saveToStorage };