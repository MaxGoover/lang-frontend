<template>
  <v-card class="pa-2">

    <!--Заголовок-->
    <div class="display-1 text-center">{{ part.bookTitle }}</div>
    <div class="headline">{{ part.partTitle }}</div>

    <!--Youtube-->
    <div class="text-center mt-2 mb-2">
      <!--Youtube плеер-->
      <div class="headline" :width="width">Здесь плеер Youtube</div>
    </div>
  </v-card>
</template>

<script>
import CommonHelper from '../../helpers/CommonHelper'

export default {
  name: 'BookPartContent',
  props: {
    part: { type: Object }
  },
  computed: {
    width () {
      return CommonHelper.widthBreakpoints(this.$vuetify.breakpoint.name)
    }
  }
}
</script>

<style scoped>

</style>
