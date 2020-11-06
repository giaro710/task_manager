const initialTasks = {
  tasks: [
    { name: "Buy milk", done: false },
    { name: "Read for 1h", done: false },
    { name: "Meeting call at 6pm", done: false },
  ],
};

export const createTaskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // console.log('la vede')
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "MARK_TASK_AS_DONE":
      console.log("la vede");
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.name === action.payload.name) {
            if (task.done) {
              return { ...task, done: false };
            } else {
              return { ...task, done: true };
            }
          }
          return task;
        }),
      };
    default:
      console.log("default");
      return state;
  }
};
