import ru from 'vuetify/es5/locale/ru'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    current: process.env.VUE_APP_I18N_LOCALE,
    locales: { ru }
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      accent: '#82B1FF',
      darken1: '#546E7A',
      darken2: '#455A64',
      darken3: '#37474F',
      darken4: '#263238',
      error: '#FF5252',
      info: '#2196F3',
      lighten1: '#78909C',
      lighten2: '#90A4AE',
      lighten3: '#B0BEC5',
      lighten4: '#CFD8DC',
      lighten5: '#ECEFF1',
      primary: '#37474F',
      secondary: '#424242',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  }
})
