// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import home from "./components/home.vue";
import backTop from "./components/backTop.vue";

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
import "./styles/custom.scss";
import "./styles/site.scss";
import "./styles/rainbow.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // ...

    app.component("Home", home);
    app.component("BackTop", backTop);
  }
} satisfies Theme

