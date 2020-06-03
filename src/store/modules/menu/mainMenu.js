export default {
  namespaced: true,
  state: {
    loading: false,
    menu: []
  },
  getters: {
    loading (state) {
      return state.loading
    },
    menu (state) {
      return state.menu
    }
  },
  mutations: {
    addMenu (state, payload) {
      state.menu = state.menu.concat(payload)
    },
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    /**
     * Загрузка меню.
     *
     * @param commit
     * @param payload
     */
    addMenu ({ commit }, payload) {
      commit('addMenu', payload)
    }
  }
}
