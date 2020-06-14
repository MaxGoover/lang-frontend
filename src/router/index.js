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
    path: '/books',
    name: 'Books',
    component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/books/book/:id',
    name: 'Book',
    props: true,
    component: () => import(/* webpackChunkName: "book" */ '../components/books/Book'),
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/sign/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/sign/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: authGuard
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "page404" */ '../components/errors/Page404.vue')
  }
]

const isAuthorized = store.getters['authorization/isAuthorized']
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // Если пользователь авторизован
  // и путь на страницу авторизации или регистрации, то ошибка 404
  if (isAuthorized && (to.name === 'Login' || to.name === 'Signup')) {
    next({ name: 'Page404' })
  } else if (!isAuthorized && to.matched.some(record => record.meta.requiresAuth)) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

function authGuard (to, from, next) {
  isAuthorized ? next() : next({ name: 'Login' })
}

export default router
