import Vue from "vue";
import { createInertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue'
import { Datetime } from "vue-datetime";
import moment from "moment"
import _ from "lodash"
import VueMobileDetection from "vue-mobile-detection";

import api from "./api/index";
import store from "./store/store"
import Vuesax from 'vuesax'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.component("datetime", Datetime);
Vue.use(Vuesax)
Vue.use(VueMobileDetection)
Vue.mixin({ methods: { route } })
Vue.use(InertiaPlugin);
Vue.prototype.$api = api;
Vue.prototype.$moment = (date, format) => {
  return moment(date).format(format);
};
Vue.prototype.$constants = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: name => {
    const isExists = require.context('./../../../../../../resources/js/badaso/theme/post-theme/pages', false, /\.vue$/).keys().some(key => key.includes(name));

    if (isExists) {
      return require(`./../../../../../../resources/js/badaso/theme/post-theme/pages/${name}.vue`);
    } else {
      return require(`./pages/${name}.vue`)
    }
  },
  setup({ el, App, props }) {
    new Vue({
      store,
      render: h => h(App, props),
    }).$mount(el)
  },
})
