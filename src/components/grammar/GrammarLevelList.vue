<template>
  <v-container grid-list-md>
    <v-row>
      <grammar-level
        v-for="(level, i) in levels"
        :key="i"
        :avatar="level.avatar"
        :title="level.title"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GrammarLevelList',
  components: {
    GrammarLevel: () => import('./GrammarLevel')
  },
  data: () => {
    return {
      levels: [
        {
          avatar: 'PS',
          title: 'Present Simple'
        },
        {
          avatar: 'PS',
          title: 'Past Simple'
        },
        {
          avatar: 'FS',
          title: 'Future Simple'
        },
        {
          avatar: 'N',
          title: 'Numerals'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
