<template>
  <v-app>

    <!--Тулбар-->
    <app-header/>

    <v-content>
      <router-view/>
    </v-content>

    <!--Футер-->
    <app-footer/>
  </v-app>
</template>

<script>
const AppFooter = () => import(/* webpackChunkName: "appFooter" */ './components/AppFooter')
const AppHeader = () => import(/* webpackChunkName: "appHeader" */ './components/AppHeader')

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  },
  created () {
    this.$store.dispatch('books/getBooks')
  }
}
</script>
