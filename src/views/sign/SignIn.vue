<template>
  <div>
    <sign
      :breadCrumbs="breadCrumbs"
      :buttonConfirmTitle="$t('pageSign.signIn')"
      :formTitle="$t('pageSign.authorization')"
    />
  </div>
</template>

<script>
import { i18n } from '../../i18n'
import BreadCrumb from '../../entities/breadCrumb'

const Sign = () => import('./components/Sign')

export default {
  name: 'SignIn',
  components: {
    Sign
  },
  data: () => ({
    breadCrumbs: [
      new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
      new BreadCrumb(i18n.t('pageSign.authorization'), { name: 'SignIn' })
    ]
  })
}
</script>

<style scoped>

</style>
