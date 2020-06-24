<template>
  <v-card
    class="white--text"
    color="info"
  >
    <v-container fluid>
      <v-layout row>
        <v-col xs12 sm6>
          <!--Аватарка-->
          <v-flex sm-4 md-3>
            <v-avatar color="red">
              <span class="white--text headline">CJ</span>
            </v-avatar>
          </v-flex>

          <!--Описание-->
          <v-flex sm-8 md-9>
            <v-card-title class="headline">
              Title
            </v-card-title>
            <v-card-subtitle>
              Subtitle
            </v-card-subtitle>
            <v-card-text>
              Text
            </v-card-text>
          </v-flex>
        </v-col>

      </v-layout>
    </v-container>

<!--    <v-container>-->
<!--      <v-row dense>-->
<!--        <v-col cols="12">-->
<!--          <v-card-->
<!--            color="#385F73"-->
<!--            dark-->
<!--          >-->
<!--            <v-card-title class="headline">Unlimited music now</v-card-title>-->

<!--            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>-->

<!--            <v-card-actions>-->
<!--              <v-btn text>Listen Now</v-btn>-->
<!--            </v-card-actions>-->
<!--          </v-card>-->
<!--        </v-col>-->

<!--        <v-col-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          cols="12"-->
<!--        >-->
<!--          <v-card-->
<!--            :color="item.color"-->
<!--            dark-->
<!--          >-->
<!--            <div class="d-flex flex-no-wrap justify-space-between">-->
<!--              <v-avatar-->
<!--                class="ma-3"-->
<!--                size="125"-->
<!--                tile-->
<!--              >-->
<!--                <v-img :src="item.src"></v-img>-->
<!--              </v-avatar>-->

<!--              <div>-->
<!--                <v-card-title-->
<!--                  class="headline"-->
<!--                  v-text="item.title"-->
<!--                ></v-card-title>-->

<!--                <v-card-subtitle v-text="item.artist"></v-card-subtitle>-->
<!--              </div>-->
<!--            </div>-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
  </v-card>
</template>

<script>
export default {
  name: 'GrammarLevel',
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
