<template>
  <div>
    <sign
      :breadCrumbs="breadCrumbs"
      :buttonConfirmTitle="$t('pageSign.signUp')"
      :formTitle="$t('pageSign.registration')"
    />
  </div>
</template>

<script>
import { i18n } from '../../i18n'
import BreadCrumb from '../../entities/breadCrumb'

const Sign = () => import('./components/Sign')

export default {
  name: 'SignUp',
  components: {
    Sign
  },
  data: () => ({
    breadCrumbs: [
      new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
      new BreadCrumb(i18n.t('pageSign.registration'), { name: 'SignUp' })
    ]
  })
}
</script>

<style scoped>

</style>
