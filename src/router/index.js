import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { // эта функция beforeEach вызывается всякий раз, когда мы переходим по какому-либо роуту
  // Авторизован ли пользователь
  // const isAuthorized = store.getters['authorization/isAuthorized']
  //
  // // Если пользователь авторизован
  // // и путь на страницу авторизации или регистрации, то ошибка 404
  // if (isAuthorized && (to.name === 'login' || to.name === 'signUp')) {
  //   next({ name: 'page404' })
  // } else if (!isAuthorized && to.matched.some(record => record.meta.requiresAuth)) { // проверям наличие меты
  //   // Если пользователь не авторизован
  //   // и путь на страницу, требующая авторизациии, то редирект на страницу логина
  //   next({ name: 'login' })
  // } else {
  //   next()
  // }
  next()
})

export default router
