import Vue from 'vue'

export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // Vue.delete(state.tasks, id)
    delete state.tasks[id]
  },
  addTask({commit}, task) {

  }
}
