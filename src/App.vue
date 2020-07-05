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
export default {
  name: 'App',
  components: {
    AppHeader: () => import('./components/app/AppHeader'),
    AppFooter: () => import('./components/app/AppFooter')
  },
  created () {
    this.$store.dispatch('books/getBooks')
  }
}
</script>
