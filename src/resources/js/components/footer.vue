<template>
  <footer class="post-theme__footer">
    <vs-card class="post-theme__footer--card mb-0 w-100">
      <vs-row vs-justify="space-around" vs-align="flex-start">
        <vs-col class="mb-24" vs-xs="12" vs-sm="12" vs-lg="4">
          <h3 class="post-theme__footer--title mb-4">{{ title }}</h3>
          <span class="post-theme__footer--copyright">© 2021 Post Theme - Badaso<br>All rights reserved.</span>
        </vs-col>
        <vs-col class="mb-16" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="post-theme__footer--links mb-8">Quick Links</h3>
          <ul class="post-theme__footer--links-items">
            <li class="post-theme__footer--links-item mr-4"><a href="#">Services</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">About</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">News</a></li>
            <li class="post-theme__footer--links-item"><a href="#">Post</a></li>
          </ul>
        </vs-col>
        <vs-col class="mb-16" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="post-theme__footer--links mb-8">Menu</h3>
          <ul class="post-theme__footer--links-items">
            <li class="post-theme__footer--links-item mr-4"><a href="#">Our Service</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">Our Team</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">Our News</a></li>
            <li class="post-theme__footer--links-item"><a href="#">Our Post</a></li>
          </ul>
        </vs-col>
        <vs-col class="mb-24" vs-xs="12" vs-sm="12" vs-lg="2">
          <h3 class="post-theme__footer--links mb-8">About Us</h3>
          <ul class="post-theme__footer--links-items">
            <li class="post-theme__footer--links-item mr-4"><a href="#">About Us</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">Testimonials</a></li>
            <li class="post-theme__footer--links-item mr-4"><a href="#">Case Studies</a></li>
            <li class="post-theme__footer--links-item"><a href="#">Awards</a></li>
          </ul>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card class="post-theme__footer--card-bottom mb-0">
      <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="post-theme__footer--social-media">
        <vs-col v-if="socialMedia.facebook" vs-xs="3" vs-sm="3" vs-lg="1" :class="{ 'text-center': true, 'mb-16': $isMobile }">
          <a :href="socialMedia.facebook"><img src="./../assets/images/facebook.png" alt="Facebook's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.twitter" vs-xs="3" vs-sm="3" vs-lg="1" :class="{ 'text-center': true, 'mb-16': $isMobile }">
          <a :href="socialMedia.twitter"><img src="./../assets/images/twitter.png" alt="Twitter's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.instagram" vs-xs="3" vs-sm="3" vs-lg="1" :class="{ 'text-center': true, 'mb-16': $isMobile }">
          <a :href="socialMedia.instagram"><img src="./../assets/images/instagram.png" alt="Instagram's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.vimeo" vs-xs="3" vs-sm="3" vs-lg="1" :class="{ 'text-center': true, 'mb-16': $isMobile }">
          <a :href="socialMedia.vimeo"><img src="./../assets/images/vimeo.png" alt="Vimeo's Icon" sizes="21px"></a>
        </vs-col>

        <vs-col v-if="socialMedia.path" vs-xs="2" vs-sm="2" vs-lg="1" class="text-center">
          <a :href="socialMedia.path"><img src="./../assets/images/path.png" alt="Path's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.skype" vs-xs="2" vs-sm="2" vs-lg="1" class="text-center">
          <a :href="socialMedia.skype"><img src="./../assets/images/skype.png" alt="Skype's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.telegram" vs-xs="2" vs-sm="2" vs-lg="1" class="text-center">
          <a :href="socialMedia.telegram"><img src="./../assets/images/telegram.png" alt="Telegram's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.google" vs-xs="2" vs-sm="2" vs-lg="1" class="text-center">
          <a :href="socialMedia.google"><img src="./../assets/images/google.png" alt="Google's Icon" sizes="21px"></a>
        </vs-col>
        <vs-col v-if="socialMedia.youtube" vs-xs="2" vs-sm="2" vs-lg="1" class="text-center">
          <a :href="socialMedia.youtube"><img src="./../assets/images/youtube.png" alt="Youtube's Icon" sizes="21px"></a>
        </vs-col>
      </vs-row>
    </vs-card>
  </footer>
</template>

<script>
export default {
  name: "PostThemeFooter",
  data:()=>({
    title: "",
    socialMedia: {
      facebook: null,
      twitter: null,
      instagram: null,
      vimeo: null,
      path: null,
      skype: null,
      telegram: null,
      google: null,
      youtube: null,
    }
  }),
  beforeMount() {
    this.title = process.env.MIX_NAVBAR_TITLE;
    this.socialMedia.facebook = process.env.MIX_FACEBOOK_URL;
    this.socialMedia.twitter = process.env.MIX_TWITTER_URL;
    this.socialMedia.instagram = process.env.MIX_INSTAGRAM_URL;
    this.socialMedia.vimeo = process.env.MIX_VIMEO_URL;
    this.socialMedia.path = process.env.MIX_PATH_URL;
    this.socialMedia.skype = process.env.MIX_SKYPE_URL;
    this.socialMedia.telegram = process.env.MIX_TELEGRAM_URL;
    this.socialMedia.google = process.env.MIX_GOOGLE_URL;
    this.socialMedia.youtube = process.env.MIX_YOUTUBE_URL;
  },
}
</script>