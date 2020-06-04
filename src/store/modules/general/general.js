export default {
  namespaced: true,
  state: {
    error: null,
    loading: false
  },
  getters: {
    loading: (state) => state.loading
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

  }
}
