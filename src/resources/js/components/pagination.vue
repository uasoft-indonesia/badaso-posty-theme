<template>
  <vs-pagination :total="data.lastPage" @input="setPages" v-model="page" class="post-theme__pagination"></vs-pagination>
</template>

<script>
export default {
  name: "PostThemePagination",
  props: {
    data: {
      required: true,
      type: Object
    },
    value: {
      required: true,
    }
  },
  data:()=>({
    page: this.value
  }),
  methods: {
    setPages() {
      this.$emit('input', this.page);
    }
  }
}
</script>