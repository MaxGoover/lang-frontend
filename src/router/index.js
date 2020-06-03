import store from '../store/index.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../components/main/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/authorization/Login.vue')
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "page404" */ '../components/errors/Page404.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => { // эта функция beforeEach вызывается всякий раз, когда мы переходим по какому-либо роуту
  // Авторизован ли пользователь
  const isAuthorized = store.getters['authorization/isAuthorized']
  console.log(isAuthorized)
  // Если пользователь авторизован
  // и путь на страницу авторизации или регистрации, то ошибка 404
  if (isAuthorized && (to.name === 'login' || to.name === 'signUp')) {
    next({ name: 'page404' })
  } else if (!isAuthorized && to.matched.some(record => record.meta.requiresAuth)) { // проверям наличие меты
    // Если пользователь не авторизован
    // и путь на страницу, требующая авторизациии, то редирект на страницу логина
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
