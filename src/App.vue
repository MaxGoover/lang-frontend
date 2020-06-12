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
const AppHeader = () => import(/* webpackChunkName: "appHeader" */ './components/AppHeader')
const AppFooter = () => import(/* webpackChunkName: "appFooter" */ './components/AppFooter')

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
