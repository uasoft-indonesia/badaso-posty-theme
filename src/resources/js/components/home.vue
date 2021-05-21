<template>
  <vs-row vs-type="flex" :vs-justify="$isMobile ? 'center' : 'flex-start'" :vs-align="$isMobile ? 'center' : 'start'">
    <template v-if="$isMobile">
      <vs-col vs-xs="12" vs-sm="12">
        <carousel :thumbnails="getThumbnails()" class="mb-30"></carousel>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12">
        <category-type-one class="mb-30"></category-type-one>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12">
        <category-type-two class="mb-30"></category-type-two>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12">
        <newest-post :posts="newestPost" :loading="loading" class="mb-30"></newest-post>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12">
        <popular-post class="mb-30"></popular-post>
      </vs-col>
    </template>
    <template v-else>
      <vs-col vs-lg="9" class="pr-30">
        <carousel :thumbnails="getThumbnails()" class="mb-30"></carousel>
        <category-type-one class="mb-30"></category-type-one>
        <category-type-two class="mb-30"></category-type-two>
        <simple-theme-other :posts="otherPost" :loading="loading" class="mb-30"></simple-theme-other>
      </vs-col>
      <vs-col vs-lg="3" class="sticky">
        <popular-post class="mb-30"></popular-post>
        <newest-post class="mb-30"></newest-post>
      </vs-col>
    </template>
  </vs-row>
</template>

<script>
import Carousel from './carousel';
import NewestPost from './newest';
import PopularPost from './popular';
export default {
  name: "SimpleThemeHome",
  components: {
    Carousel,
    NewestPost,
    PopularPost
  },
  data:()=>({
    posts: {
      data: []
    },
    loading: false
  }),
  created() {
    this.fetchPosts();
  },
  computed: {
    newestPost() {
      return this.posts.data.slice(0, 4);
    },
    otherPost() {
      return this.posts.data.slice(4, 8);
    }
  },
  methods: {
    fetchPosts() {
      this.loading = true
      this.$api.simpleTheme
        .browse({
          page: 1,
          limit: 10
        })
        .then((res) => {
          this.posts = res.data.posts
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
      this.loading = false
    },
    getThumbnails() {
      let thumbnails = [];
      
      this.posts.data.forEach(element => {
        if (element.thumbnail) {
          thumbnails.push(element);
        }
      });

      return thumbnails;
    },
  }
}
</script>