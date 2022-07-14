<template>
  <div class="posty-theme__showcase">
    <slider ref="slider" :options="options" class="simpe-theme__slider-container">
      <slideritem v-for="(item, index) in thumbnails" :key="index" class="posty-theme__showcase--container">
        <img :src="item.thumbnail" class="posty-theme__showcase--image" alt="Thumbnail">
        <div class="posty-theme__showcase--overlay">
          <vs-row vs-type="grid" class="h-100 place-content-center">
            <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
              <vs-icon icon="chat_bubble_outline" :size="$isMobile() ? '14px' : '18px'" class="text-shadow"></vs-icon> 
              <span class="posty-theme__showcase--icon-text ml-4 text-shadow text-white">{{ item.commentCount }}</span>
              <vs-icon icon="schedule" :size="$isMobile() ? '14px' : '18px'" class="ml-16 text-shadow"></vs-icon> 
              <span class="posty-theme__showcase--icon-text ml-4 text-shadow text-white">{{ $moment(item.publishedAt, "LL") }}</span>
            </vs-col>
            <vs-col vs-w="12">
              <h3 class="posty-theme__showcase--wrap posty-theme__showcase--title">{{ item.title }}</h3>
            </vs-col>
            <vs-col vs-w="12" class="mt-16">
              <Link :href="route('badaso.posty-theme.post', item.slug)" style="color: white">
                <vs-button color="white" type="border" size="small" class="posty-theme__showcase--readmore">BACA SELENGKAPNYA</vs-button>
              </Link>
            </vs-col>
          </vs-row>
        </div>
      </slideritem >

      <div slot="loading" class="posty-theme__loading--wrapper">
        <vs-icon icon="refresh" class="posty-theme__loading" size="large"></vs-icon>
      </div>
    </slider>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import { Link } from "@inertiajs/inertia-vue"
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
  components: {
    slider,
    slideritem,
    Link
  },
};
</script>