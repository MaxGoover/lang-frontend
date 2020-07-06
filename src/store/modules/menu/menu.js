// import { axios } from '@/axios'

export default {
  namespaced: true,
  state: {
    showAppHeader: true,
    showAppFooter: true,
    showDialog: false
  },
  getters: {
    showDialog: state => state.showDialog
  },
  mutations: {
    setShowAppHeader (state, payload) {
      state.showAppHeader = payload
    },
    setShowAppFooter (state, payload) {
      state.showAppFooter = payload
    },
    setShowDialog (state, payload) {
      state.showDialog = payload
    }
  },
  actions: {}
}
