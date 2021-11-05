import state from "src/store/tasks/state"
import actions from "src/store/tasks/actions"
import mutations from "src/store/tasks/mutations"
import getters from "src/store/tasks/getter"

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
