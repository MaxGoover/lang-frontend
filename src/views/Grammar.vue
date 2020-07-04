<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-sm2
        xs12 sm10
      >
        <!--Заголовок-->
        <h1 class="mb-4 ml-4">Грамматические тренировки</h1>

        <!--Список уровней-->
        <grammar-level
          v-for="(level, i) in levels"
          :key="i"
          :level="level"
        />

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Grammar',
  components: {
    GrammarLevel: () => import('../components/grammar/GrammarLevel')
  },
  computed: {
    ...mapState('grammar', ['levels'])
  },
  created () {
    this.$store.dispatch('grammar/getLevels')
  }
}
</script>

<style scoped>

</style>
