import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherryWiki",
  description: "A VitePress Site",
  base: '/CherryWiki/',
  themeConfig: {
  search: {
  provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开服列传',
        items: [
          { text: '测试', link: '/kfzq/playerdocs/flyme' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
 

      
  }
  
})
