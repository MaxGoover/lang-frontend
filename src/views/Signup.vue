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
import { i18n } from '../i18n'
import BreadCrumb from '../entities/BreadCrumb'

const AppBreadCrumbs = () => import('../components/app/AppBreadCrumbs')
const Sign = () => import('../components/sign/Sign')

export default {
  name: 'Signup',
  components: {
    AppBreadCrumbs,
    Sign
  },
  data () {
    return {
      breadCrumbs: [
        new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
        new BreadCrumb(i18n.t('pageSign.registration'), { name: 'Signup' })
      ]
    }
  },
  methods: {
    signUp (value) {
      this.$store.dispatch('authorization/signup', value)
    }
  }
}
</script>

<style scoped>

</style>
