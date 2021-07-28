<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PostThemeLayout",
  created() {
    this.$store.dispatch("fetchCategories");
  },
}
</script>