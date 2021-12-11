// 注意: base的值为github仓库的名称
module.exports = {
  base: "" /* 基础虚拟路径: */,
  dest: "build" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "从入门到入坟", // 标题
  // description: "学习使用 TypeScript", // 标题下的描述
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2,3] },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-anchor"));
      md.use(require("markdown-it-toc"));
    },
  },
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],

  // themeConfig: {
  //   nav: [
  //   // 网站导航
  //     { text: '首页', link: '/' },
  //     { text: '导航', link: '/goto/' },
  //     { text: 'GitHub', link: 'https://github.com/shuaipengge/shuaipengge.github.io' },
  //   ],
  //   sidebar: {
  //   // 显示侧边导航
  //     "/goto/": [""],
  //     "/web/HTML/": [""],
  //     "/web/CSS/": [""]
  // }

  themeConfig: {
    // 主题配置
    nav: [
      // 网站导航
      { text: "首页", link: "/" },
      { text: "导航", link: "/goto/" },
      { text: "GitHub", link: "https://github.com/zbsilent" },
    ],
    sidebar: [
      // 左侧导航
      {
        title: "前端学习", // 标题
        collapsable: true, // 下级列表不可折叠
        children: [
          // 下级列表
          "front-end-development/webpack/01-Core.md",
        ],
      },
    ],
  },
};
