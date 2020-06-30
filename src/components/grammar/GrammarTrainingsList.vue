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
import { mapState } from 'vuex'

export default {
  name: 'GrammarTrainingsList',
  components: {
    GrammarTrainingsListItem: () => import('./GrammarTrainingsListItem')
  },
  computed: {
    ...mapState('training', ['trainings'])
  }
}
</script>

<style scoped>

</style>
