<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-lg2
        xs12 sm12 lg8
      >
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
        offset-sm1 offset-lg2
        xs12 sm10 lg8
      >
        <!--Карточка уровня-->
        <grammar-level/>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Grammar',
  components: {
    GrammarLevel: () => import(/* webpackChunkName: "booksList" */ './GrammarLevel')
  }
}
</script>

<style scoped>

</style>
