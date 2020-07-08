<template>
  <v-card-actions class="action"/>
</template>

<script>
export default {
  name: 'GrammarTrainingFooter',
  props: { checked: { type: Boolean } },
  methods: {
    check () {

    }
  }
}
</script>

<style scoped>
  .action {
    border-top: 5px solid white;
    min-height: 75px;
  }
</style>
