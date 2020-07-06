import { axios } from '../../../axios/index'
import TrainingHelper from '../../../helpers/TrainingHelper'

export default {
  namespaced: true,
  state: {
    exercises: [],
    training: {}
  },
  getters: {},
  mutations: {
    setExercises (state, payload) {
      state.exercises = payload
    },
    setTraining (state, payload) {
      state.training = payload
    }
  },
  actions: {
    getExercises ({ commit }, payload) {
      this.dispatch('general/startLoading')
      axios.post('grammar/training/index', {
        alias: payload,
        conditions: TrainingHelper[payload]
      })
        .then(
          response => {
            commit('setExercises', response.data.exercises.query)
            commit('setTraining', response.data.training)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
