<template>
  <v-form
    @submit="confirmForm"
  >
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
import Params from '../../../params'

export default {
  name: 'SignForm',
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
  props: { buttonConfirmTitle: { type: String } },
  data: () => ({
    errors: {},
    password: '',
    rememberMe: false,
    username: ''
  }),
  mixins: [validationMixin],
  validations: {
    password: {
      minLength: minLength(6),
      maxLength: maxLength(24),
      required
    },
    username: {
      minLength: minLength(Params.usernameMinLength),
      maxLength: maxLength(Params.usernameMaxLength),
      required
    }
  },
  methods: {
    confirmForm () {
      this.$emit('confirmForm', {
        password: this.password,
        rememberMe: this.rememberMe,
        username: this.username
      })
    }

    /**
     * Авторизация пользователя.
     */
    // login () {
    //   this.$v.$touch()
    //   if (this.$v.$invalid) return false
    //
    //   this.$store.dispatch('authorization/login', {
    //     password: this.password,
    //     rememberMe: this.rememberMe,
    //     username: this.username
    //   })
    //     .then(async () => {
    //       // Редирект после авторизации
    //       await this.$router.push({ path: this.$route.query.redirect || '/' })
    //       return true
    //     })
    //     .then(() => {
    //       // Обновляет страницу после авторизации
    //       window.location.reload()
    //     })
    //     .catch(error => {
    //       // Установка ошибок валидации
    //       if (error.isValidationError) {
    //         this.errors = error.validationErrors
    //       }
    //     })
    // }
  }
}
</script>

<style scoped>

</style>
