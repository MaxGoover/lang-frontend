import { axios } from '../../../axios'

export default {
  namespaced: true,
  state: {
    exercises: []
  },
  getters: {},
  mutations: {
    setExercises (state, payload) {
      state.exercises = payload
    }
  },
  actions: {
    getExercises ({ commit }, payload) {
      this.dispatch('general/startLoading')
      axios.post('grammar/exercise/index', payload)
        .then(
          response => {
            console.log(1, response.data)
            commit('setExercises', response.data.query)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
