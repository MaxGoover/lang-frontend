<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        offset-sm1 offset-md2
        xs12 sm10 md8
      >
        <v-container fluid>
          <v-layout row>

            <!--Поиск по тексту-->
            <v-flex>
              <v-text-field
                v-model="searchByText"
                :label="$t('pageBooks.search')"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <!--Карточка книги-->
      <v-flex
        v-for="book in filteredBooks"
        :key="book.id"
        offset-sm1 offset-md2
        xs12 sm10 md8
      >
        <v-card
          class="white--text"
          color="info"
        >
          <v-container fluid>
            <v-layout row>

              <!--Картинка-->
              <v-flex xs-4 md-3>
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
              <v-flex xs8 md9>
                <v-card-title class="headline">
                  {{ book.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ book.description }}
                </v-card-subtitle>
                <pre>{{ book.level }}</pre>
                <v-card-text>
                  {{ $t('pageBooks.level') }}: {{ getBookLevels(book.levels) }}, {{ book.parts }} {{ $t('pageBooks.parts') }}
                </v-card-text>
                <v-card-actions>
                  <v-rating
                    v-model="book.rating"
                    color="yellow"
                    dense
                    half-increments
                    readonly
                  />
                  <div class="ml-4">
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
      searchByText: null
    }
  },
  computed: {
    ...mapState('books', ['books']),
    filteredBooks () {
      let books = this.books
      if (this.searchByText) {
        books = books.filter(book =>
          book.title.toLowerCase().indexOf(this.searchByText.toLowerCase()) >= 0 ||
            book.description.toLowerCase().indexOf(this.searchByText.toLowerCase()) >= 0)
      }
      return books
    }
  },
  methods: {
    getBookLevels (levels) {
      return levels.join('/')
    }
  }
}
</script>

<style scoped>

</style>
