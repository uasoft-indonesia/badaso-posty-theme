<template>
  <div class="wrapper">
    <post-navbar class="mb-30" />
    <slot />
    <post-footer />
  </div>
</template>

<script>
import PostNavbar from './../components/navbar.vue'
import PostFooter from './../components/footer.vue'
export default {
  name: "PostyThemeLayout",
  components: {
    PostNavbar,
    PostFooter
  },
}
</script>