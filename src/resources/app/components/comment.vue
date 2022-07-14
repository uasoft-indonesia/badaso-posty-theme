<template>
  <div>
    <vs-row v-if="comments" vs-align="flex-start" vs-justify="flex-start" vs-type="flex" class="mt-16" style="flex-wrap: nowrap;">
      <vs-col class="m-0 w-auto" vs-w="1">
        <vs-avatar :src="comments.user.avatar" class="m-0" />
      </vs-col>
      <vs-col class="pl-8 mb-16" vs-w="11">
        <p class="posty-theme__comments--user mb-8">{{ comments.user.name }}</p>
        <p class="posty-theme__comments--content mb-8">{{ comments.content }}</p>
        <p class="posty-theme__comments--small mb-0">{{ $moment(comments.createdAt, "LL") }}</p>
        <p class="posty-theme__comments--link pointer ml-8 mb-0" @click="reply = true">Reply</p>
      </vs-col>
    </vs-row>
    <vs-row v-if="reply" class="pl-40">
      <vs-col vs-w="12">
        <vs-textarea counter="500" v-model="comment" width="100%" />
      </vs-col>
      <vs-col vs-w="12" vs-justify="flex-end" vs-align="end" vs-type="flex" class="mt-8">
        <vs-button size="small" type="relief" color="primary" @click="() => postComment(comments, comment)">Post Comment</vs-button>
      </vs-col>
    </vs-row>
    <vs-row v-if="comments.children && comments.children.length > 0" class="pl-40">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" class="mt-8 mb-16" v-for="(child, childIndex) in comments.children" :key="childIndex">
          <vs-col class="m-0 w-auto" vs-w="1">
            <vs-avatar :src="child.user.avatar" class="m-0" />
          </vs-col>
          <vs-col class="pl-8" vs-w="11">
            <p class="posty-theme__comments--user mb-8">{{ child.user.name }}</p>
            <p class="posty-theme__comments--content mb-8">{{ child.content }}</p>
            <p class="posty-theme__comments--small mb-0">{{ $moment(child.createdAt, "LL") }}</p>
          </vs-col>
        </vs-col>
      </vs-row>
  </div>
</template>

<script>
export default {
  name: "PostyThemeComment",
  components: {
  },
  props: {
    comments: {
      required: true,
      type: Object,
      default: () => ({})
    },
    postId: {
      required: true,
      type: String,
      default: ""
    },
    sort: {
      required: true,
      default: 'desc'
    }
  },
  data:()=>({
    comment: "",
    reply: false
  }),
  computed: {
  },
  methods: {
    postComment(parent, comment) {
      this.$api.badasoPostPublic
        .addComment({
          postId: this.postId,
          content: comment,
          parentId: parent.id
        })
        .then((res) => {
          this.comment = "";
          parent.children.unshift(res.data);
          this.reply = false
        })
        .catch((err) => {
          this.comment = ""
          console.log('Error on sending comment', err);
          this.reply = false
        });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  }
}
</script>