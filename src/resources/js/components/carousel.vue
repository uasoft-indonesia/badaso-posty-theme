<template>
  <div class="post-theme__showcase">
    <slider ref="slider" :options="options" class="simpe-theme__slider-container">
      <slideritem v-for="(item, index) in thumbnails" :key="index" class="post-theme__showcase--container">
        <img :src="getMediaBaseUrl + item.thumbnail" class="post-theme__showcase--image" alt="Thumbnail">
        <div class="post-theme__showcase--overlay">
          <vs-row vs-type="grid" class="h-100 place-content-center">
            <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
              <vs-icon icon="chat_bubble_outline" :size="$isMobile ? '14px' : '18px'" class="text-shadow"></vs-icon> 
              <span class="post-theme__showcase--icon-text ml-4 text-shadow text-white">{{ item.commentCount }}</span>
              <vs-icon icon="schedule" :size="$isMobile ? '14px' : '18px'" class="ml-16 text-shadow"></vs-icon> 
              <span class="post-theme__showcase--icon-text ml-4 text-shadow text-white">{{ $moment(item.publishedAt, "LL") }}</span>
            </vs-col>
            <vs-col vs-w="12">
              <h3 class="post-theme__showcase--wrap post-theme__showcase--title">{{ item.title }}</h3>
            </vs-col>
            <vs-col vs-w="12" class="mt-16">
              <vs-button color="white" type="border" size="small" class="post-theme__showcase--readmore" @click="$to('post', item.slug)"><span>BACA SELENGKAPNYA</span></vs-button>
            </vs-col>
          </vs-row>
        </div>
      </slideritem >

      <div slot="loading" class="post-theme__loading--wrapper">
        <vs-icon icon="refresh" class="post-theme__loading" size="large"></vs-icon>
      </div>
    </slider>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  props: {
    thumbnails: {
      type: Array,
      required: true,
      default: []
    }
  },
  data:()=>({
    options: {
      pagination: true,
      currentPage: 0,
      thresholdDistance: 100,
      thresholdTime: 300,
      grabCursor: true,
      speed: 300,
      timingFunction: 'ease',
      loop: true,
      autoplay: 0
    },
  }),
  computed: {
    getMediaBaseUrl() {
      return this.$store.state.meta.mediaBaseUrl || '/storage/'
    }
  },
  components: {
    slider,
    slideritem,
  },
};
</script>