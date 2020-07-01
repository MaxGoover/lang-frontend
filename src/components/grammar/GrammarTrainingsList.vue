<template>
  <v-container grid-list-md>
    <v-row>
      <grammar-trainings-list-item
        v-for="(training, i) in trainings"
        :key="i"
        :training="training"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GrammarTrainingsList',
  components: {
    GrammarTrainingsListItem: () => import('./GrammarTrainingsListItem')
  },
  props: {
    trainings: { type: Array }
  }
}
</script>

<style scoped>

</style>
