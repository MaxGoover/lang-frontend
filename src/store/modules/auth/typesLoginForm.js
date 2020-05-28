import i18n from '@/i18n'

const TYPE_LOGIN_FORM_AAAA = 1
const TYPE_LOGIN_FORM_SCORECARD = 2

export default {
  namespaced: true,
  state: {
    loading: false,
    loginForms: [
      { text: i18n.t('typesLoginForm.aaa'), value: 1 },
      { text: i18n.t('typesLoginForm.scorecard'), value: 2 }
    ],
    typeLoginFormAAA: TYPE_LOGIN_FORM_AAAA,
    typeLoginFormScorecard: TYPE_LOGIN_FORM_SCORECARD
  },
  getters: {
    loginForms (state) {
      return state.loginForms
    },
    typeLoginFormAAA (state) {
      return state.typeLoginFormAAA
    },
    typeLoginFormScorecard (state) {
      return state.typeLoginFormScorecard
    }
  }
}
