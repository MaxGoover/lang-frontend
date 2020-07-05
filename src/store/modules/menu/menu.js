// import { axios } from '@/axios'

export default {
  namespaced: true,
  state: {
    showDialog: false,
    showDrawer: false
  },
  getters: {
    showDialog: state => state.showDialog
  },
  mutations: {
    setShowDialog (state, payload) {
      state.showDialog = payload
    },
    setShowDrawer (state) {
      state.showDrawer = !state.showDrawer
    }
  },
  actions: {
    setShowDialog ({ commit }, payload) {
      commit('setShowDialog', payload)
    },
    setShowDrawer ({ commit }) {
      commit('setShowDrawer')
    }
  }
}
