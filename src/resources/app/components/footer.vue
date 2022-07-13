<template>
  <footer class="posty-theme__footer">
    <vs-card class="posty-theme__footer--card mb-0 w-100">
      <vs-row vs-justify="space-around" vs-align="flex-start">
        <vs-col class="mb-24" vs-xs="12" vs-sm="12" vs-lg="4">
          <h3 class="posty-theme__footer--title mb-4">{{ getTitle }}</h3>
          <span class="posty-theme__footer--copyright">© 2021 Post Theme - Badaso<br>All rights reserved.</span>
        </vs-col>
        <vs-col class="mb-16" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="posty-theme__footer--links mb-8">Quick Links</h3>
          <ul class="posty-theme__footer--links-items">
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Services</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">About</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">News</a></li>
            <li class="posty-theme__footer--links-item"><a href="#">Post</a></li>
          </ul>
        </vs-col>
        <vs-col class="mb-16" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="posty-theme__footer--links mb-8">Menu</h3>
          <ul class="posty-theme__footer--links-items">
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Our Service</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Our Team</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Our News</a></li>
            <li class="posty-theme__footer--links-item"><a href="#">Our Post</a></li>
          </ul>
        </vs-col>
        <vs-col class="mb-24" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="posty-theme__footer--links mb-8">About Us</h3>
          <ul class="posty-theme__footer--links-items">
            <li class="posty-theme__footer--links-item mr-4"><a href="#">About Us</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Testimonials</a></li>
            <li class="posty-theme__footer--links-item mr-4"><a href="#">Case Studies</a></li>
            <li class="posty-theme__footer--links-item"><a href="#">Awards</a></li>
          </ul>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card class="posty-theme__footer--card-bottom mb-0">
      <div class="posty-theme__footer--social-media">
        <div v-for="(socialMedia, index) in getSocialMedia" :key="index">
          <a :href="socialMedia.data.url.data.url" class="posty-theme__footer--social-media-icon">
            <img :src="socialMedia.data.image.data" :alt="socialMedia.data.url.data.text">
          </a>
        </div>
      </div>
    </vs-card>
  </footer>
</template>

<script>
export default {
  name: "PostyThemeFooter",
  computed: {
    getSocialMedia() {
      return JSON.parse(this.$page.props.socialMedia.value)
    },
    getTitle() {
      return this.$page.props.appName
    }
  }
}
</script>