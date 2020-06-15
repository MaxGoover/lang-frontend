<template>
  <v-container grid-list-md v-if="bookPart">
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <book-part-content :part="bookPart" />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1>
<!--        <book-part-words :words="bookPart.words" />-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const BookPartContent = () => import(/* webpackChunkName: "bookPartContent" */ './BookPartContent')

export default {
  name: 'BookPart',
  components: {
    BookPartContent
  },
  props: {
    bookId: { type: String },
    partId: { type: String }
  },
  computed: {
    bookPart () {
      return this.$store.getters['books/bookParts'].find(part => part.bookPartId === this.partId)
    }
  }
}
// 35^14
</script>

<style scoped>

</style>
