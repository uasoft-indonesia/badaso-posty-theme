<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="simple-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-8">
        <span @click="$to('search')" class="simple-theme__category--title">Berita Lainnya</span>
      </vs-col>
      <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-8">
        <span @click="$to('search')" class="d-flex justify-content-center align-items-center text-black"><span class="simple-theme__category--see-all">LIHAT SEMUA</span> <vs-icon icon="chevron_right" size="12px"></vs-icon></span>
      </vs-col>
      <vs-col>
        <vs-card class="simple-theme__other--card mb-0">
          <div class="simple-theme__other--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-type="flex" vs-justify="center" vs-align="flex-start">
              <vs-col vs-xs="12" vs-sm="12" vs-lg="4">
                <img :src="post.thumbnail" @click="$to('post', post.slug)" :class="{pointer: true, 'mb-20': $isMobile}">
              </vs-col>
              <vs-col vs-xs="12" vs-sm="12" vs-lg="8" class="pl-24">
                <span @click="$to('post', post.slug)" class="simple-theme__other--content-title">{{ post.title }}</span>

                <vs-row vs-type="grid" class="h-100 place-content-start mb-16 mt-20">
                  <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column">
                    <vs-icon icon="chat_bubble_outline" size="14px" color="#4F4F4F"></vs-icon> 
                    <span class="simple-theme__showcase--icon-text ml-4 text-black">{{ post.commentCount }}</span>
                    <vs-icon icon="schedule" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
                    <span class="simple-theme__showcase--icon-text ml-4 text-black">{{ $moment(post.publishedAt, "LL") }}</span>
                  </vs-col>
                </vs-row>

                <vue-clamp :max-lines="3" class="simple-theme__other--card-description">
                  {{ post.summary }}
                  <template slot="after">
                    <span @click="$to('post', post.slug)" class="simple-theme__other--read-more">Baca Selengkapnya</span>
                  </template>
                </vue-clamp>
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
export default {
  name: "OtherPost",
  components: {
    VueClamp
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
  }
}
</script>