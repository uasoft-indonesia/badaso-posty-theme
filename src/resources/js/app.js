import Vue from "vue";
import Vuesax from "vuesax";

import { Datetime } from "vue-datetime";
import PostThemeLayout from "./components/layout";
import PostThemeNavbar from "./components/navbar";
import PostThemeHome from "./components/home";
import CategoryTypeOne from "./components/category-type-one";
import CategoryTypeTwo from "./components/category-type-two";
import PostThemeFooter from "./components/footer";
import PostThemeCategory from "./components/category";
import PostThemePost from "./components/post";
import PostThemeComment from "./components/comment";
import PostThemeOther from "./components/other";
import PostThemeInfo from "./components/info";
import PostThemeSearch from "./components/search";
import PostThemePagination from "./components/pagination";
import PostThemePopular from "./components/popular-post";
import PostThemeNewest from "./components/newest-post";

import moment from "moment"
import _ from "lodash"

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";
import "vue-datetime/dist/vue-datetime.css";
import "./assets/scss/style.scss";

import api from "./api/index";
import store from "./store/store";

store.dispatch('fetchConfigurations')

let themePrefix = _.filter(store.state.configurations, ["key", "postThemePrefix"]).pop().value ?
"/" + _.filter(store.state.configurations, ["key", "postThemePrefix"]).pop().value :
""

let prefix = process.env.MIX_BLOG_POST_URL_PREFIX ?
"/" + process.env.MIX_BLOG_POST_URL_PREFIX :
""

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuesax)
Vue.component("datetime", Datetime);

Vue.prototype.$api = api;
Vue.prototype.$moment = (date, format) => {
  return moment(date).format(format);
};
Vue.prototype.$to = function (type, query = null) {
  if (type === 'post') {
    window.location.href = themePrefix + prefix + '/' + query;
  }

  else if (type === 'category') {
    window.location.href = themePrefix + '/category/' + query;
  }

  else if (type === 'home') {
    window.location.href = themePrefix + '/';
  }

  else if (type === 'tag') {
    window.location.href = themePrefix + '/tag/' + query;
  }

  else if (type === 'newest') {
    window.location.href = themePrefix + '/newest';
  }

  else if (type === 'popular') {
    window.location.href = themePrefix + '/popular';
  }

  else if (type === 'search') {
    window.location.href = themePrefix + '/search/' + query;
  }

  else {
    window.location.href = themePrefix + '/404';
  }
}
Vue.prototype.$isMobile = Math.min(window.screen.width, window.screen.height) < 768;
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0);
Vue.prototype.$constants = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

Vue.component("PostThemeLayout", PostThemeLayout);
Vue.component("PostThemeNavbar", PostThemeNavbar);
Vue.component("PostThemeHome", PostThemeHome);
Vue.component("CategoryTypeOne", CategoryTypeOne);
Vue.component("CategoryTypeTwo", CategoryTypeTwo);
Vue.component("PostThemeFooter", PostThemeFooter);
Vue.component("PostThemeCategory", PostThemeCategory);
Vue.component("PostThemePost", PostThemePost);
Vue.component("PostThemeComment", PostThemeComment);
Vue.component("PostThemeOther", PostThemeOther);
Vue.component("PostThemeInfo", PostThemeInfo);
Vue.component("PostThemeSearch", PostThemeSearch);
Vue.component("PostThemePagination", PostThemePagination);
Vue.component("PostThemePopular", PostThemePopular);
Vue.component("PostThemeNewest", PostThemeNewest);

Vue.prototype.$baseUrl = "/";

const app = new Vue({
  store,
}).$mount("#post-theme");