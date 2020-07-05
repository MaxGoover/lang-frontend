<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title class="headline justify-center">{{ $t('dimmer.askConfirmLogout') }}</v-card-title>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="green darken-1" text @click="logout">{{ $t('common.yes') }}</v-btn>
        <v-btn color="green darken-1" text @click="hideDialog">{{ $t('common.no') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogWindow',
  computed: {
    dialog: {
      get () {
        return this.$store.getters['menu/showDialog']
      },
      set () {
        this.hideDialog()
      }
    }
  },
  methods: {
    hideDialog () {
      this.$store.dispatch('menu/setShowDialog', false)
    },
    logout () {
      this.$store.dispatch('authorization/logout')
        .then(() => { this.hideDialog() })
    }
  }
}
</script>

<style scoped>

</style>
