export default {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    startLoading (state) {
      state.loading = true
    },
    stopLoading (state) {
      state.loading = false
    }
  },
  actions: {
    startLoading ({ commit }) {
      commit('startLoading')
    },
    stopLoading ({ commit }) {
      commit('stopLoading')
    }
  }
}
