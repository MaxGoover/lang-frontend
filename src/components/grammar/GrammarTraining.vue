<template>
  <div>
    <h1>Training</h1>
    <pre>{{ alias }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GrammarTraining',
  props: {
    alias: { type: String }
  },
  computed: {
    ...mapState('training', ['exercises'])
  },
  created () {
    this.$store.dispatch('training/getExercises', this.alias)
  }
}
</script>

<style scoped>

</style>
