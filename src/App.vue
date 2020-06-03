<template>
  <v-app>

    <!--Верхнее меню-->
    <app-header/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
const AppHeader = () => import('./components/AppHeader')

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
