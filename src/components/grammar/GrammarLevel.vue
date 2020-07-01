<template>
  <div>
    <!--Уровень-->
    <h3 class="ml-4">{{ (JSON.parse(level.level)).title }}</h3>

    <!--Список тренировок-->
    <grammar-trainings-list :trainings="JSON.parse(level.trainings)"/>
  </div>
</template>

<script>
export default {
  name: 'GrammarLevel',
  components: {
    GrammarTrainingsList: () => import('./GrammarTrainingsList')
  },
  props: {
    level: { type: Object }
  }
}
</script>

<style scoped>

</style>
