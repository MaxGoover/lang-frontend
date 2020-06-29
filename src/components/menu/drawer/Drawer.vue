<template>
  <v-card>
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
          title: this.$i18n.t('appHeader.reading')
        },
        // {
        //   icon: 'mdi-ab-testing',
        //   route: '/video',
        //   title: this.$i18n.t('appHeader.video')
        // },
        {
          icon: 'mdi-account-edit',
          route: '/grammar',
          title: this.$i18n.t('appHeader.grammar')
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
