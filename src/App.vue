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
const AppFooter = () => import('./components/AppFooter')
const AppHeader = () => import('./components/AppHeader')

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>
