import Vuex from 'vuex';
import api from "./../api";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  namespaced: true,
  state: {
    categories: [],
    searchedPosts: [],
    meta: {}
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_SEARCHED_POST(state, posts) {
      state.searchedPosts = posts
    },
    SET_META(state, meta) {
      state.meta = meta
    }
  },
  actions: {
    async fetchCategories({commit}) {
      await api.badasoPost
        .fetchCategories()
        .then((res) => {
          commit("SET_META", res.meta)
          commit("SET_CATEGORIES", res.data.categories)
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
