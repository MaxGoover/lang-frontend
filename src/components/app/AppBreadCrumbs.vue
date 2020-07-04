<template>
  <v-breadcrumbs :items="breadCrumbs">
    <template slot="divider">
      <v-icon>mdi-forward</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'AppBreadCrumbs',
  props: { breadCrumbs: { type: Array } }
}
</script>

<style scoped>

</style>
