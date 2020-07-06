<template>
  <v-container fluid>
    <span class="display-1">Слова</span>
    <v-data-iterator
      hide-default-footer
      :items="bookPart.words"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.origWord }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>{{ item.transWord }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" fab dark small>
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BookPartWords',
  computed: { ...mapState('books', ['bookPart']) }
}
</script>

<style scoped>

</style>
