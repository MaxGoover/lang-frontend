<template>
  <v-card>
    <v-toolbar
      app
      dark
      class="primary"
    >
      <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>

      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          text
          :to="item.route"
        >
          <v-icon
            left
            v-html="item.icon"
          />
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    menuItems () {
      return [
        {
          icon: 'mdi-eye',
          route: '/books',
          title: this.$i18n.t('appHeader.read')
        },
        {
          icon: 'mdi-puzzle',
          route: '/words',
          title: this.$i18n.t('appHeader.learnWords')
        },
        {
          icon: 'mdi-account-circle',
          route: '/profile',
          title: this.$i18n.t('appHeader.myCabinet')
        },
        {
          icon: 'mdi-logout',
          route: '/logout',
          title: this.$i18n.t('appHeader.logout')
        },
        {
          icon: 'mdi-login',
          route: '/login',
          title: this.$i18n.t('appHeader.login')
        },
        {
          icon: 'mdi-lock-open',
          route: '/signin',
          title: this.$i18n.t('appHeader.signIn')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
