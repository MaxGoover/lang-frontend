<template>
  <v-menu
    offset-x
    :close-on-content-click="true"
  >

    <!--Аватар пользователя-->
    <v-btn slot="activator" icon>
      <v-avatar
        :size="37"
        color="grey lighten-4"
      >
        <v-img :src="user.avatar || $t('app.defaultUserImage')" :alt="$t('user.avatar')"/>
      </v-avatar>
    </v-btn>

    <v-card>
      <v-list>

        <!--Выйти-->
        <v-list-tile v-if="isAuthorized" @click="logout">
          <v-list-tile-action>
            <v-icon color="primary">mdi-logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">{{ $t('auth.logout') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--Войти-->
        <v-list-tile v-if="!isAuthorized" :to="{ name: 'login' }">
          <v-list-tile-action>
            <v-icon color="primary">mdi-login</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">{{ $t('auth.login') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToolbarMenuUser',
  computed: {
    ...mapGetters('authorization', [
      'isAuthorized'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },
  methods: {
    /**
     * Выход пользователя.
     */
    logout () {
      this.$store.dispatch('authorization/logout')
        .then(async () => {
          // Переадресация на главную страницу
          await this.$router.push({ path: '/' })
          return true
        })
        .then(() => {
          // Обновляет страницу после выхода
          window.location.reload()
        })
    }
  }
}
</script>

<style scoped>

</style>
