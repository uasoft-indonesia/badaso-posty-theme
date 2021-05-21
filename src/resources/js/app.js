import Vue from "vue";
import Vuesax from "vuesax";

import { Datetime } from "vue-datetime";
import SimpleThemeLayout from "./components/layout";
import SimpleThemeNavbar from "./components/navbar";
import SimpleThemeHome from "./components/home";
import CategoryTypeOne from "./components/category-type-one";
import CategoryTypeTwo from "./components/category-type-two";
import SimpleThemeFooter from "./components/footer";
import SimpleThemeCategory from "./components/category";
import SimpleThemePost from "./components/post";
import SimpleThemeComment from "./components/comment";
import SimpleThemeOther from "./components/other";
import SimpleThemeInfo from "./components/info";
import SimpleThemeSearch from "./components/search";

import moment from "moment"

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";
import "vue-datetime/dist/vue-datetime.css";
import "./assets/scss/style.scss";

import api from "./api/index";
import store from "./store/store";

let prefix = process.env.MIX_BLOG_POST_URL_PREFIX ?
"/" + process.env.MIX_BLOG_POST_URL_PREFIX :
"/"

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
    window.location.href = prefix + query;
  }

  else if (type === 'category') {
    window.location.href = '/category/' + query;
  }

  else if (type === 'home') {
    window.location.href = '/';
  }

  else if (type === 'tag') {
    window.location.href = '/tag/' + query;
  }

  else if (type === 'newest') {
    window.location.href = '/search/newest';
  }

  else if (type === 'popular') {
    window.location.href = '/search/popular';
  }

  else if (type === 'search') {
    window.location.href = '/search/' + query;
  }

  else {
    window.location.href = '/404';
  }
}
Vue.prototype.$isMobile = Math.min(window.screen.width, window.screen.height) < 768;
Vue.prototype.$constants = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

Vue.component("SimpleThemeLayout", SimpleThemeLayout);
Vue.component("SimpleThemeNavbar", SimpleThemeNavbar);
Vue.component("SimpleThemeHome", SimpleThemeHome);
Vue.component("CategoryTypeOne", CategoryTypeOne);
Vue.component("CategoryTypeTwo", CategoryTypeTwo);
Vue.component("SimpleThemeFooter", SimpleThemeFooter);
Vue.component("SimpleThemeCategory", SimpleThemeCategory);
Vue.component("SimpleThemePost", SimpleThemePost);
Vue.component("SimpleThemeComment", SimpleThemeComment);
Vue.component("SimpleThemeOther", SimpleThemeOther);
Vue.component("SimpleThemeInfo", SimpleThemeInfo);
Vue.component("SimpleThemeSearch", SimpleThemeSearch);

Vue.prototype.$baseUrl = "/";

const app = new Vue({
  store,
}).$mount("#simple-theme");