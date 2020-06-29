<template>
  <v-col md="6">
    <v-card
        :elevation="$vuetify.breakpoint.smAndDown ? 0 : 4"
      >
        <v-list-item
          two-line
        >
          <!--Аватарка-->
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>

          <!--Описание-->
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'GrammarLevel',
  props: {
    avatar: { type: String },
    title: { type: String }
  },
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  })
}
</script>

<style scoped>

</style>
