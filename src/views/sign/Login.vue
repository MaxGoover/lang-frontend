<template>
  <div>
    <!--Хлебные крошки-->
    <app-bread-crumbs :breadCrumbs="breadCrumbs"/>

    <!--Авторизация-->
    <sign
      :buttonConfirmTitle="$t('pageSign.signIn')"
      :formTitle="$t('pageSign.authorization')"
      @confirmForm="login"
    />
  </div>
</template>

<script>
import { i18n } from '../../i18n'
import BreadCrumb from '../../entities/breadCrumb'

const AppBreadCrumbs = () => import('../../components/AppBreadCrumbs')
const Sign = () => import('./components/Sign')

export default {
  name: 'Login',
  components: {
    AppBreadCrumbs,
    Sign
  },
  data: () => ({
    breadCrumbs: [
      new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
      new BreadCrumb(i18n.t('pageSign.authorization'), { name: 'Login' })
    ]
  }),
  methods: {
    login (value) {
      this.$store.dispatch('authorization/login', value)
    }
  }
}
</script>

<style scoped>

</style>
