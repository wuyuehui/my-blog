module.exports = {
  // 网站 favicon
  head: [['link', { rel: 'icon', href: '/img/avatar.jpg' }]],
  // 网站 Title
  title: 'One Koala',

  // 网站描述
  description: 'This is my blog',

  // 网站语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  // 使用的主题
  theme: 'meteorlxy',

  // 主题配置
  themeConfig: {
    // 主题语言，参考下方 [主题语言] 章节
    lang: 'zh-CN',

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'koala',

      // 个人简介 (支持 HTML)
      description: 'Happy Coding<br/>Happy Life',

      // 电子邮箱
      email: '1723202690@qq.com',

      // 所在地
      location: 'Ningbo, China',

      // 头像
      // 设置为外部链接
      // avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      avatar: '/img/avatar.jpg'
    },

    // 上方 header 的相关设置 (可选)
    header: {
      // 是否在 header 显示标题
      showTitle: true,

      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true
      }
    },

    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: false,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 添加自定义 footer (支持 HTML)
      custom:
        'Copyright 2020 <a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备20004586号</a>'
    },

    // 个人信息卡片相关设置 (可选)
    infoCard: {
      // 卡片 header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      headerBackground: {
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true
      }
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 顶部导航栏内容
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
      { text: '关于', link: '/about/', exact: false },
      {
        text: 'Github',
        link: 'https://github.com/wuyuehui',
        target: '_self',
        rel: ''
      }
    ],

    // 评论配置,只有在 _posts 文件夹下的博文才能启用评论，其他页面没有评论。
    comments: {
      platform: 'github', // 可选，默认使用 'github'，还可以选择 'gitlab', 'bitbucket'。
      owner: 'wuyuehui',
      repo: 'my-blog',
      clientId: '4fc6f70cb43f7cd63c09',
      clientSecret: '2ecba14625e968f4247640b404284e5ae2ba63ea',
      autoCreateIssue: process.env.NODE_ENV !== 'development' // 可选，这样设置可以在开发环境下不自动创建 Issue
    },

    // 分页配置 (可选)
    pagination: {
      perPage: 5
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true
    }
  }
};
