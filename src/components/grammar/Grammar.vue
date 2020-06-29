<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-md2
        xs12 sm12 md10
      >
        <h1>Грамматические тренировки</h1>
        <v-container fluid>
          <v-layout row>

            <!--Уровень-->
            <v-flex xs6 sm8 md9>
              Уровень
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>

      <v-flex
        offset-sm2
        xs12 sm10
      >
        <!--Карточка уровня-->
        <grammar-level-list/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Grammar',
  components: {
    GrammarLevelList: () => import('./GrammarLevelList')
  }
}
</script>

<style scoped>

</style>
