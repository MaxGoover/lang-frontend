<template>
  <v-app>
    <!--Хеадер-->
    <app-header/>

    <!--Контент-->
    <v-content>
      <router-view/>
    </v-content>

    <!--Футер-->
    <app-footer/>
  </v-app>
</template>

<script>
const AppHeader = () => import(/* webpackChunkName: "appHeader" */ './components/app/AppHeader')
const AppFooter = () => import(/* webpackChunkName: "appFooter" */ './components/app/AppFooter')

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    this.$store.dispatch('books/getBooks')
  }
}
</script>
