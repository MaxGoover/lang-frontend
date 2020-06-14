<template>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BookPart',
  props: {
    bookId: { type: String },
    partId: { type: String }
  },
  computed: {
    ...mapState('books', ['bookParts'])
  }
}
// 35^14
</script>

<style scoped>

</style>
