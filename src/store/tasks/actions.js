import {uid} from "quasar";

export default {
  updateTask({commit}, task) {
    commit('updateTask', task)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    const taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }

    commit('addTask', payload)
  }
}
