<template>
  <v-container
    class="pt-0"
    fluid
    :style="'min-height: 450px !important;'"
  >
    <v-row
      class="display-1 pa-5 exercise"
      justify="center"
      :style="'min-height: 90px !important;'"
    >
      <span>{{ exercise.sentence }}</span>
    </v-row>
    <v-row
      align="center"
      class="mt-9 mb-3 pr-1 pl-1"
      justify="center"
    >
      <v-flex xs12 sm10 md8>
        <v-textarea
          autofocus
          class="display-1 ma-5 mdi-remove"
          clearable
          filled
          single-line
          outlined
          placeholder="Введите на английском"
        />
      </v-flex>
    </v-row>
    <v-row
      v-if="false"
      class="display-1 pa-5 exercise"
      justify="center"
      :style="'min-height: 90px !important;'"
    >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GrammarTrainingContent',
  props: { exercise: { type: Object } }
}
</script>

<style scoped>
  .exercise {
    border-top:    5px solid white;
    border-bottom: 5px solid white;
  }
</style>
