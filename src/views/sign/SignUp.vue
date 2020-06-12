<template>
  <div>
    <!--Хлебные крошки-->
    <app-bread-crumbs :breadCrumbs="breadCrumbs"/>

    <!--Регистрация-->
    <sign
      :buttonConfirmTitle="$t('pageSign.signUp')"
      :formTitle="$t('pageSign.registration')"
      @confirmForm="signUp"
    />
  </div>
</template>

<script>
import { i18n } from '../../i18n'
import { mapState } from 'vuex'
import BreadCrumb from '../../entities/breadCrumb'

const AppBreadCrumbs = () => import('../../components/AppBreadCrumbs')
const Sign = () => import('./components/Sign')

export default {
  name: 'SignUp',
  components: {
    AppBreadCrumbs,
    Sign
  },
  data: () => ({
    breadCrumbs: [
      new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
      new BreadCrumb(i18n.t('pageSign.registration'), { name: 'SignUp' })
    ]
  }),
  computed: {
    ...mapState('authorization', ['isAuthorized'])
  },
  watch: {
    isAuthorized (value) {
      if (value) {
        return this.$router.push('/')
      }
    }
  },
  methods: {
    signUp (value) {
      this.$store.dispatch('authorization/signUp', value)
    }
  }
}
</script>

<style scoped>

</style>
