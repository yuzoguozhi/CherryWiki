import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherryWiki",
  description: "A VitePress Site",
  base: '/CherryWiki/',
  //lastUpdated: true, 此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释
  themeConfig: {
  editLink: {
     pattern: 'https://github.com/yuzoguozhi/CherryWiki/edit/main/docs/:path',
     text: '前往 GitHub 编辑此页面',
    },
  search: {
    provider: 'local',
    },
    
  // https://vitepress.dev/reference/default-theme-config
  //导航栏
     nav: [
       { text: '首页', link: '/' },
       { text: '示例', link: '/markdown-examples' }
     ],

  // 导航栏（test）
  //  nav: [
  //    { text: '首页', link: '/' },
  //    {
  //      text: '🍉指南',
  //      items: [
  //        {
  //          // 分组标题1
  //          text: '介绍',
  //          items: [
  //            { text: '前言', link: '/preface' },
  //          ],
  //        },
  //        {
  //          // 分组标题2
  //          text: '基础设置',
  //          items: [
  //            { text: '快速上手', link: '/getting-started' },
  //            { text: '配置', link: '/configuration' },
  //            { text: '页面', link: '/page' },
  //            { text: 'Frontmatter', link: '/frontmatter' },
  //          ],
  //        },
  //        {
  //          // 分组标题3
  //          text: '进阶玩法',
  //          items: [
  //            { text: 'Markdown', link: '/markdown' },
  //            { text: '团队', link: '/team' },
  //            { text: '多语言', link: '/multi-language' },
  //            { text: 'DocSearch', link: '/docsearch' },
  //            { text: '静态部署', link: '/assets' },
  //            { text: '样式美化', link: '/style' },
  //            { text: '组件', link: '/components' },
  //            { text: '布局插槽', link: '/layout' },
  //            { text: '插件', link: '/plugin' },
  //            { text: '更新及卸载', link: '/update' },
  //            { text: '搭建导航', link: '/nav/' },
  //            { text: '永久链接', link: '/permalink/' },
  //          ],
  //        },
  //      ],
  //    },
  //
  //    { text: '更新日志', link: '/changelog' },
  //  ],


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
      { icon: 'github', link: 'https://github.com/yuzoguozhi/CherryWiki' },
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
