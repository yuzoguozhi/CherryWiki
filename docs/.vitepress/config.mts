import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'; // VitePress Sidebar 自动生成侧边栏插件
const vitepressSidebarOptions = {
  /* Options... */
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CherryWiki",
  description: "A VitePress Site",
  base: '/CherryWiki/',
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
       { text: '示例', link: '/markdown-examples' }
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
