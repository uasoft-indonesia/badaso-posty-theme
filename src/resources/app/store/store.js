import Vue from 'vue';
import Vuex from 'vuex';
import api from "./../api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    layout: 'default',
    searchedPosts: [],
  },
  mutations: {},
  actions: {},
  getters: {
    getGlobalState: (state) => {
      return state;
    },
  },
  plugins: [createPersistedState()],
});
