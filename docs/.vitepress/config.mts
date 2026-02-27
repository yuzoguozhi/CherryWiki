import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherryWiki",
  description: "A VitePress Site",
  base: '/CherryWiki/',
  //lastUpdated: true, 此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释
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

    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
       
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    
      // 部分功能文本汉化

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

      
  }
  
})
