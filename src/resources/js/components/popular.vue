<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="post-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
      <vs-col>
        <vs-card class="post-theme__popular--card mb-0">
          <div slot="header" @click="$to('popular')">
            <vs-icon icon="thumb_up_alt" color="white"></vs-icon>
            <span @click="$to('popular')" class="post-theme__popular--title ml-8">Berita Terpopuler</span>
          </div>
          <div class="post-theme__popular--card-content-container" v-for="(post, index) in posts" :key="index">
            <vs-row vs-justify="center" vs-align="center">
              <vs-col vs-w="10">
                <span class="pointer" @click="$to('post', post.slug)">
                  <vue-clamp :max-lines="3" class="post-theme__popular--content-title">
                    {{ post.title }}
                  </vue-clamp>
                </span>
              </vs-col>
              <vs-col vs-w="2">
                <vs-icon @click="$to('post', post.slug)" icon="chevron_right" class="pointer" color="#4F4F4F" size="36px" style="float: right;"></vs-icon>
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
export default {
  name: "PopularPost",
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
      this.$api.badasoPost
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