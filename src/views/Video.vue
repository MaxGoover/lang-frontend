<template>
  <div>
    <h1>Video</h1>

    <!--Загрузка видеофайлов-->
    <v-form @submit.prevent="uploadVideos">
      <v-file-input
        v-model="videos"
        accept="video/*"
        append-icon="mdi-eye"
        background-color="green"
        color="purple"
        chips
        dense
        filled
        label="File input"
        multiple
        prepend-icon="mdi-camera"
      />

      <v-btn
        block
        color="primary"
        type="submit"
      >
        Подтвердить
      </v-btn>
    </v-form>

  </div>
</template>

<script>
export default {
  name: 'Video',
  data () { return { videos: null } },
  methods: {
    uploadVideos () {
      this.$store.dispatch('video/uploadFiles', this.videos)
    }
  }
}
</script>

<style scoped>

</style>
