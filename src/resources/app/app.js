import Vue from "vue";
import {
    createInertiaApp,
    plugin as InertiaPlugin,
} from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
import { Datetime } from "vue-datetime";
import moment from "moment";
import _ from "lodash";
import VueMobileDetection from "vue-mobile-detection";

import api from "./api/index";
import store from "./store/store";
import Vuesax from "vuesax";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.component("datetime", Datetime);
Vue.use(Vuesax);
Vue.use(VueMobileDetection);
Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.prototype.$api = api;
Vue.prototype.$moment = (date, format) => {
    return moment(date).format(format);
};
Vue.prototype.$constants = {
    MOBILE: "mobile",
    DESKTOP: "desktop",
};

Inertia.on("navigate", (event) => {
    setTimeout(() => {
        window.titleElement = event.srcElement
            .getElementById("app")
            .getElementsByClassName("post-theme__post--title");

        const page_title = window.titleElement[0]?.innerText ?? document.title;
        const { href: page_location, pathname: page_path } = window.location;
        const configuration = {
            page_title,
            page_location,
            page_path,
        };

        gtag("js", new Date());
        gtag("config", window.measurement_id, configuration);
    }, 1000);
});

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./pages/${name}.vue`),
    setup({ el, App, props }) {
        new Vue({
            store,
            render: (h) => h(App, props),
        }).$mount(el);
    },
});
