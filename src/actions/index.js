export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const taskDone = (task) => {
  return  {
    type: 'MARK_TASK_AS_DONE',
    payload: task
  }
}
