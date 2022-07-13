<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <template v-if="$isMobile()">
      <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
        <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-4">
          <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)" class="posty-theme__category--title">{{ posts[0].category.title }}</Link>
        </vs-col>
        <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-4">
          <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)" class="d-flex justify-content-center align-items-center text-black"><span class="posty-theme__category--see-all">LIHAT SEMUA</span> <vs-icon icon="chevron_right" size="12px"></vs-icon></Link>
        </vs-col>
        <vs-col>
          <vs-card class="posty-theme__category--card mb-20">
            <div slot="media" class="posty-theme__category--card-header-container">
              <Link :href="route('badaso.posty-theme.post', posts[0].slug)">
                <img :src="posts[0].thumbnail" class="pointer">
              </Link>
              <div class="posty-theme__category--card-header">
                <vs-row>
                  <vs-col class="mb-8">
                    <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)">
                      <vs-chip color="#2E99A5" class="posty-theme__category--card-header-chip">{{ posts[0].category.title }}</vs-chip>
                    </Link>
                  </vs-col>
                  <vs-col>
                    <Link :href="route('badaso.posty-theme.post', posts[0].slug)">
                      <h3 class="posty-theme__category--card-header-text">{{ posts[0].title }}</h3>
                    </Link>
                  </vs-col>
                </vs-row>
              </div>
            </div>
            <div class="posty-theme__category--card-content-container">
              <div class="posty-theme__category--card-description line-clamp-3" v-html="posts[0].content"></div>
              <Link :href="route('badaso.posty-theme.post', posts[0].slug)" class="posty-theme__category--read-more">Baca Selengkapnya</Link>
              <vs-row vs-type="grid" class="h-100 place-content-start mt-16">
                <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
                  <vs-icon icon="chat_bubble_outline" color="#ffffff" size="14px"></vs-icon> 
                  <span class="posty-theme__showcase--icon-text ml-4">{{ posts[0].commentCount }}</span>
                  <vs-icon icon="schedule" color="#ffffff" size="14px" class="ml-16"></vs-icon> 
                  <span class="posty-theme__showcase--icon-text ml-4">{{ $moment(posts[0].publishedAt, "LL") }}</span>
                </vs-col>
              </vs-row>
            </div>
          </vs-card>
          <template v-if="posts && posts.length > 1">
            <vs-card :class="{ 'posty-theme__category--card': true, 'mb-20': index !== secondaryPost.length - 1, 'mb-0': index === secondaryPost.length - 1}" v-for="(post, index) in secondaryPost" :key="index" :style="'background-image: url(' + post.thumbnail + ')'">
              <div slot="media" class="posty-theme__category--card-header-container-secondary">
                <div class="posty-theme__category--card-header-secondary">
                  <vs-row>
                    <vs-col class="mb-8">
                      <Link :href="route('badaso.posty-theme.category', post.category.slug)">
                        <vs-chip color="#2E99A5" class="posty-theme__category--card-header-chip">{{ post.category.title }}</vs-chip>
                      </Link>
                    </vs-col>
                    <vs-col>
                      <Link :href="route('badaso.posty-theme.post', post.slug)">
                        <vue-clamp tag="h3" :max-lines="2" class="posty-theme__category--card-header-text">
                          {{ post.title }}
                        </vue-clamp>
                      </Link>
                    </vs-col>
                  </vs-row>
                </div>
              </div>
            </vs-card>
          </template>
        </vs-col>
      </vs-row>
    </template>
    
    <template v-else>
      <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
        <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)" class="posty-theme__category--title">{{ posts[0].category.title }}</Link>
        </vs-col>
        <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)" class="d-flex justify-content-center align-items-center text-black">
            <span class="posty-theme__category--see-all">LIHAT SEMUA</span>
            <vs-icon icon="chevron_right" size="24px"></vs-icon>
          </Link>
        </vs-col>

        <vs-col>
          <vs-row vs-justify="center" vs-align="flex-start" vs-type="flex">
            <vs-col vs-w="8" class="pr-30">
              <vs-card class="posty-theme__category--card mb-0">
                <div slot="media" class="posty-theme__category--card-header-container">
                  <Link :href="route('badaso.posty-theme.post', posts[0].slug)">
                    <img-overlay :src="posts[0].thumbnail" class="pointer overlay__rounded" />
                  </Link>
                  <div class="posty-theme__category--card-header z-20">
                    <vs-row>
                      <vs-col class="mb-8">
                        <Link :href="route('badaso.posty-theme.category', posts[0].category.slug)">
                          <vs-chip color="#2E99A5" class="posty-theme__category--card-header-chip">{{ posts[0].category.title }}</vs-chip>
                        </Link>
                      </vs-col>
                      <vs-col>
                        <Link :href="route('badaso.posty-theme.post', posts[0].slug)">
                          <h3 class="posty-theme__category--card-header-text">{{ posts[0].title }}</h3>
                        </Link>
                      </vs-col>
                    </vs-row>
                  </div>
                </div>
                <div class="posty-theme__category--card-content-container">
                  <div class="posty-theme__category--card-description line-clamp-3 mb-4" v-html="posts[0].content"></div>
                  <Link :href="route('badaso.posty-theme.post', posts[0].slug)" class="posty-theme__category--read-more">Baca Selengkapnya</Link>
                  <vs-row vs-type="grid" class="h-100 place-content-start mt-16">
                    <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
                      <vs-icon icon="chat_bubble_outline" color="#ffffff" size="24px"></vs-icon> 
                      <span class="posty-theme__showcase--icon-text ml-4">{{ posts[0].commentCount }}</span>
                      <vs-icon icon="schedule" color="#ffffff" size="24px" class="ml-16"></vs-icon> 
                      <span class="posty-theme__showcase--icon-text ml-4">{{ $moment(posts[0].publishedAt, "LL") }}</span>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col vs-w="4">
              <template v-if="posts && posts.length > 1">
                <vs-row vs-type="flex" vs-justify="center" vs-align="center">
                  <vs-col v-for="(post, index) in secondaryPost" :key="index" class="relative">
                    <vs-card class="posty-theme__category--card overlay__container" :style="'background-image: url(' + post.thumbnail + ')'">
                      <Link slot="media" class="posty-theme__category--card-header-container-secondary p-16 pointer" :href="route('badaso.posty-theme.post', post.slug)">
                        <div class="posty-theme__category--card-header-secondary z-20">
                          <vs-row>
                            <vs-col class="mb-8">
                              <Link :href="route('badaso.posty-theme.category', post.category.slug)">
                                <vs-chip color="#2E99A5" class="posty-theme__category--card-header-chip">{{ post.category.title }}</vs-chip>
                              </Link>
                            </vs-col>
                            <vs-col>
                              <Link :href="route('badaso.posty-theme.post', post.slug)">
                                <vue-clamp tag="h3" :max-lines="2" class="posty-theme__category--card-header-text">
                                  {{ post.title }}
                                </vue-clamp>
                              </Link>
                            </vs-col>
                          </vs-row>
                        </div>
                        <div class="overlay"></div>
                      </Link>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </template>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </template>
  </div>
</template>

<script>
import VueClamp from 'vue-clamp';
import { Link } from "@inertiajs/inertia-vue"
import ImgOverlay from './img-overlay.vue';

export default {
  name: "CategoryTypeOne",
  components: {
    VueClamp,
    Link,
    'img-overlay': ImgOverlay,
  },
  data:()=>({
    posts: [],
    loading: false,
  }),
  watch: {
    '$page.props.categories': 'fetchPosts'
  },
  computed: {
    secondaryPost() {
      return this.posts.slice(1, 4);
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      this.loading = true
      let category = this.$page.props.categories[0];
      this.$api.badasoPostPublic
        .fetchPosts({
          page: 1,
          limit: 10,
          category: category.slug
        })
        .then((res) => {
          this.posts = res.data.posts.data;
        })
        .catch((err) => {
          console.log('Error on fetching posts', err);
        });
      this.loading = false
    },
  }
}
</script>