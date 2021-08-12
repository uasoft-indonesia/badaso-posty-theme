<template>
  <div v-if="loading" style="display: block; text-align: center">
    <vs-icon icon="refresh" class="post-theme__loading mb-30" size="large"></vs-icon>
  </div>
  <div v-else>
    <vs-row vs-type="flex" :vs-justify="$isMobile ? 'center' : 'flex-start'" :vs-align="$isMobile ? 'center' : 'start'">
      <vs-col vs-xs="12" vs-sm="12" vs-lg="9" :class="{ 'pr-30': !$isMobile }">
        <vs-row vs-justify="center" vs-align="start" vs-type="flex" v-if="post">
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-breadcrumb separator="chevron_right" class="post-theme__breadcrumb mb-8">
              <li><span @click="$to('home')" class="pointer">Home</span><vs-icon icon="chevron_right" class="vs-breadcrum--separator"></vs-icon></li>
              <li v-if="post.category"><span @click="$to('category', post.category.slug)" class="pointer">{{ post.category.title }}</span><vs-icon icon="chevron_right" class="vs-breadcrum--separator"></vs-icon></li>
              <li><span @click="$to('post', post.slug)" class="pointer">{{ post.title }}</span></li>
            </vs-breadcrumb>
          </vs-col>
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <h1 class="post-theme__post--title">{{ post.title }}</h1>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="share" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 post-theme__post--share">SHARE: </span>

            <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="ml-16">
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center" v-for="(socialMedia, index) in getSocialMedia" :key="index">
                <a :href="socialMedia.data.url.data.url" class="post-theme__footer--social-media-icon">
                  <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
                </a>
              </vs-col>
            </vs-row>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="schedule" color="#4F4F4F" size="14px"></vs-icon> 
            <span class="post-theme__showcase--icon-text ml-4">{{ $moment(post.publishedAt, "LL") }}</span>
            <vs-icon icon="edit" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
            <span class="post-theme__showcase--icon-text ml-4">{{ post.user.name }}</span>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col>
            <img :src="post.thumbnail" class="post-theme__post--thumbnail">
          </vs-col>
          <vs-col>
            <vs-card class="post-theme__post--card mb-0">
              <p class="post-theme__post--content" v-html="post.content"></p>
            </vs-card>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-icon icon="share" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 mr-16 post-theme__post--tag">TAG: </span>
            <span v-for="(tag, index) in post.tags" :key="index" @click="$to('tag', tag.slug)">
              <vs-chip color="#2E99A5" class="post-theme__post--tag-chip mr-8">{{ tag.title }}</vs-chip>
            </span>
          </vs-col>
          <vs-divider class="mb-16 mt-16" />
          <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
            <vs-row vs-justify="flex-start" vs-align="center" vs-type="flex">
              <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex" class="mb-20">
                <vs-icon icon="chat_bubble_outline" size="18px" color="#4F4F4F"></vs-icon> <span class="ml-4 post-theme__post--comment">KOMENTAR: </span>
              </vs-col>
              <vs-col vs-w="12" vs-justify="flex-start" vs-align="center" vs-type="flex">
                <vs-tabs class="post-theme__post--comment-card mb-30">
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
                        <post-theme-comment v-for="(comment, index) in commentsData" :key="index" :comments="comment" :postId="post.id" @input="insertNewComment" :sort="sortby"></post-theme-comment>
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
import NewestPost from './newest';
import PopularPost from './popular';
export default {
  name: "PostThemePost",
  components: {
    NewestPost,
    PopularPost
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
    comment: ""
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
    this.slug = window.location.pathname.split("/").pop();
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
      this.$api.badasoBlog
        .fetchPost({
          slug: this.slug
        })
        .then((res) => {
          this.post = res.data.post;
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
      this.$api.badasoBlog
        .fetchComment({
          slug: this.slug,
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
      this.$api.badasoBlog
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