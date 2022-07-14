<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="posty-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile() ? 'center' : 'flex-start'" :vs-align="$isMobile() ? 'center' : 'start'">
      <vs-col vs-xs="12" vs-sm="12" vs-lg="9" :class="{ 'pr-30': !$isMobile() }">
        <vs-row vs-justify="center" vs-align="start" vs-type="flex" v-if="post">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-breadcrumb separator="chevron_right" class="posty-theme__breadcrumb mb-8">
              <li>
                <Link :href="route('badaso.posty-theme.home')" class="pointer">Home</Link>
                <vs-icon icon="chevron_right" class="vs-breadcrum--separator"></vs-icon>
              </li>
              <li v-if="post.category">
                <Link :href="route('badaso.posty-theme.category', post.category.slug)" class="pointer">{{ post.category.title }}</Link>
                <vs-icon icon="chevron_right" class="vs-breadcrum--separator"></vs-icon>
              </li>
              <li>
                <Link :href="route('badaso.posty-theme.post', post.slug)" class="pointer">{{ post.title }}</Link>
              </li>
            </vs-breadcrumb>
          </vs-col>
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <h1 class="posty-theme__post--title">{{ post.title }}</h1>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="share" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 posty-theme__post--share">SHARE: </span>

            <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="ml-16">
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center" v-for="(socialMedia, index) in getSocialMedia" :key="index">
                <a :href="socialMedia.data.url.data.url" class="posty-theme__footer--social-media-icon">
                  <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
                </a>
              </vs-col>
            </vs-row>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="schedule" color="#4F4F4F" size="14px"></vs-icon> 
            <span class="posty-theme__showcase--icon-text ml-4">{{ $moment(post.publishedAt, "LL") }}</span>
            <vs-icon icon="edit" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
            <span class="posty-theme__showcase--icon-text ml-4">{{ post.user.name }}</span>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col>
            <img :src="post.thumbnail" class="posty-theme__post--thumbnail">
          </vs-col>
          <vs-col>
            <vs-card class="posty-theme__post--card mb-0 shadow">
              <p class="posty-theme__post--content" v-html="post.content"></p>
            </vs-card>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="local_offer" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 mr-16 posty-theme__post--tag">TAG: </span>
            <Link v-for="(tag, index) in post.tags" :key="index" :href="route('badaso.posty-theme.tag', tag.slug)">
              <vs-chip color="#2E99A5" class="posty-theme__post--tag-chip mr-8">{{ tag.title }}</vs-chip>
            </Link>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="share" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 posty-theme__post--share">SHARE: </span>

            <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="ml-16">
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center" v-for="(socialMedia, index) in getSocialMedia" :key="index">
                <a :href="socialMedia.data.url.data.url" class="posty-theme__footer--social-media-icon">
                  <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
                </a>
              </vs-col>
            </vs-row>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-align="center" vs-type="flex" v-if="!$isMobile()">
            <vs-card class="posty-theme__post--card-other mb-0 shadow py-24 px-40">
              <div class="flex justify-content-between align-items-center">
                <div class="posty-theme__post--card-other-title">Berita Lainnya</div>
                <vs-icon icon="shuffle"></vs-icon>
              </div>

              <vs-divider class="mb-15 mt-15" />

              <div class="flex gap-6">
                <vs-card class="posty-theme__post--card-other w-50 shadow-none" v-if="next">
                  <Link :href="route('badaso.posty-theme.post', next.slug)">
                    <div class="posty-theme__post--card-other-content rounded line-clamp-3" :style="`background-image: url('${next.thumbnail}')`">
                      {{ next.title }}
                    </div>
                  </Link>
                </vs-card>
                <vs-card class="posty-theme__post--card-other w-50 shadow-none" v-if="previous">
                  <Link :href="route('badaso.posty-theme.post', previous.slug)">
                    <div class="posty-theme__post--card-other-content rounded line-clamp-3" :style="`background-image: url('${previous.thumbnail}')`">
                      {{ previous.title }}
                    </div>
                  </Link>
                </vs-card>
              </div>
            </vs-card>
          </vs-col>
          <vs-divider color="transparent" class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-row vs-justify="flex-start" vs-align="center" vs-type="flex">
              <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-20">
                <vs-icon icon="chat_bubble_outline" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 posty-theme__post--comment">KOMENTAR: </span>
              </vs-col>
              <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
                <vs-tabs class="posty-theme__post--comment-card mb-30">
                  <vs-tab label="Lokal">
                    <vs-row vs-align="center">
                      <vs-col vs-w="6">
                        {{ post.commentCount }} Comments
                      </vs-col>
                      <vs-col vs-w="6">
                        <span style="float: right;">
                          Sort by
                          <vs-select v-model="sortby" width="80px" style="display: inline-block">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options" />
                          </vs-select>
                        </span>
                      </vs-col>
                      <vs-col>
                        <vs-divider />
                        <vs-row>
                          <vs-col vs-w="12">
                            <vs-textarea counter="500" v-model="comment" width="100%" />
                          </vs-col>
                          <vs-col vs-w="12" vs-justify="flex-end" vs-align="end" vs-type="flex" class="mt-8">
                            <vs-button size="small" type="relief" color="primary" @click="() => postComment()">Post Comment</vs-button>
                          </vs-col>
                        </vs-row>
                        <posty-theme-comment v-for="(comment, index) in commentsData" :key="index" :comments="comment" :postId="post.id" @input="insertNewComment" :sort="sortby"></posty-theme-comment>
                        <vs-button color="primary" type="flat" class="w-100" @click="() => fetchComment()" v-if="!isShowButton">Load more comments</vs-button>
                      </vs-col>
                    </vs-row>
                  </vs-tab>
                </vs-tabs>
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12" vs-lg="3" class="sticky">
        <popular-post class="mb-30"></popular-post>
        <newest-post class="mb-30"></newest-post>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import NewestPost from './../components/newest';
