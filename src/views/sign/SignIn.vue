<template>
  <div>
    <sign
      :breadCrumbs="breadcrumbs"
      :buttonConfirmTitle="$t('pageSign.signIn')"
      :formTitle="$t('pageSign.authorization')"
    />
  </div>
</template>

<script>
import BreadCrumb from '../../entities/breadCrumb'

const Sign = () => import('./components/Sign')

export default {
  name: 'SignIn',
  components: {
    Sign
  },
  computed: {
    breadcrumbs () {
      return [
        new BreadCrumb(this.$i18n.t('AppHeader.main'), { name: 'Main' }),
        new BreadCrumb(this.$i18n.t('AppHeader.signIn'), { name: 'SignIn' })
      ]
    }
  }
}
</script>

<style scoped>

</style>
