<template>
  <v-toolbar
    color="primary"
    dark
    dense
  >

    <!--Боковое меню-->
    <v-toolbar-side-icon
      @click="toggleDrawer"
      v-if="$vuetify.breakpoint.mdAndDown"
    />

    <!--Логотип-->
    <v-toolbar-items>
      <v-btn flat :to="{ name: 'Main' }" active-class="">
        <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items
      class="mr-3"
      v-if="$vuetify.breakpoint.smAndUp"
    >
      <v-btn
        v-for="item in menu"
        :key="item.name"
        flat
        :color="typeof item.meta.background !== 'undefined' ? item.meta.background : ''"
        :to="{ name: item.name }"
      >
        {{ $t(`menu.${item.name}`) }}
      </v-btn>
    </v-toolbar-items>

    <!--Меню пользователя-->
    <toolbar-menu-user :title="$t('menu.userActions')"/>

  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
const ToolbarMenuUser = () => import('@/components/menu/ToolbarMenuUser') // этот компонент нам сразу не нужен - поэтому загружаем его опосля

export default {
  name: 'Toolbar',
  components: {
    ToolbarMenuUser
  },
  computed: {
    ...mapGetters('mainMenu', [
      'menu'
    ])
  },
  methods: {
    toggleDrawer () {
      this.$store.dispatch('navigationDrawer/toggleDrawer', true)
    }
  }
}
</script>

<style scoped>

</style>
