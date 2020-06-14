<template>
  <v-container grid-list-md v-if="book">
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <book-details :book="book"/>
      </v-flex>
      <v-flex
        v-for="part in book.parts"
        :key="part.id"
        xs12 sm10 offset-sm1>
        <book-part-list-item
          :bookId="book.id"
          :part="part"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const BookDetails = () => import(/* webpackChunkName: "bookDetails" */ './BookDetails')
const BookPartListItem = () => import(/* webpackChunkName: "bookPartListItem" */ './BookPartListItem')

export default {
  name: 'Book',
  components: {
    BookDetails,
    BookPartListItem
  },
  props: {
    id: { type: String, required: true }
  },
  computed: {
    book () {
      return this.$store.getters['books/books'].find(book => book.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
