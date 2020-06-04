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
  methods: {
    signUp () {

    }
  }
}
</script>

<style scoped>

</style>
