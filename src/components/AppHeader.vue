<template>
  <div>
    <!--Левое меню-->
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

    <!--Верхнее меню-->
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
            @click="item.event"
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

    <!--Диалоговое окно-->
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline justify-center">{{ $t('dimmer.askConfirmLogout') }}</v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="logout">{{ $t('common.yes') }}</v-btn>
          <v-btn color="green darken-1" text @click="hideDimmer">{{ $t('common.no') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      dialog: false,
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
          title: this.$i18n.t('appHeader.reading'),
          event: this.blank
        },
        {
          icon: 'mdi-eye',
          route: { name: 'Video' },
          title: this.$i18n.t('appHeader.video'),
          event: this.blank
        },
        {
          icon: 'mdi-logout',
          title: this.$i18n.t('appHeader.logout'),
          event: this.showDimmer
        }
      ] : [
        {
          icon: 'mdi-login',
          route: { name: 'Login' },
          title: this.$i18n.t('appHeader.login'),
          event: this.blank
        },
        {
          icon: 'mdi-lock-open',
          route: { name: 'Signup' },
          title: this.$i18n.t('appHeader.signup'),
          event: this.blank
        }
      ]
    }
  },
  methods: {
    blank () {},
    hideDimmer () {
      this.dialog = false
    },
    logout () {
      this.$store.dispatch('authorization/logout')
        .then(() => { this.hideDimmer() })
    },
    showDimmer () {
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>
