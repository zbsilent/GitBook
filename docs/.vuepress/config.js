// 注意: base的值为github仓库的名称
module.exports = {
    base: '', /* 基础虚拟路径: */
    dest: 'build', /* 打包文件基础路径, 在命令所在目录下 */
    title: 'TypeScript 入门', // 标题
    description: '学习使用 TypeScript', // 标题下的描述
    head: [
      ['link', { rel: 'icon', href: '/img/logo.png' }]
    ],

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
 

    themeConfig: { // 主题配置
      nav: [
        // 网站导航
          { text: '首页', link: '/' },
          { text: '导航', link: '/goto/' },
          { text: 'GitHub', link: 'https://github.com/zbsilent' },
        ],
      sidebar: [ // 左侧导航
        {
          title: '初识 TypeScript', // 标题
          collapsable: true, // 下级列表不可折叠
          children: [ // 下级列表
            'chapter1/01_初识TS',
            'chapter1/02_安装TS',
          ]
        },
        {
          title: 'TypeScript 常用语法',
          collapsable: false,
          children: [
            'chapter2/1_type',
            'chapter2/2_interface',
             
          ]
        },
      ]
    }
  }