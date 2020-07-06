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
import { i18n } from '../i18n'
import BreadCrumb from '../entities/BreadCrumb'

export default {
  name: 'Login',
  components: {
    AppBreadCrumbs: () => import('../components/app/AppBreadCrumbs'),
    Sign: () => import('../components/sign/Sign')
  },
  data () {
    return {
      breadCrumbs: [
        new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
        new BreadCrumb(i18n.t('pageSign.authorization'), { name: 'Login' })
      ]
    }
  },
  methods: {
    login (value) {
      this.$store.dispatch('authorization/login', value)
    }
  }
}
</script>

<style scoped>

</style>
