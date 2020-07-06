<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex offset-lg2 xs12 sm12 lg8>
        <v-container fluid>
          <v-layout row>

            <!--Поиск по тексту-->
            <v-flex xs6 sm8 md9>
              <v-text-field
                v-model="searchByText"
                :label="$t('pageBooks.search')"
              />
            </v-flex>
            <v-spacer/>

            <!--Поиск по уровню-->
            <v-flex xs5 sm3 md2>
              <v-select
                v-model="searchByLevel"
                multiple
                :items="levels"
                :label="$t('pageBooks.level')"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <!--Список книг-->
      <v-flex
        v-for="book in filteredBooks"
        :key="book._id"
        offset-lg2
        xs12 sm12 lg8
      >
        <!--Карточка книги-->
        <books-list-item :book="book"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BooksList',
  components: {
    BooksListItem: () => import('./BooksListItem')
  },
  data () {
    return {
      levels: ['A1', 'A2', 'B1', 'B2', 'B3', 'C1', 'C2'],
      searchByLevel: [],
      searchByText: null
    }
  },
  computed: {
    ...mapState('books', ['books']),
    filteredBooks () {
      let books = this.books

      // Поиск по тексту
      if (this.searchByText) {
        books = books.filter(book =>
          book.title.toLowerCase().indexOf(this.searchByText.toLowerCase()) >= 0 ||
            book.description.toLowerCase().indexOf(this.searchByText.toLowerCase()) >= 0)
      }

      // Поиск по уровням
      if (this.searchByLevel.length) {
        books = books.filter(book => this.searchByLevel.filter(val => book.level.indexOf(val) !== -1).length > 0)
      }
      return books
    }
  }
}
</script>

<style scoped>

</style>
