<template>
  <v-container
    class="pt-0"
    fluid
    :style="'min-height: 450px !important;'"
  >
    <!--Предложение-->
    <v-row
      class="display-1 pa-5 exercise"
      justify="center"
    >
      <span>{{ exercise.sentence }}</span>
    </v-row>

    <!--Поле ввода перевода-->
    <v-row
      align="center"
      class="mt-3 mb-3 pr-1 pl-1"
      justify="center"
    >
      <v-flex xs12 sm10 md8>
        <v-text-field
          v-model="translate"
          autofocus
          class="display-1 mt-4 mdi-remove"
          clearable
          outlined
          placeholder="Введите на английском"
        />
        <v-btn
          block
          class="mb-4"
          :color="exercise.corrected ? 'green' : 'white'"
          :light="!exercise.corrected"
          :disabled="$v.translate.$invalid"
          :elevation="4"
          @click.prevent="exercise.checked ? nextExercise() : checkExercise()"
        >
          {{ exercise.checked ? 'Далее' : 'Проверить' }}
        </v-btn>
      </v-flex>
    </v-row>

    <!--Перевод-->
    <v-row
      v-if="exercise.checked"
      class="display-1 pa-5 exercise"
      justify="center"
    >
      <span>{{ exercise.translations[0] }}</span>
    </v-row>
  </v-container>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  name: 'GrammarTrainingContent',
  mixins: [validationMixin],
  props: { exercise: { type: Object } },
  data () {
    return {
      translate: null
    }
  },
  validations: {
    translate: {
      minLength: minLength(3),
      required
    }
  },
  created () {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    checkExercise () {
      this.$store.commit('training/checkExercise', {
        _id: this.exercise._id,
        translate: this.translate
      })
    },
    nextExercise () {},
    previousExercise () {},
    onKeyDown (e) {
      switch (e.key) {
        case 'ArrowLeft':
          this.previousExercise()
          break
        case 'ArrowRight':
          this.nextExercise()
          break
        case 'Enter':
          this.checkExercise()
          break
      }
    }
  }
}
</script>

<style scoped>
  .exercise {
    border-bottom: 5px solid white;
    border-top: 5px solid white;
    min-height: 90px;
  }
</style>
