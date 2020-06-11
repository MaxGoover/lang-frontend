import { axios } from '../../../axios'
import Authorization from '../../../helpers/Authorization'

export default {
  namespaced: true,
  state: {
    isAuthorized: Authorization.isAuthorized(),
    loading: false,
    token: Authorization.getAccessToken()
  },
  getters: {
    isAuthorized: (state) => state.isAuthorized,
    loading: (state) => state.loading,
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
    },
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    /**
     * Изменение пароля.
     *
     * @param commit
     * @param oldPassword
     * @param password
     * @param retypePassword
     * @returns {Promise<*>}
     */
    async changePassword ({ commit }, { oldPassword, password }) {
      commit('toggleLoading', true)

      try {
        const { data } = await axios.post('closed/authorization/change-password', {
          ChangePasswordForm: {
            oldPassword,
            password
          }
        })

        commit('toggleLoading', false)
        return Promise.resolve(data)
      } catch (e) {
        commit('toggleLoading', false)
        return Promise.reject(e)
      }
    },

    async login ({ commit }, payload) {
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
        .catch(error => { console.log(3, error )})
        .finally(() => { this.dispatch('general/stopLoading') })
    },

    /**
     * Выход пользователя.
     *
     * @param commit
     */
    async signOut ({ commit }) {
      commit('toggleLoading', true)

      try {
        await axios.post('closed/authorization/logout')
      } catch (e) {
      }

      commit('toggleLoading', false)

      // Удаление данных о пользователе
      this.dispatch('user/clearUser')

      // Удаление токена
      commit('clearToken')

      // Очистка localStorage
      commit('clearLocalStorage')

      return true
    },

    /**
     * Регистрация пользователя.
     * @param commit
     * @param payload
     * @returns {Promise<unknown>}
     */
    async signUp ({ commit }, payload) {
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
            commit('toggleLoading', false)
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
      commit('toggleLoading', true)

      try {
        const { data } = await axios.post('authorization/update-token', {
          refreshToken: Authorization.getRefreshToken()
        })

        // Сохранение токена
        if (typeof data.token === 'object') {
          commit('setToken', data.token)
        }

        commit('toggleLoading', false)
        return Promise.resolve(data)
      } catch (e) {
        commit('toggleLoading', false)
        return Promise.reject(e)
      }
    }
  }
}
