import { axios } from '../../../axios'

const defaultUserData = {
  books: {},
  words: {}
}

/**
 * Возвращает данные о пользователе из localStorage.
 */
const getUserFromLocalStorage = () => {
  let user = {}
  try { user = JSON.parse(localStorage.getItem('user')) } catch (e) {}
  return user
}

export default {
  namespaced: true,
  state: {
    loading: false,
    user: getUserFromLocalStorage() || {},
    userData: defaultUserData
  },
  getters: {
    loading: (state) => state.loading,
    user: (state) => state.user
  },
  mutations: {
    clearUser (state) {
      localStorage.removeItem('user')
      state.user = {}
    },
    setUser (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
    },
    setUserData (state, payload) {
      state.userData = payload
    },
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    clearUser ({ commit }) {
      commit('clearUser')
    },

    getUserData ({ commit }, payload) {
      this.dispatch('general/startLoading')
      axios.post('book/book-part/index', payload)
        .then(
          response => {
            commit('setUserData', response.data.query)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    },

    setUser ({ commit }, payload) {
      commit('setUser', payload)
    }
  }
}
