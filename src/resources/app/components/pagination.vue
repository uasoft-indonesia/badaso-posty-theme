<template>
  <vs-pagination :total="data.lastPage" @input="setPages" v-model="page" class="posty-theme__pagination"></vs-pagination>
</template>

<script>
export default {
  name: "PostyThemePagination",
  props: {
    data: {
      required: true,
      type: Object
    },
    value: {
      required: true,
    }
  },
  data() {
    return {
      page: this.value
    }
  },
  methods: {
    setPages() {
      this.$emit('input', this.page);
    }
  }
}
</script>