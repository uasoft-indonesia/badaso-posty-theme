<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col>
        <vs-card class="posty-theme__popular--card mb-0">
          <Link slot="header" :href="route('badaso.posty-theme.popular')" class="posty-theme__popular--title">
            <vs-icon icon="thumb_up_alt" color="white"></vs-icon>
            Berita Terpopuler
          </Link>
          <div class="posty-theme__popular--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-justify="center" vs-align="center">
              <vs-col vs-w="10">
                <Link class="pointer" :href="route('badaso.posty-theme.post', post.slug)">
                  <vue-clamp :max-lines="3" class="posty-theme__popular--content-title">
                    {{ post.title }}
                  </vue-clamp>
                </Link>
              </vs-col>
              <vs-col vs-w="2">
                <Link :href="route('badaso.posty-theme.post', post.slug)">
                  <vs-icon icon="chevron_right" class="pointer" color="#4F4F4F" size="36px" style="float: right;"></vs-icon>
                </Link>
              </vs-col>
            </vs-row>
            <vs-divider v-if="index !== posts.length - 1"/>
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
  name: "PopularPost",
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
        .fetchPopularPosts({
          page: 1,
          limit: 4
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