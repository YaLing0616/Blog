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
          { text: "💡 Markdown語法", link: "/markdown" },
          {
            text: 'Documents',
            items: [
              { text: "Design Language", link: "/documents/design-language" },
            ]
          },{
            text: 'Vitepress',
            items: [
              { text: "Vitepress", link: "/vitepress/vitepress" },
            ]
          },{
            text: '🤩 一起玩 NAS!',
            items: [
              { text: "DIY 閒置電腦做 NAS", link: "/nas/diy-nas" },
              { text: "Gandi 網域申請與委託 Cloudflare 管理", link: "/nas/gandi-cloudflare-apply" },
            ]
          },
          {
            text: 'Web',
            items: [
              { text: "什麼是 API?", link: "/web/api" },
              { text: "HTTP 傳輸格式", link: "/web/http" },
            ]
          },
          {
            text: 'Xampp 環境設定',
            items: [
              { text: "Apache 開放資料庫連線功能", link: "/environment/phpMyAdmin-allow-remote-access" },
            ]
          },
          {
            text: '問題集',
            items: [
              { text: "git fixup、git rebase 使用場景", link: "/problems/git-fixup-git-rebase" },
              { text: "git branch 取消遠端追蹤", link: "/problems/git-branch-unfollow" },
              { text: "為什麼 git push 至 GitHub 發生錯誤？", link: "/problems/git-push-problem" },
            ]
          },{
            text: 'Test',
            items: [
              { text: "我是該分類下第一篇文章", link: "/test/test" },
              { text: "我是該分類下第二篇文章", link: "/test/test1" }
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
