// import store from '../store/index.js'
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
    path: '/books',
    name: 'Books',
    component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import(/* webpackChunkName: "words" */ '../views/Words.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "signin" */ '../views/sign/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/sign/SignUp.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
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
  // // Авторизован ли пользователь
  // const isAuthorized = store.getters['authorization/isAuthorized']
  // console.log(isAuthorized)
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
