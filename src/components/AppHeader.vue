<template>
  <div>
    <v-navigation-drawer
      v-model="toggleDrawer"
      absolute
      class="hidden-md-and-up"
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
          class="hidden-md-and-up"
          @click.stop="toggleDrawer = !toggleDrawer"
        ></v-app-bar-nav-icon>

        <v-btn
          text
          :to="{ name: 'Main' }"
        >
          <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>
        </v-btn>

        <v-spacer/>
        <v-toolbar-items
          class="hidden-sm-and-down"
        >
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
          route: { name: 'Books' },
          title: this.$i18n.t('appHeader.read')
        },
        {
          icon: 'mdi-puzzle',
          route: { name: 'Words' },
          title: this.$i18n.t('appHeader.learnWords')
        },
        {
          icon: 'mdi-account-circle',
          route: { name: 'Profile' },
          title: this.$i18n.t('appHeader.myCabinet')
        },
        {
          icon: 'mdi-logout',
          route: '/logout',
          title: this.$i18n.t('appHeader.logout')
        },
        {
          icon: 'mdi-login',
          route: { name: 'Login' },
          title: this.$i18n.t('appHeader.login')
        },
        {
          icon: 'mdi-lock-open',
          route: { name: 'SignUp' },
          title: this.$i18n.t('appHeader.signUp')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
