<template>
  <nav>
    <vs-row class="post-theme__navbar" vs-justify="center" vs-align="center" vs-type="flex">
      <vs-col vs-xs="2" vs-sm="2" vs-lg="1" class="post-theme__navbar--button" vs-justify="center" vs-align="center" vs-type="flex">
        <vs-icon icon="menu" size="24px" @click="() => open = !open"></vs-icon>
      </vs-col>
      <vs-col vs-xs="8" vs-sm="8" vs-lg="7" class="post-theme__navbar--title" vs-justify="start" vs-align="center" vs-type="flex">
        <div @click="$to('home')" :class="{ 'ml-16': $isMobile, 'ml-32': !$isMobile }">{{ getTitle  }}</div>
      </vs-col>
      <vs-col vs-xs="2" vs-sm="2" vs-lg="4" class="post-theme__navbar--search" vs-justify="center" vs-align="center" vs-type="flex">
        <template v-if="$isMobile">
          <vs-icon icon="search" size="24px" @click="() => overlay = !overlay"></vs-icon>
        </template>
        <template v-else>
          <vs-row vs-justify="center" vs-align="center" vs-type="flex" class="post-theme__navbar--icon">
            <vs-col vs-w="2" vs-align="center" vs-type="flex" vs-justify="center" v-for="(socialMedia, index) in getSocialMedia" :key="index">
              <a :href="socialMedia.data.url.data.url" class="post-theme__footer--social-media-icon">
                <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
              </a>
            </vs-col>
          </vs-row>
          <span class="post-theme__navbar--search-text ml-16">PENCARIAN</span>
          <vs-icon icon="search" size="32px" class="ml-16 mr-40" @click="() => overlay = !overlay"></vs-icon>
        </template>
      </vs-col>
    </vs-row>
    <vs-row class="mb-30 post-theme__menu" vs-justify="start" vs-align="center" vs-type="flex" :class="{ open: open }">
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="post-theme__menu--item"><div @click="$to('home')">HOME</div></vs-col>
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="post-theme__menu--item" v-for="(category, index) in getCategories" :key="index"><div @click="$to('category', category.slug)">{{ category.title }}</div></vs-col>
    </vs-row>

    <div class="post-theme__search--overlay" v-if="overlay">
      <template v-if="$isMobile">
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="post-theme__search--container">
          <vs-col>
            <vs-input icon="search" placeholder="Search" v-model="search" class="post-theme__search--input" @keyup.enter="() => getSearchedPosts()" />
            <div class="post-theme__search--button mt-16">
              <vs-button color="#2E99A5" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
              <vs-button color="rgba(137, 137, 137)" type="relief" @click="overlay = false; search = ''">Close</vs-button>
            </div>
          </vs-col>
        </vs-row>
      </template>
      <template v-else>
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="post-theme__search--container">
          <vs-col vs-w="12" vs-align="center" vs-type="flex" vs-justify="center">
            <div style="display: inline-flex;">
              <vs-input icon="search" placeholder="Search" v-model="search" :autofocus="overlay" class="post-theme__search--input" :size="$isMobile ? 'small' : 'large'" @keyup.enter="() => getSearchedPosts()" />
              <vs-button color="#2E99A5" class="ml-16" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
            </div>
            <div class="post-theme__search--close">
              <vs-icon icon="close" color="white" size="38px" @click="overlay = false; search = ''"></vs-icon>
            </div>
          </vs-col>
        </vs-row>
      </template>
    </div>
  </nav>
</template>

<script>
import _ from "lodash"

export default {
  name: "PostThemeNavbar",
  data:()=>({
    open: false,
    overlay: false,
    search: "",
  }),
  beforeMount() {
    this.$store.dispatch("fetchSocialMedia");
  },
  computed: {
    getCategories() {
      return this.$store.state.categories
    },
    getSocialMedia() {
      return this.$store.state.socialMedia
    },
    getTitle() {
      return _.filter(this.$store.state.configurations, ["key", "postThemeNavbarTitle"]).pop().value
    }
  },
  methods: {
    getSearchedPosts() {
      this.overlay = false;
      
      if (this.search !== null || this.search !== "") {
        this.$to('search', this.search)
      }

      this.search = ""
    }
  }
}
</script>