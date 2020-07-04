<template>
  <div>
    <!--Хлебные крошки-->
    <app-bread-crumbs :breadCrumbs="breadCrumbs"/>

    <!--Упражнения-->
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(exercise, i) in exercises"
        :key="i"
      >
        <v-sheet
          color="primary"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3"><pre>{{ exercise.sentence }}</pre></div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { i18n } from '../../i18n'
import { mapState } from 'vuex'
import BreadCrumb from '../../entities/breadCrumb'

export default {
  name: 'GrammarTraining',
  components: {
    AppBreadCrumbs: () => import('../app/AppBreadCrumbs')
  },
  props: {
    alias: { type: String },
    training: { type: Object }
  },
  data () {
    return {
      breadCrumbs: [
        new BreadCrumb(i18n.t('appHeader.main'), { name: 'Main' }),
        new BreadCrumb(i18n.t('appHeader.grammar'), { name: 'Grammar' }),
        new BreadCrumb(this.training.title, { name: 'GrammarTraining' })
      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      model: 0
    }
  },
  computed: {
    ...mapState('training', ['exercises'])
  },
  created () {
    this.$store.dispatch('training/getExercises', {
      tense_id: 1,
      voice: 1
    })
  }
}
</script>

<style scoped>

</style>
