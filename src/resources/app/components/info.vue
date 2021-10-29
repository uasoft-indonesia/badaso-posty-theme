<template>
  <vs-row vs-type="grid" class="h-100 place-content-start mt-20">
    <vs-col vs-w="12" vs-type="grid" vs-justify="center" vs-align="center" class="grid-column mb-16">
      <vs-icon icon="chat_bubble_outline" size="14px" color="#4F4F4F"></vs-icon> 
      <span class="post-theme__showcase--icon-text ml-4">{{ post.commentCount }}</span>
      <vs-icon icon="schedule" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
      <span class="post-theme__showcase--icon-text ml-4">{{ $moment(post.publishedAt, "LL") }}</span>
      <vs-icon icon="edit" size="14px" class="ml-16" color="#4F4F4F"></vs-icon> 
      <span class="post-theme__showcase--icon-text ml-4">{{ post.user.name }}</span>
      <slot />
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "PostThemeInfo",
  props: {
    post: {
      required: true,
      type: Object,
      default: () => ({})
    },
  }
}
</script>