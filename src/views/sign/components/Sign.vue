<template>
  <v-layout align-center justify-center>
    <v-flex sm12 md6 lg4 mb-5>

      <v-card
        :elevation="$vuetify.breakpoint.smAndDown ? 0 : 6"
        :flat="$vuetify.breakpoint.smAndDown"
      >

        <!--Заголовок-->
        <v-card-title class="text-xs-left">
          <h2>{{ formTitle }}</h2>
        </v-card-title>

        <!--Форма авторизации-->
        <v-card-text class="text-xs-left pt-0">
          <sign-form
            :buttonConfirmTitle="buttonConfirmTitle"
            @confirmForm="confirmForm"
          />
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

const SignForm = () => import('./SignForm')

export default {
  name: 'Sign',
  components: {
    SignForm
  },
  props: {
    breadCrumbs: { type: Array },
    buttonConfirmTitle: { type: String },
    formTitle: { type: String }
  },
  computed: {
    ...mapGetters('authorization', [
      'loading'
    ])
  },
  methods: {
    confirmForm (value) {
      this.$emit('confirmForm', value)
    }
  }
}
</script>

<style scoped>

</style>
