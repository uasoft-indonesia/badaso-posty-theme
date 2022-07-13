<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile() ? 'center' : 'flex-start'" :vs-align="$isMobile() ? 'center' : 'start'">
      <vs-col vs-lg="9" vs-xs="12" vs-sm="12" :class="{ 'pr-30': !$isMobile() }">
        <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts.data && posts.data.length > 0">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <span class="posty-theme__categories--tag">KATEGORI: <b>{{ posts.data[0].category.title }}</b></span>
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
                      <h3 class="posty-theme__categories--content-title line-clamp-2">{{ post.title }}</h3>
                    </Link>
                    <info :post="post"></info>
                    <div class="posty-theme__categories--card-description line-clamp-3" v-html="post.content"></div>
                    <Link :href="route('badaso.posty-theme.post', post.slug)" class="posty-theme__categories--read-more">Baca Selengkapnya</Link>
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
import VueClamp from "vue-clamp";
import PopularPost from "./../components/popular";
import NewestPost from "./../components/newest";
import Info from "./../components/info";
import Pagination from "../components/pagination";
import defaultLayout from "../layouts/default";
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "PostyThemeCategory",
  layout: defaultLayout,
  components: {
    VueClamp,
    PopularPost,
    NewestPost,
    Info,
    Pagination,
    Link
  },
  data:()=>({
    slug: "",
    loading: true,
    posts: [],
    page: 1
  }),
  watch: {
    'page': 'next'
  },
  mounted() {
    this.slug = window.location.pathname.split("/").pop();
    this.fetchPosts();
  },
  computed: {
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.badasoPostPublic
        .fetchPosts({
          page: 1,
          limit: 10,
          category: this.slug
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
          category: this.slug
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