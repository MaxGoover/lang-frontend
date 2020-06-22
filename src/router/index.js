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
    path: '/books/book/:bookId',
    name: 'Book',
    props: true,
    component: () => import(/* webpackChunkName: "book" */ '../components/books/Book'),
    beforeEnter: authGuard
  },
  {
    path: '/books/book/:bookId/part/:partId',
    name: 'BookPart',
    props: true,
    component: () => import(/* webpackChunkName: "bookPart" */ '../components/books/BookPart'),
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
    path: '/grammar',
    name: 'Grammar',
    component: () => import(/* webpackChunkName: "grammar" */ '../views/Grammar.vue'),
    beforeEnter: authGuard
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

router.beforeEach((to, from, next) => {
  // Если пользователь авторизован
  const isAuthorized = store.getters['authorization/isAuthorized']

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
  store.getters['authorization/isAuthorized'] ? next() : next({ name: 'Login' })
}

export default router
