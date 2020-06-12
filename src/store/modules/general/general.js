export default {
  namespaced: true,
  state: {
    error: null,
    loading: false
  },
  mutations: {
    cleanError (state) {
      state.error = null
    },
    setError (state, payload) {
      state.error = payload
    },
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
