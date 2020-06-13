<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        v-for="book in books"
        :key="book.id"
        offset-sm1 offset-md-2
        xs12 sm10 md8
      >
        <v-card
          class="white--text"
          color="info"
        >
          <v-container fluid>
            <v-layout row>
              <v-flex xs-4 md-3>
                <v-img
                  height="120px"
                  width="100px"
                  :src="$t('img.img1')"
                />
              </v-flex>
              <v-flex xs 8 md9>
                <v-card-title class="headline">
                  {{ book.title }}
                </v-card-title>
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
  computed: {
    ...mapState('books', ['books'])
  }
}
</script>

<style scoped>

</style>
