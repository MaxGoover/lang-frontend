import store from '@/store/index.js'

/**
 * Типы меню.
 *
 * @type {number}
 */
const TYPE_MAIN_MENU = 1

/**
 * Класс для работы с меню.
 *
 * @type {Menu}
 */
export default class Menu {
  /**
   * Массивы меню по типам.
   *
   * @type {Array}
   */
  mainMenu = []

  /**
   * Распределение меню по типам.
   *
   * @param item
   */
  addMenuItem (item) {
    switch (item.type) {
      case TYPE_MAIN_MENU:
        this.mainMenu.push(item)
        break
    }
  }

  /**
   * Распределение меню по хранилищу.
   */
  distributeMenu () {
    // Добавление главного меню
    store.dispatch('mainMenu/addMenu', this.mainMenu)
  }
}
