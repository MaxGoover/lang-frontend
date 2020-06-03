<template>
  <v-form
    :disabled="true"
    @submit="login"
  >

    <!--Логин-->
    <v-text-field
      v-model="username"
      clearable
      name="login"
      prepend-icon="mdi-account"
      required
      type="text"
      :disabled="loading"
      :error-messages="usernameErrors"
      :label="`${$t('auth.username')} *`"
      @blur="$v.username.$touch()"
      @input="$v.username.$touch()"
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
      :label="`${$t('auth.password')} *`"
      :error-messages="passwordErrors"
      @blur="$v.password.$touch()"
      @change="$v.password.$touch()"
    />

    <!--Запомнить меня-->
    <v-checkbox
      v-model="rememberMe"
      color="grey darken-4"
      :label="$t('auth.rememberMe')"
    />

    <!--Кнопка войти-->
    <v-btn
      block
      color="primary"
      type="submit"
      :disabled="$v.$invalid"
      :loading="loading"
      @click.prevent="login"
    >
      {{ $t('auth.login') }}
    </v-btn>

  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  name: 'LoginForm',
  computed: {
    ...mapGetters('authorization', [
      'isAuthorized',
      'loading'
    ]),
    ...mapGetters('contacts', [
      'email'
    ]),
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      if (!this.$v.username.required) errors.push(this.$t('auth.usernameRequired'))
      if (this.errors.username) errors.push(this.errors.username)
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.required) errors.push(this.$t('auth.passwordRequired'))
      if (this.errors.password) errors.push(this.errors.password)
      return errors
    }
  },
  data: () => ({
    errors: {},
    password: '',
    rememberMe: false,
    username: ''
  }),
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required }
  },
  methods: {
    /**
     * Авторизация пользователя.
     */
    login () {
      this.$v.$touch()
      if (this.$v.$invalid) return false

      this.$store.dispatch('authorization/login', {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      })
        .then(async () => {
          // Редирект после авторизации
          await this.$router.push({ path: this.$route.query.redirect || '/' })
          return true
        })
        .then(() => {
          // Обновляет страницу после авторизации
          window.location.reload()
        })
        .catch(error => {
          // Установка ошибок валидации
          if (error.isValidationError) {
            this.errors = error.validationErrors
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
