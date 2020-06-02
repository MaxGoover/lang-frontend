<template>
  <v-app>

    <!--Верхнее меню-->
    <toolbar/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
const Toolbar = () => import('./components/menu/Toolbar')

export default {
  name: 'App',
  components: { Toolbar }
}
</script>
