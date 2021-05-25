<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="simple-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile ? 'center' : 'flex-start'" :vs-align="$isMobile ? 'center' : 'start'">
      <vs-col vs-lg="9" vs-xs="12" vs-sm="12" :class="{ 'pr-30': !$isMobile }">
        <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts.data && posts.data.length > 0">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <span class="simple-theme__categories--tag">SEARCH: <b>{{ this.search }}</b></span>
          </vs-col>
          <vs-divider />
          <vs-col vs-w="12">
            <vs-card class="simple-theme__categories--card mb-30">
              <div class="simple-theme__categories--card-content-container" v-for="(post, index) in posts.data" :key="index">
                <vs-row vs-type="flex" vs-align="center" vs-justify="center">
                  <vs-col :class="{ 'mb-20': $isMobile, 'pr-16': !$isMobile }" vs-xs="12" vs-sm="12" vs-lg="5">
                    <img :src="post.thumbnail" @click="$to('post', post.slug)">
                  </vs-col>
                  <vs-col vs-xs="12" vs-sm="12" vs-lg="7">
                    <h3 @click="$to('post', post.slug)" class="simple-theme__categories--content-title">{{ post.title }}</h3>
                    <simple-theme-info :post="post"></simple-theme-info>
                    <vue-clamp :max-lines="5" class="simple-theme__categories--card-description">
                      {{ post.summary }}
                      <template slot="after">
                        <span @click="$to('post', post.slug)" class="simple-theme__categories--read-more">... Baca Selengkapnya</span>
                      </template>
                    </vue-clamp>
                  </vs-col>
                  <vs-col vs-w="12">
                    <vs-divider v-if="index !== posts.data.length - 1"/>
                  </vs-col>
                </vs-row>
              </div>
            </vs-card>
            
            <simple-theme-pagination v-model="page" class="mt-30 mb-30" :data="posts"></simple-theme-pagination>
          </vs-col>
        </vs-row>

        <vs-row v-else>
          0 result.
        </vs-row>
      </vs-col>
      <vs-col vs-lg="3" vs-xs="12" vs-sm="12" class="sticky">
        <popular-post class="mb-30"></popular-post>
        <newest-post class="mb-30"></newest-post>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import VueClamp from 'vue-clamp';
import PopularPost from './popular';
import NewestPost from './newest';
export default {
  name: "SimpleThemeSearch",
  components: {
    VueClamp,
    PopularPost,
    NewestPost
  },
  data:()=>({
    search: "",
    loading: false,
    posts: [],
    page: 1
  }),
  watch: {
    'page': 'next'
  },
  created() {
    this.search = window.location.pathname.split("/").pop();
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.badasoBlog
        .fetchPosts({
          page: 1,
          limit: 10,
          search: this.search
        })
        .then((res) => {
          this.posts = res.data.posts;
          this.loading = false
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
          this.loading = false
        });
    },
    next() {
      this.$api.badasoBlog
        .fetchPosts({
          page: this.page,
          limit: 10,
          search: this.search
        })
        .then((res) => {
          this.posts.data = res.data.posts.data;
          this.$scrollToTop();
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
    }
  }
}
</script>