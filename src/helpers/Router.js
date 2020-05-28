import Menu from '@/helpers/Menu'

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard') // Название компонента - оно как класс - с Большой буквы

/**
 * Создание экземпляра Menu.
 *
 * @type {Menu}
 */
const menu = new Menu()

/**
 * Список компонентов.
 *
 * @private
 */
const _components = {
  dashboard: Dashboard
}

/**
 * Возвращает список роутов.
 *
 * @returns {any}
 */
const getRoutes = () => {
  let routes = localStorage.getItem('menu') || []

  if (routes) {
    try {
      routes = JSON.parse(localStorage.getItem('menu'))
    } catch (e) {
    }
  }

  return normalizeRoutes(routes)
}

/**
 * Сохраняет роуты в localStorage.
 *
 * @param data
 * @returns {boolean}
 */
const setToLocalStore = (data) => {
  localStorage.removeItem('menu')

  try {
    const routes = JSON.stringify(data)
    localStorage.setItem('menu', routes)
  } catch (e) {
    return false
  }

  return true
}

/**
 * Рекурсивное подключение компонентов к роутам.
 *
 * @param data
 * @returns {*}
 */
const _normalizeRoutes = (data) => { // этот метод проходится по массиву data из menu (то что из MenuController) (из network). Находит, например, dashboard и подставляет его
  if (Array.isArray(data)) { // также добавляет к этому массиву поле component, чтобы это все выглядело как роут от Vue, и подставляет в него компонент
    return data.filter(item => {
      if (typeof item.path !== 'undefined' && item.path !== null) {
        // Добавление меню
        menu.addMenuItem(item)

        // Подключение компонента
        if (typeof _components[item.name] !== 'undefined') {
          item.component = _components[item.name]
        }

        // Нормализация детей роута
        if (typeof item.children !== 'undefined') {
          const children = _normalizeRoutes(item.children)
          if (children.length) {
            Object.assign(item.children, children)
          }
        }

        return true
      }

      return false
    })
  }

  return []
}

/**
 * Подключение компонентов к роутам.
 *
 * @param data
 * @returns {*}
 */
const normalizeRoutes = (data) => {
  // Нормализованные роуты
  const routes = _normalizeRoutes(data)

  // Распределение меню по хранилищу
  menu.distributeMenu()

  return routes
}

export { normalizeRoutes, getRoutes, setToLocalStore }
