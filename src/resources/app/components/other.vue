<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-8">
        <Link :href="route('badaso.posty-theme.search')" class="posty-theme__category--title">Berita Lainnya</Link>
      </vs-col>
      <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-8">
        <Link :href="route('badaso.posty-theme.search')" class="d-flex justify-content-center align-items-center text-black">
          <span class="posty-theme__category--see-all">LIHAT SEMUA</span> <vs-icon icon="chevron_right" size="24px"></vs-icon>
        </Link>
      </vs-col>
      <vs-col>
        <vs-card class="posty-theme__other--card mb-0">
          <div class="posty-theme__other--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-type="flex" vs-justify="center" vs-align="flex-start">
              <vs-col vs-xs="12" vs-sm="12" vs-lg="4">
                <Link style="display: block;" :href="route('badaso.posty-theme.post', post.slug)">
                  <img height="240" :src="post.thumbnail" :class="{pointer: true, 'mb-20': $isMobile()}">
                </Link>
              </vs-col>
              <vs-col vs-xs="12" vs-sm="12" vs-lg="8" class="pl-24">
                <Link :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__other--content-title">
                  {{ post.title }}
                </Link>

                <vs-row vs-type="grid" class="h-100 place-content-start mb-16 mt-20">
                  <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column">
                    <vs-icon icon="chat_bubble_outline" size="24px" color="#4F4F4F"></vs-icon> 
                    <span class="posty-theme__showcase--icon-text ml-4 text-black">{{ post.commentCount }}</span>
                    <vs-icon icon="schedule" size="24px" class="ml-16" color="#4F4F4F"></vs-icon> 
                    <span class="posty-theme__showcase--icon-text ml-4 text-black">{{ $moment(post.publishedAt, "LL") }}</span>
                  </vs-col>
                </vs-row>

                <div class="posty-theme__other--card-description line-clamp-3 mb-4" v-html="post.content"></div>
                <Link :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__other--read-more">Baca Selengkapnya</Link>
              </vs-col>
              <vs-divider v-if="index !== posts.length - 1"/>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import VueClamp from 'vue-clamp';
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "OtherPost",
  components: {
    VueClamp,
    Link
  },
  props: {
    posts: {
      required: true,
      type: Array,
      default: []
    },
    loading: {
      required: true,
      type: Boolean,
      default: false
    }
  },
}
</script>