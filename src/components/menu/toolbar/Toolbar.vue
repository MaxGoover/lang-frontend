<template>
  <v-card
    color="grey lighten-4"
    flat
    height="50px"
    tile
  >
    <v-toolbar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<!--<template>-->
<!--  <v-toolbar-->
<!--    color="primary"-->
<!--    dark-->
<!--    dense-->
<!--  >-->

<!--    &lt;!&ndash;Боковое меню&ndash;&gt;-->
<!--    <v-toolbar-side-icon-->
<!--      @click="toggleDrawer"-->
<!--      v-if="$vuetify.breakpoint.mdAndDown"-->
<!--    />-->

<!--    &lt;!&ndash;Логотип&ndash;&gt;-->
<!--    <v-toolbar-items>-->
<!--      <v-btn flat :to="{ name: 'Main' }" active-class="">-->
<!--        <v-toolbar-title>{{ $t('app.name') }}</v-toolbar-title>-->
<!--      </v-btn>-->
<!--    </v-toolbar-items>-->

<!--    <v-spacer></v-spacer>-->

<!--    <v-toolbar-items-->
<!--      class="mr-3"-->
<!--      v-if="$vuetify.breakpoint.smAndUp"-->
<!--    >-->
<!--      <v-btn-->
<!--        v-for="item in menu"-->
<!--        :key="item.name"-->
<!--        flat-->
<!--        :color="typeof item.meta.background !== 'undefined' ? item.meta.background : ''"-->
<!--        :to="{ name: item.name }"-->
<!--      >-->
<!--        {{ $t(`menu.${item.name}`) }}-->
<!--      </v-btn>-->
<!--    </v-toolbar-items>-->

<!--    &lt;!&ndash;Меню пользователя&ndash;&gt;-->
<!--    <toolbar-menu-user :title="$t('menu.userActions')"/>-->

<!--  </v-toolbar>-->
<!--</template>-->

<script>
import { mapGetters } from 'vuex'
// const ToolbarMenuUser = () => import('@/components/menu/ToolbarMenuUser') // этот компонент нам сразу не нужен - поэтому загружаем его опосля

export default {
  name: 'Toolbar',
  // components: {
  //   ToolbarMenuUser
  // },
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
