import { axios } from '../../../axios'
import Authorization from '../../../helpers/Authorization'
import router from '../../../router/index'

export default {
  namespaced: true,
  state: {
    isAuthorized: Authorization.isAuthorized(),
    token: Authorization.getAccessToken()
  },
  getters: {
    isAuthorized: (state) => state.isAuthorized,
    token: (state) => state.token
  },
  mutations: {
    clearLocalStorage () {
      localStorage.removeItem('user')
      localStorage.removeItem('menu')
    },
    clearToken (state) {
      Authorization.clearData()

      state.token = Authorization.getAccessToken()
      state.isAuthorized = Authorization.isAuthorized()
    },
    setToken (state, { token, expiresAt, refreshToken }) {
      Authorization.setData({
        accessToken: token,
        accessTokenExpires: expiresAt,
        refreshToken
      })

      state.token = Authorization.getAccessToken()
      state.isAuthorized = Authorization.isAuthorized()
    }
  },
  actions: {
    login ({ commit, getters, state }, payload) {
      this.dispatch('general/startLoading')
      axios.post('auth/auth/login', {
        LoginForm: payload
      })
        .then(
          response => {
            const data = response.data
            if (data.user) {
              this.dispatch('user/setUser', data.user)
            }

            if (typeof data.token === 'object') {
              commit('setToken', data.token)
            }
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    },

    /**
     * Выход пользователя.
     *
     * @param commit
     */
    logout ({ commit, getters }) {
      this.dispatch('general/startLoading')

      axios.post('auth/auth/logout')
        .then(
          response => {
            // Удаление данных о пользователе
            this.dispatch('user/clearUser')

            // Удаление токена
            commit('clearToken')

            // Очистка localStorage
            commit('clearLocalStorage')

            // Удаляет заголовок авторизации
            delete axios.defaults.headers.common.Authorization

            // Перенаправление на страницу входа
            router.push({ name: 'Main' })

            // Обновление страницы
            window.location.reload()
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    },

    /**
     * Регистрация пользователя.
     * @param commit
     * @param payload
     * @returns {Promise<unknown>}
     */
    signup ({ commit }, payload) {
      this.dispatch('general/startLoading')

      axios.post('auth/signup/signup', {
        SignupForm: payload
      })
        .then(
          response => {
            const data = response.data
            if (data.user) {
              this.dispatch('user/setUser', data.user)
            }

            if (typeof data.token === 'object') {
              commit('setToken', data.token)
            }
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
        // commit('toggleLoading', false)
        //
        // // Удаление данных о пользователе
        // this.dispatch('user/clearUser')
        //
        // // Удаление токена
        // commit('clearToken')
        //
        // // Очистка localStorage
        // commit('clearLocalStorage')
    },

    /**
     * Обновление данных пользователя.
     *
     * @param commit
     * @returns {Promise<*>}
     */
    async updateToken ({ commit }) {
      try {
        const { data } = await axios.post('authorization/update-token', {
          refreshToken: Authorization.getRefreshToken()
        })

        // Сохранение токена
        if (typeof data.token === 'object') {
          commit('setToken', data.token)
        }

        return Promise.resolve(data)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}
