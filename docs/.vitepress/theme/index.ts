// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TestUI from "components";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import Preview from "./preview/index.vue";
import './style.css'
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

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
