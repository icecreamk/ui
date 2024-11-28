import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AsforUI from "../../../packages/components";
import '../../../packages/components/dist/style.css'
import ElementPlus from 'element-plus'

import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'



export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(AsforUI);
    app.use(ElementPlus);
    app.component('demo-preview', NaiveUIContainer)
  }
} satisfies Theme
