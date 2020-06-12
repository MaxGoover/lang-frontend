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
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card>
      <v-toolbar
        class="primary"
        dark
      >
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
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
          class="hidden-xs-only"
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
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      toggleDrawer: false
    }
  },
  computed: {
    ...mapState('authorization', ['isAuthorized']),
    menuItems () {
      return this.isAuthorized ? [
        {
          icon: 'mdi-eye',
          route: { name: 'Books' },
          title: this.$i18n.t('appHeader.read')
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
        }
      ] : [
        {
          icon: 'mdi-login',
          route: { name: 'Login' },
          title: this.$i18n.t('appHeader.login')
        },
        {
          icon: 'mdi-lock-open',
          route: { name: 'Signup' },
          title: this.$i18n.t('appHeader.signup')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
