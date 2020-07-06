<template>
  <v-col md="6">
    <v-card
      :elevation="$vuetify.breakpoint.smAndDown ? 0 : 4"
      :to="{ name: 'GrammarTraining', params: params }"
    >
      <v-list-item two-line>
        <!--Аватарка-->
        <v-list-item-avatar>
          <v-avatar color="red">
            <span class="white--text headline">{{ training.avatar }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <!--Описание-->
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ training.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ training.translation }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'GrammarTrainingsListItem',
  props: { training: { type: Object } },
  data () {
    return {
      params: {
        alias: this.training.alias,
        training: this.training
      }
    }
  }
}
</script>

<style scoped>

</style>
