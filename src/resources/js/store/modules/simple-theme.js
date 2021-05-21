import api from "../../api";
import createPersistedState from "vuex-persistedstate";

export default {
  namespaced: true,
  state: {
    categories: [],
    earchedPosts: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_SEARCHED_POST(state, posts) {
      state.searchedPosts = posts
    },
  },
  actions: {
    async fetchCategories({commit}) {
      await api.simpleTheme
        .categories()
        .then((res) => {
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
};
