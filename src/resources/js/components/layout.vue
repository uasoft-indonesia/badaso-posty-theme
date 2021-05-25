<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleThemeLayout",
  created() {
    this.$store.dispatch("fetchCategories");
  },
}
</script>