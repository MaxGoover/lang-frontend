// import { axios } from '@/axios'

export default {
  namespaced: true,
  state: {
    loading: false,
    showDrawer: false
  },
  getters: {
    loading (state) {
      return state.loading
    },
    showDrawer (state) {
      return state.showDrawer
    }
  },
  mutations: {
    setShowDrawer (state) {
      state.showDrawer = !state.showDrawer
    },
    startLoading (state) {
      state.loading = true
    },
    stopLoading (state) {
      state.loading = true
    }
  },
  actions: {
    setShowDrawer ({ commit }) {
      commit('setShowDrawer')
    }
  }
}
