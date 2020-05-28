export default {
  namespaced: true,
  state: {
    errors: {}, // Это ошибки, которые буду прилетать нам с фронта
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
      console.log(payload)
      commit('setFilters', payload)
    }
  }
}
