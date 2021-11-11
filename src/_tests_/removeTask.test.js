import deleteItem from "../_mocks_/removeTask";

describe('remove a task from the list', () => {
  const tasks = [
    {
      description: 'complete',
      status: false,
      index: '1',
    },
    {
      description: 'two',
      status: false,
      index: '2',
    },
    {
      description: 'three',
      status: false,
      index: '3',
    }
  ]
  test ('remove an entry from the todo list', () => {
    let todo = tasks[1]
    expect(deleteItem(todo, tasks)).toHaveLength(2)
  })
})