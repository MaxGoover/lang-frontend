<template>
  <div>
    <h1>Video</h1>
    <input type="file" accept="image/*" multiple>

    <form method="post" enctype="multipart/form-data" name="form">
      <input type="file" name="media-vid"  class=" file_multi_video" accept="video/*">
      <input type="submit" name="submit" value="upload"/>
    </form>

    <v-form
      @submit="convertVideos"
    >
      <v-file-input
        v-model="videos"
        append-icon="mdi-eye"
        background-color="green"
        color="purple"
        chips
        dense
        filled
        label="File input"
        multiple
        prepend-icon="mdi-camera"
      ></v-file-input>

      <v-btn
        block
        color="primary"
        type="submit"
        @click.prevent="convertVideos"
      >
        Подтвердить
      </v-btn>
    </v-form>

  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      videos: {}
    }
  },
  methods: {
    convertVideos () {}
  }
}
</script>

<style scoped>

</style>
