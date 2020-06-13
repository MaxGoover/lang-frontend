<template>
  <div>
    <h1>BOOKS</h1>
  </div>
</template>

<script>
const BooksList = () => import(/* webpackChunkName: "booksList" */ '../components/books/BooksList')

export default {
  name: 'Books',
  components: {
    BooksList
  }
}
</script>

<style scoped>

</style>
