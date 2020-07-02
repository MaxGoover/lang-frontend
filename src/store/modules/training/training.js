import { axios } from '../../../axios'

export default {
  namespaced: true,
  state: {
    exercises: []
  },
  getters: {},
  mutations: {
    setExercises (state, payload) {
      state.sentences = payload
    }
  },
  actions: {
    getExercises ({ commit }, payload) {
      this.dispatch('general/startLoading')
      axios.post('grammar/training/index', payload)
        .then(
          response => {
            console.log(1, response.data)
            commit('setExercises', response.data)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
