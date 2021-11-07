export default {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    console.log(task)
    const taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }

    commit('addTask', payload)
  }
}
