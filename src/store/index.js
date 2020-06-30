import authorization from './modules/auth/authorization'
import books from './modules/books/books'
import general from './modules/general/general'
import grammar from './modules/grammar/grammar'
import menu from './modules/menu/menu'
import training from './modules/training/training'
import user from './modules/user/user'
import video from './modules/video/video'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    authorization,
    books,
    general,
    grammar,
    menu,
    training,
    user,
    video
  }
})
