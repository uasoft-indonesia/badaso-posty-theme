<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col>
        <vs-card class="posty-theme__newest--card mb-0">
          <Link slot="header" :href="route('badaso.posty-theme.newest')" class="posty-theme__newest--title">
            <vs-icon icon="schedule" color="white"></vs-icon>
            Berita Terbaru
          </Link>
          <div class="posty-theme__newest--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-type="flex" :vs-justify="$isMobile() ? 'start' : 'center'" vs-align="center">
              <vs-col vs-xs="12" vs-sm="12" vs-lg="4">
                <Link :href="route('badaso.posty-theme.post', post.slug)">
                  <img :src="post.thumbnail" :class="{pointer: true, 'mb-20': $isMobile()}">
                </Link>
              </vs-col>
              <vs-col vs-xs="12" vs-sm="12" vs-lg="8">
                <Link v-if="$isMobile()" :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__newest--content-title">
                  {{ post.title }}
                </Link>
                <Link v-else :href="route('badaso.posty-theme.post', post.slug)">
                  <vue-clamp :max-lines="3" class="posty-theme__newest--content-title">
                    {{ post.title }}
                  </vue-clamp>
                </Link>
              </vs-col>
              <vs-row v-if="$isMobile()" vs-type="grid" class="h-100 place-content-start mb-16 mt-20">
                <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column">
                  <vs-icon icon="chat_bubble_outline" size="14px" color="#4F4F4F"></vs-icon> 
                  <span class="posty-theme__showcase--icon-text ml-4">{{ post.commentCount }}</span>
                  <vs-icon icon="schedule" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
                  <span class="posty-theme__showcase--icon-text ml-4">{{ $moment(post.publishedAt, "LL") }}</span>
                </vs-col>
              </vs-row>

              <div v-if="$isMobile()" class="posty-theme__newest--card-description line-clamp-3" v-html="post.content"></div>
              <Link v-if="$isMobile()" :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__newest--read-more">Baca Selengkapnya</Link>
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
  name: "NewestPost",
  components: {
    VueClamp,
    Link
  },
  data:()=>({
    posts: [],
    loading: false
  }),
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.badasoPostPublic
        .fetchPosts({
          page: 1,
          limit: 4,
        })
        .then((res) => {
          this.posts = res.data.posts.data
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
      this.loading = false
    },
  }
}
</script>