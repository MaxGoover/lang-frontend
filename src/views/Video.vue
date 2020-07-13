<template>
  <div>
    <h1>Video</h1>

    <!--Список видеофайлов-->
    <v-container>
      <v-flex>
        <v-row>
          <v-col
            v-for="(image, i) in images"
            :key="i"
            cols="12"
          >
            <a href="#">
              <v-img
                :src="image.src"
                alt=""
                height="150"
                width="150"
              />
            </a>
          </v-col>
        </v-row>
      </v-flex>
    </v-container>

    <!--Загрузка видеофайлов-->
    <v-container>
      <v-flex sm10 offset-sm2>
        <v-form @submit.prevent="uploadVideos">
          <v-file-input
            v-model="videos"
            append-icon="mdi-eye"
            background-color="white"
            color="purple"
            chips
            dense
            filled
            label="File input"
            multiple
            :prepend-icon="''"
          />

          <v-btn
            block
            color="primary"
            type="submit"
            :loading="loading"
          >
            Подтвердить
          </v-btn>
        </v-form>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      images: [],
      videos: null
    }
  },
  computed: {
    ...mapState('general', ['loading'])
  },
  methods: {
    uploadVideos () {
      this.$store.dispatch('video/uploadFiles', this.videos)
    }
  }
}
</script>

<style scoped>

</style>
