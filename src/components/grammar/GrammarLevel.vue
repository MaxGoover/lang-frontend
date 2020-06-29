<template>
  <v-col md="6">
    <v-card :elevation="$vuetify.breakpoint.smAndDown ? 0 : 4">
        <v-list-item two-line>
          <!--Аватарка-->
          <v-list-item-avatar>
            <v-avatar color="red">
              <span class="white--text headline">{{ avatar }}</span>
            </v-avatar>
          </v-list-item-avatar>

          <!--Описание-->
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
            <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
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
    title: { type: String },
    subtitle: { type: String }
  }
}
</script>

<style scoped>

</style>
