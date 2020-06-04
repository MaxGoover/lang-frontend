<template>
  <v-layout align-center justify-center mb-5>
    <v-flex xs12 sm8 md4 text-xs-center>
      <v-card-text>

        <!--Ошибка 404-->
        <h1 style="font-size: 150px;" class="font-weight-thin">404</h1>
        <p class="display-1">{{ $t('error.pageNotFound') }}</p>
        <p>{{ $t('error.tryFollowingPages') }}</p>

        <!--Ссылка на главную страница-->
        <v-btn
          flat color="primary"
          :to="{ name: 'Main' }"
        >
          ⟵ {{ $t('menu.main') }}
        </v-btn>

        <br/>

        <!--Вернуться назад-->
        <v-btn
          flat color="primary"
          @click="goBack"
        >
          ⟵ {{ $t('menu.back') }}
        </v-btn>

      </v-card-text>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
