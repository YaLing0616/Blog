import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  description: "A VitePress Site",
  base: '/Blog/',
  rewrites: {
    'pages/(.*)': '(.*)'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' },
          { text: "markdown語法", link: "/markdown" },
          {
            text: 'Test',
            items: [
              { text: "我是該分類下第一篇文章", link: "/test/test" },
              { text: "我是該分類下第二篇文章", link: "/test/test1" }
            ]
          },
          {
            text: '🤩 一起玩 NAS!',
            items: [
              { text: "DIY 閒置電腦做 NAS", link: "/nas/diy-nas" },
            ]
          },
          {
            text: '問題集',
            items: [
              { text: "為什麼 git push 發生錯誤？", link: "/problems/github-problems" },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
