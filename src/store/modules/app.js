const app = {
  state: {
    siderbar: {
      opened: false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.siderbar.opened = !state.siderbar.opened
    }
  },
  actions: {
    ToggleSiderBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
