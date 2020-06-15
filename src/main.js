import './registerServiceWorker'
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import App from './App.vue'
import { i18n } from './i18n/index'
import router from './router'
import store from './store/index'
import Vue from 'vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
