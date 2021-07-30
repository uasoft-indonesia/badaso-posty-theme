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
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center">
                <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9103 11.8125L11.4935 8.01199H7.84682V5.54572C7.84682 4.50598 8.35624 3.49248 9.98948 3.49248H11.6473V0.256758C11.6473 0.256758 10.1429 0 8.70446 0C5.70129 0 3.73829 1.82027 3.73829 5.11547V8.01199H0.400024V11.8125H3.73829V21H7.84682V11.8125H10.9103Z" fill="#4F4F4F"/>
                </svg>
              </vs-col>
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.64194 5.15789C7.03335 5.15789 4.92925 7.26199 4.92925 9.87058C4.92925 12.4792 7.03335 14.5833 9.64194 14.5833C12.2505 14.5833 14.3546 12.4792 14.3546 9.87058C14.3546 7.26199 12.2505 5.15789 9.64194 5.15789ZM9.64194 12.9345C7.9562 12.9345 6.57808 11.5604 6.57808 9.87058C6.57808 8.18074 7.9521 6.80672 9.64194 6.80672C11.3318 6.80672 12.7058 8.18074 12.7058 9.87058C12.7058 11.5604 11.3277 12.9345 9.64194 12.9345ZM15.6466 4.96512C15.6466 5.57625 15.1544 6.06433 14.5474 6.06433C13.9363 6.06433 13.4482 5.57215 13.4482 4.96512C13.4482 4.35808 13.9404 3.8659 14.5474 3.8659C15.1544 3.8659 15.6466 4.35808 15.6466 4.96512ZM18.7679 6.08074C18.6982 4.60828 18.3619 3.30398 17.2832 2.22937C16.2085 1.15476 14.9042 0.818436 13.4318 0.744608C11.9142 0.658475 7.36558 0.658475 5.848 0.744608C4.37964 0.814334 3.07534 1.15066 1.99663 2.22527C0.91792 3.29988 0.585693 4.60418 0.511865 6.07664C0.425732 7.59422 0.425732 12.1428 0.511865 13.6604C0.581592 15.1329 0.91792 16.4372 1.99663 17.5118C3.07534 18.5864 4.37554 18.9227 5.848 18.9966C7.36558 19.0827 11.9142 19.0827 13.4318 18.9966C14.9042 18.9268 16.2085 18.5905 17.2832 17.5118C18.3578 16.4372 18.6941 15.1329 18.7679 13.6604C18.8541 12.1428 18.8541 7.59832 18.7679 6.08074ZM16.8074 15.2887C16.4875 16.0927 15.8681 16.712 15.0601 17.036C13.8501 17.5159 10.9791 17.4052 9.64194 17.4052C8.30483 17.4052 5.42964 17.5118 4.22378 17.036C3.41987 16.7161 2.80054 16.0968 2.47651 15.2887C1.99663 14.0788 2.10737 11.2077 2.10737 9.87058C2.10737 8.53348 2.00073 5.65828 2.47651 4.45242C2.79644 3.64851 3.41577 3.02918 4.22378 2.70515C5.43374 2.22527 8.30483 2.33601 9.64194 2.33601C10.9791 2.33601 13.8542 2.22937 15.0601 2.70515C15.864 3.02508 16.4833 3.64441 16.8074 4.45242C17.2873 5.66238 17.1765 8.53348 17.1765 9.87058C17.1765 11.2077 17.2873 14.0829 16.8074 15.2887Z" fill="#4F4F4F"/>
                </svg>
              </vs-col>
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4739 4.93062C19.4872 5.11716 19.4872 5.30374 19.4872 5.49028C19.4872 11.18 15.1567 17.7358 7.2417 17.7358C4.80324 17.7358 2.53803 17.0296 0.632568 15.8037C0.979027 15.8437 1.31212 15.857 1.6719 15.857C3.68393 15.857 5.53611 15.1775 7.01517 14.0182C5.12304 13.9782 3.53738 12.739 2.99105 11.0334C3.25757 11.0734 3.52405 11.1 3.8039 11.1C4.1903 11.1 4.57675 11.0467 4.9365 10.9535C2.96443 10.5537 1.48532 8.82149 1.48532 6.72948V6.6762C2.05827 6.996 2.72457 7.19587 3.43074 7.22249C2.27147 6.44963 1.51198 5.13049 1.51198 3.6381C1.51198 2.83862 1.72514 2.10575 2.09826 1.46615C4.21692 4.07782 7.40158 5.78338 10.9726 5.96996C10.906 5.65016 10.866 5.31707 10.866 4.98394C10.866 2.61209 12.7848 0.680008 15.1699 0.680008C16.4091 0.680008 17.5284 1.19968 18.3146 2.03914C19.2873 1.8526 20.22 1.49281 21.0462 0.999807C20.7264 1.99919 20.0468 2.83866 19.1541 3.37162C20.0202 3.27839 20.8597 3.03849 21.6325 2.7054C21.0463 3.55816 20.3134 4.31764 19.4739 4.93062Z" fill="#4F4F4F"/>
                </svg>
              </vs-col>
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6044 0C4.98523 0 0.432495 4.55273 0.432495 10.1719C0.432495 15.791 4.98523 20.3438 10.6044 20.3438C16.2235 20.3438 20.7762 15.791 20.7762 10.1719C20.7762 4.55273 16.2235 0 10.6044 0ZM15.6001 6.96855L13.9307 14.8354C13.8077 15.3932 13.4755 15.5285 13.012 15.266L10.469 13.3916L9.24265 14.5729C9.1073 14.7082 8.99246 14.823 8.72996 14.823L8.91042 12.235L13.6231 7.97754C13.8282 7.79707 13.578 7.69453 13.3073 7.875L7.48308 11.5418L4.97292 10.7584C4.42742 10.5861 4.41511 10.2129 5.08777 9.95039L14.8946 6.16875C15.3499 6.00469 15.7477 6.27949 15.6001 6.96855Z" fill="#4F4F4F"/>
                </svg>
              </vs-col>
              <vs-col vs-xs="2" vs-sm="2" vs-lg="1" vs-align="center" vs-type="flex" vs-justify="center">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0714 2.55053C19.8424 1.68829 19.1677 1.00921 18.311 0.778761C16.7583 0.360001 10.5319 0.360001 10.5319 0.360001C10.5319 0.360001 4.30551 0.360001 2.75271 0.778761C1.89605 1.00925 1.22135 1.68829 0.992356 2.55053C0.576294 4.11339 0.576294 7.37415 0.576294 7.37415C0.576294 7.37415 0.576294 10.6349 0.992356 12.1978C1.22135 13.06 1.89605 13.7108 2.75271 13.9412C4.30551 14.36 10.5319 14.36 10.5319 14.36C10.5319 14.36 16.7582 14.36 18.311 13.9412C19.1677 13.7108 19.8424 13.06 20.0714 12.1978C20.4874 10.6349 20.4874 7.37415 20.4874 7.37415C20.4874 7.37415 20.4874 4.11339 20.0714 2.55053ZM8.49548 10.3347V4.41362L13.6995 7.37422L8.49548 10.3347Z" fill="#4F4F4F"/>
                </svg>
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
            <img :src="getMediaBaseUrl + post.thumbnail" class="post-theme__post--thumbnail">
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
    title: "",
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
    getMediaBaseUrl() {
      return this.$store.state.meta.mediaBaseUrl || '/storage/'
    },
  },
  created() {
    this.slug = window.location.pathname.split("/").pop();
    this.fetchPost();
    this.fetchComment();
    this.title = process.env.MIX_NAVBAR_TITLE;
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
      this.$api.badasoPost
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
    setSession(title) {
      document.cookie = "title=" + title;
    },
    insertNewComment(event) {
      if (this.sortby === "desc") {
        this.commentsData.unshift(event)
      } else {
        this.commentsData.push(event)
      }
    },
    fetchComment() {
      this.$api.badasoPost
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
      this.$api.badasoPost
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