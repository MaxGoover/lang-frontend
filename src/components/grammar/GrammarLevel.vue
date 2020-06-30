<template>
  <div>
    <!--Уровень-->
    <h3 class="ml-4">{{ level.title.toUpperCase() }}</h3>

    <!--Список тренировок-->
    <grammar-trainings-list :levelId="level.id"/>
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
