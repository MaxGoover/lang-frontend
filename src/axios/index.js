import Authorization from '../helpers/Authorization'
import Axios from 'axios'
import i18n from '../i18n/index'
import router from '../router/index'
import store from '../store/index'

/**
 * Создаем Axios с параметрами.
<<<<<<< HEAD
 * baseUrl - url нашего API, куда мы будем стучаться.
=======
>>>>>>> master
 *
 * @type {AxiosInstance}
 */
const axios = Axios.create({
<<<<<<< HEAD
  baseURL: process.env.VUE_APP_API_PATH,
=======
  baseURL: process.env.VUE_APP_API_PATH, // Backend сервер
>>>>>>> master
  headers: {
    'Accept-Language': i18n.locale
  }
})

/**
 * Выход из системы.
 */
const logout = async () => {
  // Выход из системы
  await store.dispatch('authorization/logout')

  // Удаляет заголовок авторизации
<<<<<<< HEAD
  delete axios.defaults.headers.common.Authorization
=======
  delete axios.defaults.headers.common['Authorization']
>>>>>>> master

  // Перенаправление на страницу входа
  await router.push({ name: 'login' })

  // Обновление страницы
  window.location.reload()
}

/**
<<<<<<< HEAD
 * Действия перед отправкой запроса к API.
=======
 * Действия при получении ответа.
>>>>>>> master
 */
axios.interceptors.request.use(async config => {
  if (Authorization.isAuthorized()) {
    config.headers.Authorization = `Bearer ${Authorization.getAccessToken()}`
  }

  return config
}, error => {
  return Promise.reject(error)
})

/**
<<<<<<< HEAD
 * Действия после получения ответа от API.
=======
 * Действия при получении ответа.
>>>>>>> master
 */
// т.е. когда нам с бекэнда прилетел какой-то ответ
axios.interceptors.response.use(response => {
  // Если есть ошибка, то возвращает промис с ошибкой
  if (typeof response.data.isError !== 'undefined' && response.data.isError) {
    return Promise.reject(response.data)
  }

  return Promise.resolve(response.data)
}, async error => { // если приходят какие-то http-ошибки, то мы ловим их в ЭТОМ error
  // Если ошибка авторизации
  if (store.getters['authorization/isAuthorized'] && error.response.status === 401) {
    try {
      // Обновление токена
      await store.dispatch('authorization/updateToken')
<<<<<<< HEAD
      error.response.config.headers.Authorization = 'Bearer ' + Authorization.getAccessToken()
=======
      error.response.config.headers['Authorization'] = 'Bearer ' + Authorization.getAccessToken()
>>>>>>> master

      return axios(error.response.config)
    } catch (e) {
      // Выход из системы
      logout()
    }
  }

  // Всплывающее уведомление с ошибкой
  store.dispatch('snackBar/toggleSnackBar', { value: true, content: error.message, color: 'error' })

  return Promise.reject(error)
})

export { axios }
