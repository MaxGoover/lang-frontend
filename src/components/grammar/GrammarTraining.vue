<template>
  <v-card color="blue-grey darken-4">
    <v-row>
      <grammar-training-toolbar :title="training.title"/>
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(exercise, i) in exercises"
          :key="i"
        >
          <v-sheet
            color="blue-grey darken-4"
            :style="'height: 100% !important;'"
          >
            <grammar-training-content :exercise="exercise"/>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <grammar-training-footer />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GrammarTraining',
  components: {
    GrammarTrainingToolbar: () => import('./GrammarTrainingToolbar'),
    GrammarTrainingContent: () => import('./GrammarTrainingContent'),
    GrammarTrainingFooter: () => import('./GrammarTrainingFooter')
  },
  props: { alias: { type: String } },
  computed: {
    ...mapState('training', [
      'exercises',
      'training'
    ])
  },
  created () {
    // background-color: green !important;
    // this.$store.commit('menu/setShowAppHeader', false)
    // this.$store.commit('menu/setShowAppFooter', false)
    this.$store.dispatch('training/getExercises', this.alias)
  }
}
</script>

<style scoped>

</style>
