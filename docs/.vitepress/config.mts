import { defineConfig } from "vitepress";
import {mdPlugin} from './theme/plugins'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ui/",
  title: "UI Components",
  description: "Asfor a UI Library",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button" },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      "/components/": [
        {
          text: "基本",
          items: [
            { text: "Button 按钮", link: "/components/button/" },
            { text: "Table 表格", link: "/components/table/" },
            { text: "Form 表单", link: "/components/form/" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
