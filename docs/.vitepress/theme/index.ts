// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TestUI from "components";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import Preview from "./preview/index.vue";
import './style.css'
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(TestUI);
    app.component('Preview', Preview)
    app.use(hljsVuePlugin)
  }
} satisfies Theme
