// import authorization from './modules/auth/authorization'
import filter from './modules/filter/filter'
import mainMenu from './modules/menu/mainMenu'
// import menu from './modules/menu/menu'
// import projects from './modules/project/projects'
import typesLoginForm from './modules/auth/typesLoginForm'
import user from './modules/user/user'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // authorization,
    filter,
    mainMenu,
    // menu,
    // projects,
    typesLoginForm,
    user
  }
})
