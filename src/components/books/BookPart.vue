<template>
  <v-container grid-list-md v-if="bookPart">
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <book-part-content :partId="partId" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1>
        <book-part-words/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BookPart',
  components: {
    BookPartContent: () => import(/* webpackChunkName: "bookPartContent" */ './BookPartContent'),
    BookPartWords: () => import(/* webpackChunkName: "bookPartWords" */ './BookPartWords')
  },
  props: {
    bookId: { type: String },
    partId: { type: String }
  },
  computed: {
    ...mapState('books', ['bookPart'])
  },
  created () {
    this.$store.dispatch('books/getBookPart', {
      bookPartId: this.partId
    })
  }
}

</script>

<style scoped>

</style>
