<template>
  <div class="overlay__container">
    <img :src="$props.src" v-bind="$attrs" v-on="$listeners" />
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
}
</script>