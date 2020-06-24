<template>
  <v-card>
    <v-toolbar
      dark
      class="primary"
    >
      <v-app-bar-nav-icon
        @click.stop="setShowDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>

      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-for="item in toolbarItems"
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
  name: 'Toolbar',
  computed: {
    toolbarItems () {
      return [
        {
          icon: 'mdi-eye',
          route: '/books',
          title: this.$i18n.t('appHeader.reading')
        },
        {
          icon: 'mdi-ab-testing',
          route: '/video',
          title: this.$i18n.t('appHeader.video')
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
          route: '/login',
          title: this.$i18n.t('appHeader.signIn')
        }
      ]
    }
  },
  methods: {
    setShowDrawer () {
      this.$store.dispatch('menu/setShowDrawer')
    }
  }
}
</script>

<style scoped>

</style>
