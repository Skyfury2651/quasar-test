export default {
  tasks: (state) => {
    return state.tasks
  },
  tasksTodo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      const task = state.tasks[key]
      if(!task.completed){
        tasks[key] = task
      }
    })

    return tasks
  },
  tasksCompleted: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      const task = state.tasks[key]
      if(task.completed){
        tasks[key] = task
      }
    })

    return tasks
  },
}
