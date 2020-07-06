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
    BooksList: () => import('../components/books/BooksList')
  }
}
</script>

<style scoped>

</style>
