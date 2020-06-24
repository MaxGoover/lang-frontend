<template>
  <div>
    <h1>BOOKS</h1>
    <books-list/>
  </div>
</template>

<script>
export default {
  name: 'Books',
  components: {
    BooksList: () => import(/* webpackChunkName: "booksList" */ '../components/books/BooksList')
  }
}
</script>

<style scoped>

</style>
