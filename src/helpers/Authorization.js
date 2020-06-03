/**
 * Наименования данных авторизации.
<<<<<<< HEAD
 * Т.е. то, как будут называться наши поля в localStorage
=======
>>>>>>> master
 *
 * @type {string}
 */
const ACCESS_TOKEN = 'access-token'
const ACCESS_TOKEN_EXPIRES = 'access-token-expires'
const REFRESH_TOKEN = 'refresh-token'

/**
 * Модель авторизации.
 */
export default class Authorization {
  /**
   * Авторизован ли пользователь.
   *
   * @returns {boolean}
   */
<<<<<<< HEAD
  static isAccessTokenExpired () {
    return Authorization.getAccessTokenExpires() < Date.now() / 1000
=======
  static isAuthorized () {
    return !!Authorization.getAccessToken()
>>>>>>> master
  }

  /**
   * Авторизован ли пользователь.
   *
   * @returns {boolean}
   */
<<<<<<< HEAD
  static isAuthorized () {
    return !!Authorization.getAccessToken()
  }

  /**
   * Удаляет токен доступа.
   */
  static clearAccessToken () {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  /**
   * Удаляет дату истечения токена доступа.
   */
  static clearAccessTokenExpires () {
    localStorage.removeItem(ACCESS_TOKEN_EXPIRES)
=======
  static isAccessTokenExpired () {
    return Authorization.getAccessTokenExpires() < Date.now() / 1000
  }

  /**
   * Сохранение данных авторизации.
   *
   * @param accessToken
   * @param accessTokenExpires
   * @param refreshToken
   */
  static setData ({ accessToken, accessTokenExpires, refreshToken }) {
    Authorization.setAccessToken(accessToken)
    Authorization.setAccessTokenExpires(accessTokenExpires)
    Authorization.setRefreshToken(refreshToken)
>>>>>>> master
  }

  /**
   * Удаление всех данных авторизации.
   */
  static clearData () {
    Authorization.clearAccessToken()
    Authorization.clearRefreshToken()
    Authorization.clearAccessTokenExpires()
  }

  /**
<<<<<<< HEAD
   * Удаляет токен обновления.
   */
  static clearRefreshToken () {
    localStorage.removeItem(REFRESH_TOKEN)
  }

  /**
=======
>>>>>>> master
   * Возвращает токен доступа.
   *
   * @returns {string | null}
   */
  static getAccessToken () {
    return localStorage.getItem(ACCESS_TOKEN)
  }

  /**
<<<<<<< HEAD
   * Возвращает дату истечения токена доступа.
   *
   * @returns {number}
   */
  static getAccessTokenExpires () {
    const value = Number.parseInt(localStorage.getItem(ACCESS_TOKEN_EXPIRES))
    return isNaN(value) ? 0 : value
=======
   * Сохраняет токен доступа.
   *
   * @param token
   */
  static setAccessToken (token) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  /**
   * Удаляет токен доступа.
   */
  static clearAccessToken () {
    localStorage.removeItem(ACCESS_TOKEN)
>>>>>>> master
  }

  /**
   * Возвращает токен обновления.
   *
   * @returns {string | null}
   */
  static getRefreshToken () {
    return localStorage.getItem(REFRESH_TOKEN)
  }

  /**
<<<<<<< HEAD
   * Сохраняет токен доступа.
   *
   * @param token
   */
  static setAccessToken (token) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  /**
   * Сохраняет дату истечения токена доступа.
   *
   * @param token
   */
  static setAccessTokenExpires (token) {
    localStorage.setItem(ACCESS_TOKEN_EXPIRES, token)
  }

  /**
   * Сохранение данных авторизации.
   *
   * @param accessToken
   * @param accessTokenExpires
   * @param refreshToken
   */
  static setData ({ accessToken, accessTokenExpires, refreshToken }) {
    Authorization.setAccessToken(accessToken)
    Authorization.setAccessTokenExpires(accessTokenExpires)
    Authorization.setRefreshToken(refreshToken)
  }

  /**
   * Сохраняет токен обновления.
   *
   * @param token
   */
  static setRefreshToken (token) {
    localStorage.setItem(REFRESH_TOKEN, token)
=======
   * Сохраняет токен обновления.
   *
   * @param token
   */
  static setRefreshToken (token) {
    localStorage.setItem(REFRESH_TOKEN, token)
  }

  /**
   * Удаляет токен обновления.
   */
  static clearRefreshToken () {
    localStorage.removeItem(REFRESH_TOKEN)
  }

  /**
   * Возвращает дату истечения токена доступа.
   *
   * @returns {number}
   */
  static getAccessTokenExpires () {
    const value = Number.parseInt(localStorage.getItem(ACCESS_TOKEN_EXPIRES))
    return isNaN(value) ? 0 : value
  }

  /**
   * Сохраняет дату истечения токена доступа.
   *
   * @param token
   */
  static setAccessTokenExpires (token) {
    localStorage.setItem(ACCESS_TOKEN_EXPIRES, token)
  }

  /**
   * Удаляет дату истечения токена доступа.
   */
  static clearAccessTokenExpires () {
    localStorage.removeItem(ACCESS_TOKEN_EXPIRES)
>>>>>>> master
  }
}
