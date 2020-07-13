<template>
  <v-toolbar class="pl-8 pr-1 pb-4" color="blue-grey darken-4">
    <v-spacer/>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer/>
    <v-btn color="white" icon :to="{ name: 'Grammar' }">
      <v-icon large>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'GrammarTrainingToolbar',
  props: { title: { type: String } }
}
</script>

<style scoped>

</style>
