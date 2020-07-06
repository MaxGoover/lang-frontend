<!--<template>-->
<!--  <v-card>-->
<!--    <v-carousel :show-arrows="false">-->
<!--      <v-carousel-item-->
<!--        v-for="(exercise, i) in exercises"-->
<!--        :key="i"-->
<!--      >-->
<!--        <v-sheet color="primary">-->
<!--          <v-row-->
<!--            class="pt-5"-->
<!--            align="start"-->
<!--            justify="center"-->
<!--          >-->
<!--            <v-container fluid>-->
<!--              <div class="display-1">{{ exercise.sentence }}</div>-->
<!--            </v-container>-->
<!--          </v-row>-->
<!--        </v-sheet>-->
<!--      </v-carousel-item>-->
<!--    </v-carousel>-->
<!--  </v-card>-->
<!--</template>-->

<template>
  <v-card min-height="641">
    <v-row min-height="641">
      <v-toolbar color="indigo" dark>
        <v-spacer/>
        <v-toolbar-title>{{ training.title }}</v-toolbar-title>
        <v-spacer/>

        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(exercise, i) in exercises"
          :key="i"
        >
          <v-sheet color="primary" :style="'height: 100% !important;'">
            <v-row
              align="start"
              class="pa-5"
              justify="center"
            >
              <v-container fluid>
                <div class="display-1 align-end">{{ exercise.sentence }}</div>
              </v-container>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
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
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 }
    ]
  }),
  created () {
    // this.$store.commit('menu/setShowAppHeader', false)
    // this.$store.commit('menu/setShowAppFooter', false)
    this.$store.dispatch('training/getExercises', this.alias)
  }
}
</script>

<style scoped>
  /*.row {*/
  /*  height: 100% !important;*/
  /*}*/
  /*.v-carousel {*/
  /*  height: 585px !important;*/
  /*}*/
</style>
