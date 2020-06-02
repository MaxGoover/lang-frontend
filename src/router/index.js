// import Home from '../views/Home.vue'
import store from '../store/index.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/authorization/Login.vue')
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
