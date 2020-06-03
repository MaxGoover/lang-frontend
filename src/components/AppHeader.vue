<template>
  <div>
    <v-navigation-drawer
      v-model="toggleDrawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
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

    <v-card>
      <v-toolbar
        dark
        class="primary"
      >
        <v-app-bar-nav-icon
          @click.stop="toggleDrawer = !toggleDrawer"
        ></v-app-bar-nav-icon>

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
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      toggleDrawer: false
    }
  },
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
