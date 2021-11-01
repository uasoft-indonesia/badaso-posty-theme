<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="post-theme__loading" size="large"></vs-icon>
  </div>
  <div v-else>
    <template v-if="$isMobile()">
      <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
        <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.post-theme.category', posts[0].category.slug)" class="post-theme__category-two--title">{{ posts[0].category.title }}</Link>
        </vs-col>
        <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.post-theme.category', posts[0].category.slug)" class="d-flex justify-content-center align-items-center text-black"><span class="post-theme__category-two--see-all">LIHAT SEMUA</span> <vs-icon icon="chevron_right" size="12px"></vs-icon></Link>
        </vs-col>
        <vs-col>
          <vs-card class="post-theme__category-two--card mb-20">
            <div slot="media" class="post-theme__category-two--card-header-container">
              <Link :href="route('badaso.post-theme.post', posts[0].slug)">
                <img :src="posts[0].thumbnail">
              </Link>
              <div class="post-theme__category-two--card-header">
                <vs-row>
                  <vs-col class="mb-8">
                    <Link :href="route('badaso.post-theme.category', posts[0].category.slug)">
                      <vs-chip color="#2E99A5" class="post-theme__category-two--card-header-chip">{{ posts[0].category.title }}</vs-chip>
                    </Link>
                  </vs-col>
                  <vs-col>
                    <Link :href="route('badaso.post-theme.post', posts[0].slug)" class="post-theme__category-two--card-header-title">
                      {{ posts[0].title }}
                    </Link>
                  </vs-col>
                </vs-row>
              </div>
            </div>
            <div class="post-theme__category-two--card-content-container">
              <vue-clamp :max-lines="5" class="post-theme__category-two--card-description mb-16">
                {{ posts[0].summary }}
                <template slot="after">
                  <Link :href="route('badaso.post-theme.post', posts[0].slug)" class="post-theme__category-two--read-more">
                    Baca Selengkapnya
                  </Link>
                </template>
              </vue-clamp>
              <vs-row vs-type="grid" class="h-100 place-content-start">
                <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
                  <vs-icon icon="chat_bubble_outline" color="#4F4F4F" size="14px"></vs-icon> 
                  <span class="post-theme__showcase--icon-text ml-4">{{ posts[0].commentCount }}</span>
                  <vs-icon icon="schedule" size="14px" color="#4F4F4F" class="ml-16"></vs-icon> 
                  <span class="post-theme__showcase--icon-text ml-4">{{ $moment(posts[0].publishedAt, "LL") }}</span>
                </vs-col>
              </vs-row>
            </div>
          </vs-card>
          
          <template v-if="posts && posts.length > 1">
            <vs-card :class="{ 'post-theme__category-two--card': true, 'mb-20': index !== secondaryPost.length - 1, 'mb-0': index === secondaryPost.length - 1}" v-for="(post, index) in secondaryPost" :key="index">
              <vs-row vs-justify="center" vs-align="center" class="h-100">
                <vs-col>
                  <Link :href="route('badaso.post-theme.post', post.slug)">
                    <vue-clamp class="post-theme__category-two--card-header-text p-16" :max-lines="2">{{ post.title }}</vue-clamp>
                  </Link>
                </vs-col>
              </vs-row>
            </vs-card>
          </template>
        </vs-col>
      </vs-row>
    </template>

    <template v-else>
      <vs-row vs-justify="center" vs-align="flex-end" vs-type="flex" v-if="posts && posts.length > 0">
        <vs-col vs-w="6" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.post-theme.category', posts[0].category.slug)" class="post-theme__category-two--title">
            {{ posts[0].category.title }}
          </Link>
        </vs-col>
        <vs-col vs-w="6" vs-justify="flex-end" vs-align="center" vs-type="flex" class="mb-8">
          <Link :href="route('badaso.post-theme.category', posts[0].category.slug)" class="d-flex justify-content-center align-items-center text-black">
            <span class="post-theme__category-two--see-all">LIHAT SEMUA</span>
            <vs-icon icon="chevron_right" size="12px"></vs-icon>
          </Link>
        </vs-col>
        <vs-col>
          <vs-row vs-justify="center" vs-align="flex-start" vs-type="flex">
            <vs-col vs-w="6" class="pr-30">
              <vs-card class="post-theme__category-two--card mb-0">
                <div slot="media" class="post-theme__category-two--card-header-container">
                  <Link :href="route('badaso.post-theme.post', posts[0].slug)">
                    <img :src="posts[0].thumbnail" class="pointer">
                  </Link>
                  <div class="post-theme__category-two--card-header">
                    <vs-row>
                      <vs-col class="mb-8">
                        <Link :href="route('badaso.post-theme.category', posts[0].category.slug)">
                          <vs-chip color="#2E99A5" class="post-theme__category-two--card-header-chip">{{ posts[0].category.title }}</vs-chip>
                        </Link>
                      </vs-col>
                      <vs-col>
                        <Link :href="route('badaso.post-theme.post', posts[0].slug)">
                          <h3 class="post-theme__category-two--card-header-title">
                            {{ posts[0].title }}
                          </h3>
                        </Link>
                      </vs-col>
                    </vs-row>
                  </div>
                </div>
                <div class="post-theme__category-two--card-content-container">
                  <vue-clamp :max-lines="5" class="post-theme__category-two--card-description mb-16">
                    {{ posts[0].summary }}
                    <template slot="after">
                      <Link :href="route('badaso.post-theme.post', posts[0].slug)" class="post-theme__category-two--read-more">
                        Baca Selengkapnya
                      </Link>
                    </template>
                  </vue-clamp>
                  <vs-row vs-type="grid" class="h-100 place-content-start">
                    <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-8">
                      <vs-icon icon="chat_bubble_outline" color="#4F4F4F" size="14px"></vs-icon> 
                      <span class="post-theme__showcase--icon-text ml-4">{{ posts[0].commentCount }}</span>
                      <vs-icon icon="schedule" color="#4F4F4F" size="14px" class="ml-16"></vs-icon> 
                      <span class="post-theme__showcase--icon-text ml-4">{{ $moment(posts[0].publishedAt, "LL") }}</span>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col vs-w="6">
              <template v-if="posts && posts.length > 1">
                <vs-row vs-type="flex" vs-justify="center" vs-align="center">
                  <vs-col v-for="(post, index) in secondaryPost" :key="index">
                    <vs-card :class="{ 'post-theme__category-two--card': true, 'mb-20': index !== secondaryPost.length - 1, 'mb-0': index === secondaryPost.length - 1}">
                      <Link slot="media" class="post-theme__category-two--card-header-container-secondary p-16 pointer" :href="route('badaso.post-theme.post', post.slug)">
                        <div class="post-theme__category-two--card-header-secondary">
                          <vs-row>
                            <vs-col>
                              <Link :href="route('badaso.post-theme.post', post.slug)">
                                <vue-clamp tag="h3" :max-lines="2" class="post-theme__category-two--card-header-text">
                                  {{ post.title }}
                                </vue-clamp>
                              </Link>
                            </vs-col>
                          </vs-row>
                        </div>
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

export default {
  name: "CategoryTypeTwo",
  components: {
    VueClamp,
    Link
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
      let category = this.$page.props.categories[1]
      if (category) {
        this.$api.badasoPostPublic
          .fetchPosts({
            page: 1,
            limit: 10,
            category: category.slug
          })
          .then((res) => {
            this.posts = res.data.posts.data
          })
          .catch((err) => {
            console.log('Error on fetching posts', err);
          });
      }
      this.loading = false
    },
  }
}
</script>