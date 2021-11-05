const state = {
  tasks: [
    {
      id: 1,
      name: 'Go to shop',
      completed: false,
      dueDate: '2021/11/05',
      dueTime: '18:30',
    }, {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '2021/11/05',
      dueTime: '14:00',
    },
    {
      id: 3,
      name: 'Get so bao hiem',
      completed: false,
      dueDate: '2021/11/05',
      dueTime: '15:00',
    }
  ]
}
const mutations = {}
const actions = {}
const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
