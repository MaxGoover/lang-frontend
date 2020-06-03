<template>
  <v-card>
    <pre>{{showDrawer}}</pre>
    <v-navigation-drawer
      v-model="showDrawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'Drawer',
  computed: {
    drawerItems () {
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
    },
    showDrawer: {
      get () {
        return this.$store.getters['menu/showDrawer']
      },
      set (value) {
        return this.$store.dispatch('menu/setShowDrawer')
      }
    }
  }
}
</script>

<style scoped>

</style>
