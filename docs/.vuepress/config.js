// 注意: base的值为github仓库的名称
module.exports = {
  base: "" /* 基础虚拟路径: */,
  dest: "build" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "从入门到入坟", // 标题
  // description: "学习使用 TypeScript", // 标题下的描述
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3,4] },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      //md.use(require("markdown-it-anchor"));
      //md.use(require("markdown-it-toc"));
    },
  },
  head: [["link", { rel: "icon", href: "/public/logo.png" }]],

  themeConfig: {
    // logo: '/public/logo.png',
    sidebar: "auto",
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true, //开启滚动
    lastUpdated: "Last Updated", // string | boole
    displayAllHeaders: false, // 默认值：false 显示所有页面的链接
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 主题配置
    nav: [
      // 网站导航
      { text: "首页", link: "/" },
      { text: "导航", link: "/goto/" },
      { text: "GitHub", link: "https://github.com/zbsilent" },
      {
        text: "前端基础🍃",
        ariaLabel: "API",
        items: [
          {
            text: "前端TS与REACT",
            link: "/front-end-development/react/reactypescript.md",
          },
          {
            text: "NODEJS笔记",
            link: "/front-end-development/nodejs/nodejsheima.md",
          },
          {
            text: "其他记录",
            items: [
              { text: "跳转百度", link: "https://baidu.com" },
              { text: "笔记本1", link: "https://zbsilent.github.io" },
              { text: "笔记本2", link: "https://zbsilent.github.io" },
            ],
          },
        ],
      },
    ],
    sidebar: [
      // 左侧导航
      {
        title: "前端应用整理", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          {
            title: "打包工具", // 标题
            collapsable: true,
            children: ["front-end-development/webpack/01-Core.md"],
          },
          {
            title: "NODEJS与ES6", // 标题
            collapsable: true,
            children: [
              "front-end-development/ECMAScript6/es6.md",
              "front-end-development/nodejs/nodejs.md",
              "front-end-development/nodejs/nodejsheima.md",
            ],
          },
          // 下级列表
          "front-end-development/ECMAScript6/axios.md",
        ],
      },
      {
        title: "前端框架整理", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          {
            title: "vue基础", // 标题
            collapsable: true,
            children: [
              "front-end-development/vue3/VUE3.md",
              "front-end-development/vue3/Vuex.md",
            ],
          },
          {
            title: "react基础", // 标题
            collapsable: true,
            children: [
              "front-end-development/react/reactypescript.md",
              "front-end-development/react/react.md",
              "front-end-development/react/react01.md",
              "front-end-development/react/react02.md",
              "front-end-development/react/redux.md",
              "front-end-development/react/router.md",
            ],
          },
        ],
      },
      // {
      //   title: "Kotlin", // 标题
      //   collapsable: true, // 下级列表不可折叠
      //   children: [
      //     // 下级列表
      //     "Kotlin/kotlin.md",
      //     // "front-end-development/vue3/Vuex.md",
      //   ],
      // },
      {
        title: "DOCKER记忆", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          // 下级列表
          "docker/docker.md",
          // "front-end-development/vue3/Vuex.md",
        ],
      },
      {
        title: "工具学习", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          // 下级列表
          "tools-dev/md-script/md.md",
          "tools-dev/mac.md",
        ],
      },
      {
        title: "后端应用整理", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          {
            title: "基础篇章", // 标题
            collapsable: true, // 下级列表不可折叠
            children: [
              // 下级列表
              "java/jdk8.md",
            ],
          },
          {
            title: "框架篇章", // 标题
            collapsable: true, // 下级列表不可折叠
            children: [
              // 下级列表
              "java/spring/spring-qa.md",
              "java/spring/springboot.md",
              "java/spring/springboot2.md",
              "java/spring/springcloud.md",
            ],
          },
          // 下级列表
        ],
      },
    ],

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "zbsilent/studio",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "zbsilent/studio",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
  },
  //多语设置
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   "/": {
  //     lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
  //     title: "从入门到入坟",
  //     description: "Vue-powered Static Site Generator",
  //   },
  //   "/zh/": {
  //     lang: "en-US",
  //     title: "developer island",
  //     description: "Vue 驱动的静态网站生成器",
  //   },
  // },
};
