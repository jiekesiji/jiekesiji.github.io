import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "个人学习汇总文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [

      {
        text: 'linux',
        items: [
          { text: '查询类', link: '/linux/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiekesiji' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }

  }
})
