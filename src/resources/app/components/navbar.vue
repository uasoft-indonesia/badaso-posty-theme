<template>
  <nav>
    <vs-row class="posty-theme__navbar" vs-justify="center" vs-align="center" vs-type="flex">
      <vs-col vs-xs="2" vs-sm="2" vs-lg="1" class="posty-theme__navbar--button" vs-justify="center" vs-align="center" vs-type="flex">
        <vs-icon icon="menu" size="24px" @click="() => open = !open"></vs-icon>
      </vs-col>
      <vs-col vs-xs="8" vs-sm="8" vs-lg="7" class="posty-theme__navbar--title" vs-justify="start" vs-align="center" vs-type="flex">
        <Link :href="route('badaso.posty-theme.home')" :class="{ 'ml-16': $isMobile(), 'ml-32': !$isMobile() }">{{ getTitle }}</Link>
      </vs-col>
      <vs-col vs-xs="2" vs-sm="2" vs-lg="4" class="posty-theme__navbar--search" vs-justify="center" vs-align="center" vs-type="flex">
        <template v-if="$isMobile()">
          <vs-icon icon="search" size="24px" @click="() => overlay = !overlay"></vs-icon>
        </template>
        <template v-else>
          <vs-row vs-justify="center" vs-align="center" vs-type="flex" class="posty-theme__navbar--icon">
            <vs-col vs-w="2" vs-align="center" vs-type="flex" vs-justify="center" v-for="(socialMedia, index) in getSocialMedia" :key="index">
              <a :href="socialMedia.data.url.data.url" class="posty-theme__footer--social-media-icon">
                <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
              </a>
            </vs-col>
          </vs-row>
          <span class="posty-theme__navbar--search-text ml-16">PENCARIAN</span>
          <vs-icon icon="search" size="32px" class="ml-16 mr-40" @click="() => overlay = !overlay"></vs-icon>
        </template>
      </vs-col>
    </vs-row>
    <vs-row class="mb-30 posty-theme__menu" vs-justify="start" vs-align="center" vs-type="flex" :class="{ open: open }">
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="posty-theme__menu--item"><Link :href="route('badaso.posty-theme.home')">HOME</Link></vs-col>
      <vs-col vs-xs="4" vs-sm="4" vs-lg="2" class="posty-theme__menu--item" v-for="(category, index) in getCategories" :key="index"><Link :href="route('badaso.posty-theme.category', category.slug)">{{ category.title }}</Link></vs-col>
    </vs-row>

    <div class="posty-theme__search--overlay" v-if="overlay">
      <template v-if="$isMobile()">
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="posty-theme__search--container">
          <vs-col>
            <vs-input icon="search" placeholder="Search" v-model="search" class="posty-theme__search--input" @keyup.enter="() => getSearchedPosts()" />
            <div class="posty-theme__search--button mt-16">
              <vs-button color="#2E99A5" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
              <vs-button color="rgba(137, 137, 137)" type="relief" @click="overlay = false; search = ''">Close</vs-button>
            </div>
          </vs-col>
        </vs-row>
      </template>
      <template v-else>
        <vs-row vs-justify="start" vs-align="center" vs-type="flex" class="posty-theme__search--container">
          <vs-col vs-w="12" vs-align="center" vs-type="flex" vs-justify="center">
            <div style="display: inline-flex;">
              <vs-input icon="search" placeholder="Search" v-model="search" :autofocus="overlay" class="posty-theme__search--input" :size="$isMobile() ? 'small' : 'large'" @keyup.enter="() => getSearchedPosts()" />
              <vs-button color="#2E99A5" class="ml-16" type="relief" @click="() => getSearchedPosts()">Search</vs-button>
            </div>
            <div class="posty-theme__search--close">
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
import { Link } from "@inertiajs/inertia-vue"

export default {
  name: "PostyThemeNavbar",
  components: {
    Link
  },
  data:()=>({
    open: false,
    overlay: false,
    search: "",
  }),
  computed: {
    getCategories() {
      return this.$page.props.categories
    },
    getSocialMedia() {
      return JSON.parse(this.$page.props.socialMedia.value)
    },
    getTitle() {
      return this.$page.props.appName
    }
  },
  methods: {
    getSearchedPosts() {
      this.overlay = false;
      
      if (this.search !== null || this.search !== "") {
        this.$inertia.visit(this.route('badaso.posty-theme.search', this.search))
      }

      this.search = ""
    }
  }
}
</script>