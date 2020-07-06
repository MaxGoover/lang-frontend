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
        />

        <v-btn text :to="{ name: 'Main' }">
          <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>
        </v-btn>
        <v-spacer/>

        <!--Кнопки меню-->
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
            <v-icon left v-html="item.icon"/>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>

    <!--Линия загрузки-->
    <v-progress-linear v-if="loading" :indeterminate="true"/>

    <!--Диалоговое окно-->
    <dialog-window/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DialogWindow from '../../components/menu/DialogWindow'
import MenuItem from '../../entities/MenuItem'

export default {
  name: 'AppHeader',
  components: {
    DialogWindow
  },
  data () { return { toggleDrawer: false } },
  computed: {
    ...mapState('authorization', ['isAuthorized']),
    ...mapState('general', ['loading']),
    menuItems () {
      return this.isAuthorized ? [
        new MenuItem(
          'mdi-eye',
          this.$i18n.t('appHeader.reading'),
          { name: 'Reading' }
        ),
        new MenuItem(
          'mdi-eye',
          this.$i18n.t('appHeader.video'),
          { name: 'Video' }
        ),
        new MenuItem(
          'mdi-account-edit',
          this.$i18n.t('appHeader.grammar'),
          { name: 'Grammar' }
        ),
        new MenuItem(
          'mdi-logout',
          this.$i18n.t('appHeader.logout'),
          null,
          this.showDialog
        )
      ] : [
        new MenuItem(
          'mdi-login',
          this.$i18n.t('appHeader.login'),
          { name: 'Login' }
        ),
        new MenuItem(
          'mdi-lock-open',
          this.$i18n.t('appHeader.signup'),
          { name: 'Signup' }
        )
      ]
    }
  },
  methods: {
    showDialog () {
      this.$store.commit('menu/setShowDialog', true)
    }
  }
}
</script>

<style scoped>

</style>
