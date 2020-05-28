import { axios } from '@/axios'
// import { setToLocalStore } from '@/helpers/Router' // мы его создадим позже

export default {
  namespaced: true,
  state: {
    loading: false,
    menu: [] // здесь будет список меню
  },
  getters: {
    loading (state) {
      return state.loading
    },
    menu (state) {
      return state.menu
    }
  },
  mutations: {
    toggleLoading (state, payload) {
      state.loading = payload
    },
    setMenu (state, payload) {
      state.menu = payload
    }
  },
  actions: {
    /**
     * Загрузка меню.
     *
     * @param commit
     * @returns {Promise<*>}
     */
    async setMenu ({ commit }) {
      commit('toggleLoading', true)

      try {
        const { data } = await axios.post('closed/menu') // обращаемся к API к контроллеру MenuController

        commit('setMenu', data)

        // Сохранение меню в localStorage
        // setToLocalStore(data)

        commit('toggleLoading', false)
        return data
      } catch (e) {
        commit('toggleLoading', false)
        return Promise.reject(e)
      }
    }
  }
}
