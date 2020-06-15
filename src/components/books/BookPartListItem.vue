<template>
  <v-card class="white--text" color="accent">
    <v-card-title class="headline" primary-title>
      {{ part.title }}
    </v-card-title>
    <v-card-actions>
      <v-spacer/>
      <v-btn :to="{ name: 'BookPart', params: { bookId: this.bookId, partId: part.id } }">{{ $t('pageBooks.open') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BookPartListItem',
  props: {
    bookId: { type: String },
    part: { type: Object }
  }
}
</script>

<style scoped>

</style>
