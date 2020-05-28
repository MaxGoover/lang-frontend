import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'
import numberFormats from './numberFormats'
import dateTimeFormats from './dateTimeFormats'

Vue.use(VueI18n)

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE, // Язык по умолчанию
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE, // Язык по умолчанию, если перевод не найден
  messages,
  numberFormats,
  dateTimeFormats
})
