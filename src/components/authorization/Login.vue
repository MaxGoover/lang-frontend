<template>
  <v-layout align-center justify-center>
    <v-flex sm12 md6 lg4 mb-5>

      <!--Breadcrumbs-->
      <v-breadcrumbs v-if="$vuetify.breakpoint.mdAndUp" :items="breadcrumbs">
        <template slot="divider">
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>

      <v-card
        :elevation="$vuetify.breakpoint.smAndDown ? 0 : 6"
        :flat="$vuetify.breakpoint.smAndDown"
      >

        <!--Заголовок-->
        <v-card-title class="text-xs-left">
          <h1>{{ $t('auth.login') }}</h1>
        </v-card-title>

        <!--Форма авторизации-->
        <v-card-text class="text-xs-left pt-0">
          <login-form/>
        </v-card-text>
        <v-divider light></v-divider>

        <!--Загрузка-->
        <v-progress-linear v-if="loading" :indeterminate="true"/>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

const LoginForm = () => import('./LoginForm')

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters('authorization', [
      'loading'
    ]),
    breadcrumbs () {
      return [
        {
          text: this.$i18n.t('menu.main'),
          disabled: false,
          to: { name: 'main' }
        },
        {
          text: this.$i18n.t('menu.login'),
          disabled: false,
          to: { name: 'login' }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
