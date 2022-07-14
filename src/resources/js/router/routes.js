import Pages from "./../pages/index.vue";

let prefix = process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  ? "/" + process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  : "/badaso-dashboard";

export default [
  {
    path: prefix + "/posty-theme-configuration",
    name: "PostyThemeConfigurationBrowse",
    component: Pages,
    meta: {
      title: "Browse Posty Theme Configuration",
      useComponent: "AdminContainer"
    },
  },
];
