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
    user: getUserFromLocalStorage() || {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    clearUser (state) {
      localStorage.removeItem('user')
      state.user = {}
    },
    setUser (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
    }
  },
  actions: {
    clearUser ({ commit }) {
      commit('clearUser')
    },
    setUser ({ commit }, payload) {
      commit('setUser', payload)
    }
  }
}
