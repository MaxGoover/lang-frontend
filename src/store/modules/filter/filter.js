export default {
  namespaced: true,
  state: {
    errors: {},
    filters: {
      nameProject: ''
    },
    loading: false
  },
  getters: {
    filters (state) {
      return state.filters
    },
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    setFilters (state, payload) {
      state.filters = Object.assign(state.filters, payload)
    },
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    /**
     * Changes filters.
     *
     * @param commit
     * @param payload
     */
    setFilters ({ commit }, payload) {
      commit('setFilters', payload)
    }
  }
}
