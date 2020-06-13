<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-sm1 offset-lg2
        xs12 sm10 lg8
      >
        <v-container fluid>
          <v-layout row>

            <!--Поиск по тексту-->
            <v-flex xs7 sm8 md9>
              <v-text-field
                v-model="searchByText"
                :label="$t('pageBooks.search')"
              />
            </v-flex>
            <v-spacer/>

            <!--Поиск по уровню-->
            <v-flex xs5 sm4 md3>
              <v-select
                v-model="level"
                multiple
                :items="levels"
                :label="$t('pageBooks.level')"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <!--Карточка книги-->
      <v-flex
        v-for="book in filteredBooks"
        :key="book.id"
        offset-sm1 offset-lg2
        xs12 sm10 lg8
      >
        <v-card
          class="white--text"
          color="info"
        >
          <v-container fluid>
            <v-layout row>

              <!--Картинка-->
              <v-flex xs-12 md-3>
                <v-img
                  height="150px"
                  width="150px"
                  :src="$t('img.img1')"
                />
                <div class="text-center">
                  <v-btn color="white">
                    <v-icon left>mdi-eye</v-icon> Youtube
                  </v-btn>
                </div>
              </v-flex>

              <!--Описание-->
              <v-flex xs12 md9>
                <v-card-title class="headline">
                  {{ book.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ book.description }}
                </v-card-subtitle>
                <v-card-text>
                  {{ $t('pageBooks.level') }}: {{ getBookLevels(book.level) }}, {{ book.parts }} {{ $t('pageBooks.parts') }}
                </v-card-text>
                <v-card-actions>
                  <v-rating
                    v-model="book.rating"
                    color="yellow"
                    dense
                    half-increments
                    readonly
                  />
                  <div class="ml-4 hidden-xs-only">
                    <span>{{ book.rating }}</span>&nbsp;
                    <span>({{ book.ratingCount }})</span>
                  </div>
                  <v-spacer/>
                  <v-btn>{{ $t('pageBooks.goTo') }}</v-btn>
                </v-card-actions>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BooksList',
  data () {
    return {
      level: [],
      levels: ['A1', 'A2', 'B1', 'B2', 'B3', 'C1', 'C2'],
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
      if (this.level.length) {
        books = books.filter(book => this.level.filter(val => book.level.indexOf(val) !== -1).length > 0)
      }
      return books
    }
  },
  methods: {
    getBookLevels (level) {
      return level.join('/')
    }
  }
}
</script>

<style scoped>

</style>
