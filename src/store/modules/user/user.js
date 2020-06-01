/**
 * Возвращает данные о пользователе из localStorage.
 */
const getUserFromLocalStorage = () => {
  let user = {}
  try {
    user = JSON.parse(localStorage.getItem('user'))
  } catch (e) {
  }

  return user
}

export default {
  namespaced: true,
  state: {
    loading: false,
    user: getUserFromLocalStorage() || {}
  },
  getters: {
    loading (state) {
      return state.loading
    },
    user (state) {
      return state.user
    }
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
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    /**
     * Удаление данных о пользователе.
     *
     * @param commit
     */
    clearUser ({ commit }) {
      commit('clearUser')
    },

    /**
     * Сохранение данных о пользователе.
     *
     * @param commit
     * @param payload
     */
    setUser ({ commit }, payload) {
      commit('setUser', payload)
    }
  }
}
