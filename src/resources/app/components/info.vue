<template>
  <div class="flex gap-6 mb-16">
    <div class="flex gap-1 align-items-center">
      <vs-icon icon="chat_bubble_outline" size="24px" color="#4F4F4F"></vs-icon>
      <span class="posty-theme__showcase--icon-text">
        {{ post.commentCount }}
      </span>
    </div>
    <div class="flex gap-1 align-items-center">
      <vs-icon icon="schedule" size="24px" color="#4F4F4F"></vs-icon>
      <span class="posty-theme__showcase--icon-text">
        {{ $moment(post.publishedAt, "LL") }}
      </span>
    </div>
    <div class="flex gap-1 align-items-center">
      <vs-icon icon="edit" size="24px" color="#4F4F4F"></vs-icon>
      <span class="posty-theme__showcase--icon-text">
        {{ post.user.name }}
      </span>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "PostyThemeInfo",
  props: {
    post: {
      required: true,
      type: Object,
      default: () => ({}),
    },
  },
};
</script>