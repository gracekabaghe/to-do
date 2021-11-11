import localStorageMock from "./localStorage";

function deleteItem(todo, tasks) {
  let index = todo.index
  const currentTasks = tasks.filter(todo => todo.index !== index);
  tasks.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('todo', currentTasks);
  return currentTasks
}
export default deleteItem;