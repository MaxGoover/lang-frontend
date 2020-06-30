<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-sm2
        xs12 sm10
      >
        <!--Заголовок-->
        <h1 class="mb-4 ml-4">Грамматические тренировки</h1>

        <!--Уровень-->
        <h3 class="ml-4">BEGINNER</h3>

        <!--Карточка уровня-->
        <grammar-trainings-list/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Grammar',
  components: {
    GrammarTrainingsList: () => import('./GrammarTrainingsList')
  }
}
</script>

<style scoped>

</style>
