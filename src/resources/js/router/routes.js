import Pages from "./../pages/index.vue";

let prefix = process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  ? "/" + process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  : "/badaso-dashboard";

export default [
  {
    path: prefix + "/post-theme-configuration",
    name: "PostThemeConfigurationBrowse",
    component: Pages,
    meta: {
      title: "Browse Post Theme Configuration",
      useComponent: "AdminContainer"
    },
  },
];
