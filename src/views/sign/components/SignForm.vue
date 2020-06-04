<template>
  <v-form
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
      :label="`${$t('pageSign.username')} *`"
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
      :label="`${$t('pageSign.password')} *`"
      :error-messages="passwordErrors"
      @blur="$v.password.$touch()"
      @change="$v.password.$touch()"
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
      :disabled="$v.$invalid"
      :loading="loading"
      @click.prevent="login"
    >
      {{ buttonConfirmTitle }}
    </v-btn>

  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  name: 'SignForm',
  computed: {
    ...mapGetters('authorization', [
      'isAuthorized',
      'loading'
    ]),
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      if (!this.$v.username.required) errors.push(this.$t('pageSign.usernameRequired'))
      if (this.errors.username) errors.push(this.errors.username)
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.required) errors.push(this.$t('pageSign.passwordRequired'))
      if (this.errors.password) errors.push(this.errors.password)
      return errors
    }
  },
  props: {
    buttonConfirmTitle: { type: String }
  },
  data: () => ({
    errors: {},
    password: null,
    rememberMe: false,
    username: null
  }),
  mixins: [validationMixin],
  validations: {
    password: { required },
    username: { required }
  },
  methods: {
    /**
     * Авторизация пользователя.
     */
    login () {
      this.$v.$touch()
      if (this.$v.$invalid) return false

      this.$store.dispatch('authorization/login', {
        password: this.password,
        rememberMe: this.rememberMe,
        username: this.username
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