import PopularPost from './../components/popular';
import defaultLayout from "../layouts/default";
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "PostyThemePost",
  layout: defaultLayout,
  components: {
    NewestPost,
    PopularPost,
    Link
  },
  data:()=>({
    slug: "",
    loading: false,
    post: {},
    comments: {},
    commentsData: [],
    sortby: "desc",
    page: 1,
    options: [
      { text: "Newest", value: "desc" },
      { text: "Oldest", value: "asc" },
    ],
    comment: "",
    next: null,
    previous: null
  }),
  computed: {
    isShowButton() {
      return this.comments.currentPage >= this.comments.lastPage;
    },
    getSocialMedia() {
      return this.$store.state.socialMedia
    }
  },
  created() {
    this.fetchPost();
    this.fetchComment();
  },
  watch: {
    'sortby': {
      handler(val, oldVal) {
        this.page = 1;
        this.comments = {};
        this.commentsData = [];
        this.fetchComment();
      }
    }
  },
  methods: {
    fetchPost() {
      this.loading = true
      this.$api.badasoPostPublic
        .fetchPost({
          slug: this.$page.props.slug
        })
        .then((res) => {
          this.post = res.data.post;
          this.next = res.data.next;
          this.previous = res.data.previous;
          this.loading = false;
        })
        .catch((err) => {
          console.log('Error on fetching post', err);
          this.loading = false
        });
    },
    insertNewComment(event) {
      if (this.sortby === "desc") {
        this.commentsData.unshift(event)
      } else {
        this.commentsData.push(event)
      }
    },
    fetchComment() {
      this.$api.badasoPostPublic
        .fetchComment({
          slug: this.$page.props.slug,
          page: this.page,
          perPage: 4,
          sort: this.sortby
        })
        .then((res) => {
          this.comments = res.data.comments;
          this.commentsData.push(...res.data.comments.data);
          this.page++;
        })
        .catch((err) => {
          console.log('Error on fetching post', err);
        });
    },
    postComment() {
      this.$api.badasoPostPublic
        .addComment({
          postId: this.post.id,
          content: this.comment,
        })
        .then((res) => {
          this.comment = "";
          res.data.children = [];
          this.insertNewComment(res.data)
        })
        .catch((err) => {
          this.comment = ""
          console.log('Error on fetching post', err);
        });
    }
  }
}
</script>