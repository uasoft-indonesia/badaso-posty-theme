<template>
  <nav>
    <vs-row class="simple-theme__navbar" vs-justify="center" vs-align="center" vs-type="flex">
      <vs-col vs-xs="2" vs-sm="2" vs-lg="1" class="simple-theme__navbar--button" vs-justify="center" vs-align="center" vs-type="flex">
        <vs-icon icon="menu" size="24px" @click="() => open = !open"></vs-icon>
      </vs-col>
      <vs-col vs-xs="8" vs-sm="8" vs-lg="7" class="simple-theme__navbar--title" vs-justify="start" vs-align="center" vs-type="flex">
        <a href="/" :class="{ 'ml-16': $isMobile, 'ml-32': !$isMobile }">{{ title }}</a>
      </vs-col>
      <vs-col vs-xs="2" vs-sm="2" vs-lg="4" class="simple-theme__navbar--search" vs-justify="center" vs-align="center" vs-type="flex">
        <template v-if="$isMobile">
          <vs-icon icon="search" size="24px" @click="() => overlay = !overlay"></vs-icon>
        </template>
        <template v-else>
          <vs-row vs-justify="center" vs-align="center" vs-type="flex" class="simple-theme__navbar--icon">
            <vs-col vs-w="2" v-if="socialMedia.facebook" vs-align="center" vs-type="flex" vs-justify="center">
              <a :href="socialMedia.facebook">
                <img src="./../assets/images/facebook.svg" alt="Facebook's Icon" sizes="21px">
              </a>
            </vs-col>
            <vs-col vs-w="2" v-if="socialMedia.instagram" vs-align="center" vs-type="flex" vs-justify="center">
              <a :href="socialMedia.instagram">
                <img src="./../assets/images/instagram.svg" alt="Facebook's Icon" sizes="21px">
              </a>
            </vs-col>
            <vs-col vs-w="2" v-if="socialMedia.twitter" vs-align="center" vs-type="flex" vs-justify="center">
              <a :href="socialMedia.twitter">
                <img src="./../assets/images/twitter.svg" alt="Facebook's Icon" sizes="21px">
              </a>
            </vs-col>
            <vs-col vs-w="2" v-if="socialMedia.telegram" vs-align="center" vs-type="flex" vs-justify="center">
              <a :href="socialMedia.telegram">
                <img src="./../assets/images/telegram.svg" alt="Facebook's Icon" sizes="21px">
              </a>
            </vs-col>
            <vs-col vs-w="2" v-if="socialMedia.youtube" vs-align="center" vs-type="flex" vs-justify="center">
              <a :href="socialMedia.youtube">
                <img src="./../assets/images/youtube.svg" alt="Facebook's Icon" sizes="21px">
              </a>
            </vs-col>
          </vs-row>
          <span class="simple-theme__navbar--search-text ml-16">PENCARIAN</span>
          <vs-icon icon="search" size="32px" class="ml-16 mr-40" @click="() => overlay = !overlay"></vs-icon>
        </template>
      </vs-col>
    </vs-row>
    <vs-row class="mb-30 simple-theme__menu" vs-justify="start" vs-align="center" vs-type="flex" :class="{ open: open }">
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="simple-theme__menu--item"><a href="/">HOME</a></vs-col>
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="simple-theme__menu--item" v-for="(category, index) in getCategories" :key="index"><a :href="'/category/' + category.slug">{{ category.title }}</a></vs-col>
    </vs-row>

    <div class="simple-theme__search--overlay" v-if="overlay">
      <template v-if="$isMobile">
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="simple-theme__search--container">
          <vs-col>
            <vs-input icon="search" placeholder="Search" v-model="search" class="simple-theme__search--input" @keyup.enter="() => getSearchedPosts()" />
            <div class="simple-theme__search--button mt-16">
              <vs-button color="#2E99A5" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
              <vs-button color="rgba(137, 137, 137)" type="relief" @click="overlay = false; search = ''">Close</vs-button>
            </div>
          </vs-col>
        </vs-row>
      </template>
      <template v-else>
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="simple-theme__search--container">
          <vs-col vs-w="12" vs-align="center" vs-type="flex" vs-justify="center">
            <div style="display: inline-flex;">
              <vs-input icon="search" placeholder="Search" v-model="search" class="simple-theme__search--input" :size="$isMobile ? 'small' : 'large'" @keyup.enter="() => getSearchedPosts()" />
              <vs-button color="#2E99A5" class="ml-16" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
            </div>
            <div class="simple-theme__search--close">
              <vs-icon icon="close" color="white" size="38px" @click="overlay = false; search = ''"></vs-icon>
            </div>
          </vs-col>
        </vs-row>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SimpleThemeNavbar",
  data:()=>({
    title: "",
    open: false,
    overlay: false,
    search: "",
    socialMedia: {
      facebook: null,
      instagram: null,
      twitter: null,
      telegram: null,
      youtube: null,
    }
  }),
  beforeMount() {
    this.title = process.env.MIX_NAVBAR_TITLE;
    this.socialMedia.facebook = process.env.MIX_FACEBOOK_URL;
    this.socialMedia.instagram = process.env.MIX_INSTAGRAM_URL;
    this.socialMedia.twitter = process.env.MIX_TWITTER_URL;
    this.socialMedia.telegram = process.env.MIX_TELEGRAM_URL;
    this.socialMedia.youtube = process.env.MIX_YOUTUBE_URL;
  },
  computed: {
    getCategories() {
      return this.$store.state.simpleTheme.categories
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