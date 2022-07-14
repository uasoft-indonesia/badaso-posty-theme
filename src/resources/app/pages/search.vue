<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile() ? 'center' : 'flex-start'" :vs-align="$isMobile() ? 'center' : 'start'">
      <vs-col vs-lg="9" vs-xs="12" vs-sm="12" :class="{ 'pr-30': !$isMobile() }">
        <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts.data && posts.data.length > 0">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <span class="posty-theme__categories--tag">SEARCH: <b>{{ search }}</b></span>
          </vs-col>
          <vs-divider />
          <vs-col vs-w="12">
            <vs-card class="posty-theme__categories--card mb-30">
              <div class="posty-theme__categories--card-content-container" v-for="(post, index) in posts.data" :key="index">
                <vs-row vs-type="flex" vs-align="center" vs-justify="center">
                  <vs-col :class="{ 'mb-20': $isMobile(), 'pr-16': !$isMobile() }" vs-xs="12" vs-sm="12" vs-lg="5">
                    <Link :href="route('badaso.posty-theme.post', post.slug)">
                      <img :src="post.thumbnail">
                    </Link>
                  </vs-col>
                  <vs-col vs-xs="12" vs-sm="12" vs-lg="7">
                    <Link :href="route('badaso.posty-theme.post', post.slug)">
                      <h3 class="posty-theme__categories--content-title">{{ post.title }}</h3>
                    </Link>
                    <posty-theme-info :post="post"></posty-theme-info>
                    <vue-clamp :max-lines="5" class="posty-theme__categories--card-description">
                      {{ post.summary }}
                      <template slot="after">
                        <Link :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__categories--read-more">... Baca Selengkapnya</Link>
                      </template>
                    </vue-clamp>
                  </vs-col>
                  <vs-col vs-w="12">
                    <vs-divider v-if="index !== posts.data.length - 1"/>
                  </vs-col>
                </vs-row>
              </div>
            </vs-card>
            
            <pagination v-model="page" class="mt-30 mb-30" :data="posts"></pagination>
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
import PopularPost from '../components/popular.vue';
import NewestPost from '../components/newest.vue';
import Pagination from '../components/pagination.vue';
import defaultLayout from "../layouts/default";
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "PostyThemeSearch",
  layout: defaultLayout,
  components: {
    VueClamp,
    PopularPost,
    NewestPost,
    Pagination,
    Link
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
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.badasoPostPublic
        .fetchPosts({
          page: 1,
          limit: 10,
          search: this.$page.props.search
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
          search: this.$page.props.search
        })
        .then((res) => {
          this.posts.data = res.data.posts.data;
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
    }
  }
}
</script>