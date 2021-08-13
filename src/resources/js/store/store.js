import Vue from 'vue'
import Vuex from 'vuex';
import api from "./../api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    categories: [],
    searchedPosts: [],
    socialMedia: {},
    configurations: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_SEARCHED_POST(state, posts) {
      state.searchedPosts = posts
    },
    SET_SOCIAL_MEDIA(state, socialMedia) {
      state.socialMedia = socialMedia
    },
    SET_CONFIGURATIONS(state, configurations) {
      state.configurations = configurations
    }
  },
  actions: {
    async fetchCategories({commit}) {
      await api.badasoBlog
        .fetchCategories()
        .then((res) => {
          commit("SET_CATEGORIES", res.data.categories)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchSocialMedia({ commit }) {
      await api.badasoContent
        .fetch({ slug: 'post-theme-social-media' })
        .then((res) => {
          commit("SET_SOCIAL_MEDIA", res.data.value)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchConfigurations({ commit }) {
      await api.badasoConfiguration
        .fetch({ group: 'postTheme' })
        .then((res) => {
          commit("SET_CONFIGURATIONS", res.data.configuration)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
    getGlobalState: (state) => {
      return state;
    },
  },
  plugins: [createPersistedState()],
});
