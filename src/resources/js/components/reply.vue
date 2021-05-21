<template>
  <div class="simple-theme__reply">
    <vs-row>
      <template v-for="(c, index) in parent.children">
        <vs-col vs-w="2" :key="'avatar-' + index" class="mb-16">
          <vs-avatar :src="'/storage/' + c.user.avatar" />
        </vs-col>
        <vs-col vs-w="10" :key="'content-' + index" class="mb-16">
          <span class="simple-theme__comments--content mb-8">{{ c.content }}</span> <br>
          <span class="simple-theme__comments--small">{{ $moment(c.createdAt, "LL") }}</span>
          <span class="simple-theme__comments--link ml-4" @click="reply = true">Reply</span>
          <simple-theme-reply v-if="reply" :parent="c"></simple-theme-reply>
        </vs-col>
      </template>
    </vs-row>
    <vs-row class="mb-16">
        <vs-col vs-w="2"><vs-avatar class="mr-8" /></vs-col>
        <vs-col vs-w="10">
          <vs-textarea counter="500" v-model="comment" />
        </vs-col>
        <vs-col vs-w="12" vs-justify="flex-end" vs-align="end" vs-type="flex" class="mt-8">
          <vs-button size="small" type="relief" color="primary" @click="() => postComment()">Post Comment</vs-button>
        </vs-col>
      </vs-row>
  </div>
</template>

<script>
export default {
  name: "SimpleThemeReply",
  props: {
    parent: {
      required: true,
      type: Object,
      default: () => ({})
    },
  },
}
</script>