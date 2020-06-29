<template>
  <v-container grid-list-md>
    <v-row>
      <grammar-level
        v-for="(level, i) in levels"
        :key="i"
        :avatar="level.avatar"
        :title="level.title"
        :subtitle="level.subtitle"
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
          title: 'Present Simple - Active Voice',
          subtitle: 'Простое настоящее'
        },
        {
          avatar: 'PS',
          title: 'Past Simple - Active Voice',
          subtitle: 'Простое прошедшее'
        },
        {
          avatar: 'FS',
          title: 'Future Simple - Active Voice',
          subtitle: 'Простое будущее'
        },
        {
          avatar: 'N',
          title: 'Numerals',
          subtitle: 'Числительные'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
