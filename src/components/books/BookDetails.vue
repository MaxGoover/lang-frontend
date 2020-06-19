<template>
  <v-card
    class="white--text"
    color="info"
  >
    <v-container fluid>
      <v-layout row>

        <!--Картинка-->
        <v-flex sm-4 md-3>
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
        <v-flex sm-8 md9>
          <v-card-title class="headline">
            {{ book.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ book.description }}
          </v-card-subtitle>
          <v-card-text>
            {{ $t('pageBooks.level') }}: {{ getBookLevels(book.level) }}, {{ book.parts.length }} {{ $t('pageBooks.parts') }}
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
            <v-btn v-if="canLoadBook(book._id)">{{ $t('pageBooks.load') }}</v-btn>
          </v-card-actions>
        </v-flex>

      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import BookHelper from '../../helpers/BookHelper'

export default {
  name: 'BookDetails',
  props: {
    book: { type: Object }
  },
  computed: {
    ...mapState('general', ['loading']),
    ...mapState('authorization', ['isAuthorized']),
    ...mapState('user', ['userData'])
  },
  methods: {
    canLoadBook (bookId) {
      let book = this.getUserDataBook(bookId)
      return this.isAuthorized && !this.loading && !book
    },
    getBookLevels: BookHelper.getBookLevels,
    getUserDataBook (bookId) {
      return this.userData.books[bookId]
    }
  }
}
</script>

<style scoped>

</style>
