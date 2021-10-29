<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="post-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile() ? 'center' : 'flex-start'" :vs-align="$isMobile() ? 'center' : 'start'">
      <vs-col vs-lg="9" vs-xs="12" vs-sm="12" :class="{ 'pr-30': !$isMobile() }">
        <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts.data && posts.data.length > 0">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <span class="post-theme__categories--tag">TAG: <b>Newest</b></span>
          </vs-col>
          <vs-divider />
          <vs-col vs-w="12">
            <vs-card class="post-theme__categories--card mb-30">
              <div class="post-theme__categories--card-content-container" v-for="(post, index) in posts.data" :key="index">
                <vs-row vs-type="flex" vs-align="center" vs-justify="center">
                  <vs-col :class="{ 'mb-20': $isMobile(), 'pr-16': !$isMobile() }" vs-xs="12" vs-sm="12" vs-lg="5">
                    <Link :href="route('badaso.post-theme.post', post.slug)">
                      <img :src="post.thumbnail">
                    </Link>
                  </vs-col>
                  <vs-col vs-xs="12" vs-sm="12" vs-lg="7">
                    <Link :href="route('badaso.post-theme.post', post.slug)">
                      <h3  class="post-theme__categories--content-title">{{ post.title }}</h3>
                    </Link>
                    <post-theme-info :post="post">
                      <vs-icon icon="visibility" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
                      <span class="post-theme__showcase--icon-text ml-4">{{ post.viewCount }}</span>
                    </post-theme-info>
                    <vue-clamp :max-lines="5" class="post-theme__categories--card-description">
                      {{ post.summary }}
                      <template slot="after">
                        <Link :href="route('badaso.post-theme.post', post.slug)">
                          <span class="post-theme__categories--read-more">... Baca Selengkapnya</span>
                        </Link>
                      </template>
                    </vue-clamp>
                  </vs-col>
                  <vs-col vs-w="12">
                    <vs-divider v-if="index !== posts.data.length - 1"/>
                  </vs-col>
                </vs-row>
              </div>
            </vs-card>

            <post-theme-pagination v-model="page" class="mt-30 mb-30" :data="posts"></post-theme-pagination>
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
import PopularPost from './../components/popular';
import NewestPost from './../components/newest';
import defaultLayout from "../layouts/default";
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "PostThemeCategory",
  layout: defaultLayout,
  components: {
    VueClamp,
    PopularPost,
    NewestPost,
    Link
  },
  data:()=>({
    loading: true,
    posts: [],
    page: 1
  }),
  watch: {
    'page': 'next'
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.badasoPostPublic
        .fetchPosts({
          page: 1,
          limit: 10,
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
      this.$api.badasoPostPublic
        .fetchPosts({
          page: this.page,
          limit: 10,
        })
        .then((res) => {
          this.posts = res.data.posts;
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
    }
  }
}
</script>