<template>
  <v-card>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(exercise, i) in exercises"
        :key="i"
      >
        <v-sheet color="primary">
          <v-row
            class="pt-5"
            align="start"
            justify="center"
          >
            <v-container fluid>
              <div class="display-1">{{ exercise.sentence }}</div>
            </v-container>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GrammarTraining',
  props: { alias: { type: String } },
  computed: {
    ...mapState('training', [
      'exercises',
      'training'
    ])
  },
  created () {
    // this.$store.commit('menu/setShowAppHeader', false)
    // this.$store.commit('menu/setShowAppFooter', false)
    this.$store.dispatch('training/getExercises', this.alias)
  }
}
</script>

<style scoped>
  .v-carousel, .v-responsive, .v-sheet {
    height: 100% !important;
  }
</style>
