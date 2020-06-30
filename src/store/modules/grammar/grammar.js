import {axios} from "../../../axios";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getLevels ({ commit }) {
      this.dispatch('general/startLoading')
      axios.post('level/level/index',)
        .then(
          response => {
            commit('setLevels', response.data.query)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    },
  }
}
