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

    <div class="mt-2">
      <v-slider
        v-model="fontSize"
        min="10"
        max="30"
        step="2"
        tick-size="5"
        :label="`Размер шрифта (${fontSize})`"
      />
      <v-tabs
        v-model="tabMode"
        color="accent"
        fixed-tabs
        slider-color="success"
      >
        <v-tab key="en" ripple>Текст с подсказками</v-tab>
        <v-tab key="ru" ripple>Параллельно</v-tab>
        <v-tab-item key="en">
          <div v-for="(p, i) in part.content" :key="`p1${i}`">
            <span>&nbsp;&nbsp;</span>
            <span
              v-for="(sentence, y) in p.sentences"
              :key="`p1${i}s1${y}`"
              :style="textFontSize"
            >
              <span>
                {{ sentence.origText }}
              </span>
              <v-icon
                :size="fontSize"
                @click.prevent="toggleVisibilityHelp(i, y)"
              >
                mdi-help</v-icon>
              <span
                v-if="getVisibilityFlag (i, y).value"
                class="success--text"
              >
                {{ sentence.transText }}
              </span>
            </span>
          </div>
        </v-tab-item>
        <v-tab-item key="ru">
          <v-container>
            <v-layout row wrap v-for="(p, i) in part.content" :key="`p2${i}`">
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span
                  v-for="(sentence, y) in p.sentences"
                  :key="`p2${i}s2${y}orig`"
                  :style="textFontSize"
                >
                  <span>{{ sentence.origText }}</span>
                </span>
              </v-flex>
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span
                  v-for="(sentence, y) in p.sentences"
                  :key="`p2${i}s2${y}trans`"
                  :style="textFontSize"
                >
                  <span>{{ sentence.transText }}</span>
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs>
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
  data () {
    return {
      fontSize: 18,
      visibilityKeys: [],
      tabMode: 'en'
    }
  },
  computed: {
    textFontSize () {
      return { fontSize: `${this.fontSize}px` }
    },
    width () {
      return CommonHelper.widthBreakpoints(this.$vuetify.breakpoint.name)
    }
  },
  created () {
    for (let i = 0; i < this.part.content.length; i++) {
      for (let y = 0; y < this.part.content[i].sentences.length; y++) {
        this.visibilityKeys.push({
          key: `${i}${y}`,
          value: false
        })
      }
    }
  },
  methods: {
    getVisibilityFlag (i, y) {
      return this.visibilityKeys.find(k => k.key === `${i}${y}`)
    },
    toggleVisibilityHelp (i, y) {
      const flag = this.getVisibilityFlag(i, y)
      flag.value = !flag.value
    }
  }
}
</script>

<style scoped>

</style>
