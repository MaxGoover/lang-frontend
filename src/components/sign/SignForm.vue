<template>
  <v-form @submit="confirmForm">
    <!--Логин-->
    <v-text-field
      v-model="username"
      clearable
      name="username"
      prepend-icon="mdi-account"
      required
      type="text"
      :disabled="loading"
      :error-messages="usernameErrors"
      :label="`${$t('pageSign.username')} *`"
      @blur="$v.username.$touch()"
    />

    <!--Пароль-->
    <v-text-field
      v-model="password"
      clearable
      name="password"
      prepend-icon="mdi-lock"
      required
      type="password"
      :disabled="loading"
      :error-messages="passwordErrors"
      :label="`${$t('pageSign.password')} *`"
      @blur="$v.password.$touch()"
    />

    <!--Запомни меня-->
    <v-checkbox
      v-model="rememberMe"
      color="primary"
      :label="$t('pageSign.rememberMe')"
    />

    <!--Кнопка подтверждения-->
    <v-btn
      block
      color="primary"
      type="submit"
      :disabled="$v.$invalid || loading"
      :loading="loading"
      @click.prevent="confirmForm"
    >
      {{ buttonConfirmTitle }}
    </v-btn>

  </v-form>
</template>

<script>
import { mapState } from 'vuex'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import Params from '../../params'

export default {
  name: 'SignForm',
  mixins: [validationMixin],
  props: { buttonConfirmTitle: { type: String } },
  data () {
    return {
      username: '',
      password: '',
      rememberMe: false,
      errors: {}
    }
  },
  computed: {
    ...mapState('authorization', ['isAuthorized']),
    ...mapState('general', ['loading']),
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      if (!this.$v.username.minLength) errors.push(this.$t('error.minLengthError', { min: Params.usernameMinLength }))
      if (!this.$v.username.maxLength) errors.push(this.$t('error.maxLengthError', { max: Params.usernameMaxLength }))
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.minLength) errors.push(this.$t('error.minLengthError', { min: Params.passwordMinLength }))
      if (!this.$v.password.maxLength) errors.push(this.$t('error.maxLengthError', { max: Params.passwordMaxLength }))
      return errors
    }
  },
  validations: {
    username: {
      minLength: minLength(Params.usernameMinLength),
      maxLength: maxLength(Params.usernameMaxLength),
      required
    },
    password: {
      minLength: minLength(Params.passwordMinLength),
      maxLength: maxLength(Params.passwordMaxLength),
      required
    }
  },
  methods: {
    confirmForm () {
      this.$emit('confirmForm', {
        username: this.username,
        rememberMe: this.rememberMe,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
