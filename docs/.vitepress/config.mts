import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'; // VitePress Sidebar 自动生成侧边栏插件
const vitepressSidebarOptions = {
  /* Options... */
};


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherryWiki",
  description: "樱桃Wiki，存放世界某处的一缕「记忆」。",
  base: '/CherryWiki/',
  head: [
    ['link',{ rel: 'icon', href: '/CherryWiki/cherrywiki_icon.png'}], //fav图标，路径要与base:相同
   ],
  //lastUpdated: true, 此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释
  themeConfig: {
  logo: '/cherrywiki_icon.svg',
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
    { text: '📘开服专区', link: '/kfzq' },
    {
      text: '更多',
      items: [
        {
          // 该部分的标题
          text: '其他站点',
          items: [
            { text: '❌ CherryBlock官网', link: 'https://cherryblock.zijgame.top' },
            { text: '❌ 开服专区官网', link: 'https://kfzq.zijgame.top' },
            { text: '❌ Zijgame官网', link: 'https://www.zijgame.top' },
            { text: '开服专区官网镜像站', link: 'https://kfzq-1258074638.cos-website.ap-shanghai.myqcloud.com' }
          ]
        },
        {
          // 该部分的标题
          text: '友情链接',
          items: [
            { text: 'Minecraft 官网', link: 'https://minecraft.net' },
            { text: 'LittleSkin', link: 'https://littleskin.cn/' },
            { text: '3366美食群🍒', link: 'https://qm.qq.com/q/D2IgGHx2O' }
          ]
        }
        
      ]
//   },
//   {
//     text: '预留 Menu2',
//     items: [
//       {
//         // 该部分的标题
//         items: [
//           { text: 'Section A Item A', link: '...' },
//           { text: 'Section B Item B', link: '...' }
//         ]
//       }
//     ]
   }
  ],

        

    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.jooy2.com/guide/api
       */
      documentRootPath: '/docs', //文档根目录
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true, //显示带有 .md 文件中 h1 标题内容的标题。
      useTitleFromFrontmatter: true,
      // frontmatterTitleFieldName: 'title',
      useFolderTitleFromIndexFile: true, //是否使用层级首页文件名做分级标题，侧边栏目录名根据 index.md h1标题显示需启用
      useFolderLinkFromIndexFile: true, //是否链接至层级首页文件(如点击可导航至docs/kfzq的index.md)，侧边栏目录名根据 index.md h1标题显示需启用
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      // capitalizeEachWords: false,
      collapsed: true, //折叠组关闭
      collapseDepth: 2, //折叠组2级菜单
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'], //手动排序，文件夹不用带后缀
      removePrefixAfterOrdering: false, //删除前缀，必须与prefixSeparator一起使用
      prefixSeparator: '.', //删除前缀的符号
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatterFieldName: 'exclude',
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false, //是否包含层级主页
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    }),
  
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
       
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuzoguozhi/CherryWiki' },
      {
        icon: {
          svg: '<svg t="1772542200010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5802" width="200" height="200"><path d="M257.2 111.1c15.8-9.02 35.9-10.28 52.6-2.9 12.52 5.14 21.94 15.22 32.12 23.78 42 36.24 83.64 72.94 125.82 108.96 29.5 0.06 59.02 0.06 88.52 0 42.16-36 83.76-72.66 125.74-108.9 10.2-8.56 19.64-18.66 32.2-23.84 16.24-7.16 35.72-6.2 51.32 2.22 18.24 9.42 30.9 28.94 31.68 49.5 1.18 14.94-4.18 30.02-13.56 41.6-8.3 9.2-18.18 16.72-27.38 24.96-5.88 4.86-11.16 10.46-17.64 14.56 26.02 0 52.04-0.3 78.06 0.16 34.28 0.9 67.64 16.06 91.22 40.9 24.9 24.44 39.1 58.94 39.08 93.8 0.12 119.36 0.02 238.74 0.06 358.12-0.12 18.04 0.86 36.34-3.14 54.08-7.3 36.32-31.68 67.78-62.68 87.32-21.16 13.42-46.34 19.56-71.26 19.6-189.98 0.02-379.98 0-569.96 0-18.74-0.12-37.7 0.98-56.14-3.14-35.32-7.1-66.06-30.4-85.7-60.16-14.42-21.66-21.18-47.82-21.18-73.72-0.02-117.98 0-235.96 0-353.94 0.16-18.14-0.96-36.48 2.74-54.36 11.22-58.22 64.86-105.76 124.38-108.34 27.1-0.84 54.24-0.22 81.36-0.32-12.76-9.26-24.02-20.44-36.1-30.56-14.82-12.14-24.1-31.28-22.56-50.56 0.78-20.06 12.84-39.18 30.4-48.82m-14.32 244.14c-23.08 4.14-42.86 22.36-49.3 44.84-2.32 7.72-2.54 15.88-2.58 23.9 0.1 98.02-0.06 196.04 0.08 294.06-0.46 26.68 17.94 51.94 43.06 60.44 8.92 3.26 18.56 3.3 27.92 3.36 168.66-0.08 337.3 0.08 505.94-0.06 24.72 1 48.52-14.4 58.92-36.6 6.36-12.72 6.28-27.24 6.06-41.1-0.02-91.32-0.02-182.64 0-273.94-0.02-10.04 0.34-20.34-2.58-30.06-5.6-19.58-21.3-35.92-40.54-42.54-10.8-3.9-22.48-3.3-33.76-3.38-161.32 0.02-322.62 0-483.94 0.02-9.76 0.02-19.58-0.34-29.28 1.06z" fill="#1296db" p-id="5803"></path><path d="M345.04 449.44c16.12-1.66 32.84 3.56 45.14 14.1 13.68 11.22 21.5 28.72 21.72 46.32 0.44 21.38 0.16 42.8 0.16 64.18-0.06 14.04-3.76 28.36-12.48 39.56-12.12 16.44-33.02 25.82-53.36 23.94-20.06-1.26-38.92-13.5-48.46-31.14-7.48-12.8-8.14-28.02-7.94-42.46 0.48-20.74-1.04-41.6 1.02-62.28 3.08-27.22 26.98-49.94 54.2-52.22zM666.94 449.44c16.7-1.74 33.98 3.92 46.48 15.1 12.32 10.84 19.84 26.88 20.34 43.28 0.94 20.04 0.12 40.12 0.44 60.16 0.12 14.08-1.54 28.78-9.36 40.86-11.28 18.78-33.34 30.34-55.2 28.8-19.14-0.78-37.42-11.48-47.72-27.58-8.74-12.9-10.44-28.88-10.06-44.08 0.4-20.62-0.74-41.26 0.68-61.84 2.04-28.16 26.34-52.32 54.4-54.7z" fill="#1296db" p-id="5804"></path></svg>'
        },
        link: 'https://space.bilibili.com/18031962',}
      
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
