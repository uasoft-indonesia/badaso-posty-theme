<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="simple-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col>
        <vs-card class="simple-theme__newest--card mb-0">
          <div slot="header" @click="$to('newest')">
            <vs-icon icon="schedule" color="white"></vs-icon>
            <span @click="$to('newest')" class="simple-theme__newest--title ml-8">Berita Terbaru</span>
          </div>
          <div class="simple-theme__newest--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-type="flex" vs-justify="center" vs-align="center">
              <vs-col vs-xs="12" vs-sm="12" vs-lg="4">
                <img :src="post.thumbnail" @click="$to('post', post.slug)" :class="{pointer: true, 'mb-20': $isMobile}">
              </vs-col>
              <vs-col vs-xs="12" vs-sm="12" vs-lg="8">
                <span v-if="$isMobile" @click="$to('post', post.slug)" class="simple-theme__newest--content-title">{{ post.title }}</span>
                <span v-else @click="$to('post', post.slug)">
                  <vue-clamp :max-lines="3" class="simple-theme__newest--content-title">
                    {{ post.title }}
                  </vue-clamp>
                </span>
              </vs-col>
              <vs-row v-if="$isMobile" vs-type="grid" class="h-100 place-content-start mb-16 mt-20">
                <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column">
                  <vs-icon icon="chat_bubble_outline" size="14px" color="#4F4F4F"></vs-icon> 
                  <span class="simple-theme__showcase--icon-text ml-4">{{ post.commentCount }}</span>
                  <vs-icon icon="schedule" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
                  <span class="simple-theme__showcase--icon-text ml-4">{{ $moment(post.publishedAt, "LL") }}</span>
                </vs-col>
              </vs-row>
              <vue-clamp v-if="$isMobile" :max-lines="5" class="simple-theme__newest--card-description">
                {{ post.summary }}
                <template slot="after">
                  <span @click="$to('post', post.slug)" class="simple-theme__newest--read-more">Baca Selengkapnya</span>
                </template>
              </vue-clamp>
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
  name: "NewestPost",
  components: {
    VueClamp
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
      this.$api.simpleTheme
        .browse({
          page: 1,
          perPage: 5,
          sortby: 'published_at',
          sorttype: 'desc'
        })
        .then((res) => {
          this.posts = res.data.posts
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
      this.loading = false
    },
  }
}
</script>