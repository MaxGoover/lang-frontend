<template>
  <v-card-actions class="action">
    <v-btn color="white" fab dark>
      <v-icon color="light-green accent-3" large>
        mdi-check
      </v-icon>
    </v-btn>
    <v-spacer/>
    <v-btn :elevation="4">Далее</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: 'GrammarTrainingFooter',
  props: { checked: { type: Boolean } }
}
</script>

<style scoped>
  .action {
    border-top: 5px solid white;
    min-height: 75px !important;
  }
</style>
