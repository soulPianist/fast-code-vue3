import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "fast-code-vue3",
  description: "@only_you/fast-code-vue3文档",
  head: [
    ['link', { rel: 'icon', href: '/public/favicon.ico' }]
  ],
  themeConfig: {
    logo:'/public/favicon.ico',
    outline: {
      label: '页面导航'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '使用教程', link: '/views/start' },
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '介绍', link: '/views/introduce' },
          { text: '开始', link: '/views/start' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'TableModule 列表模块', link: '/views/components/tableModule' },
          { text: 'FormModule 表单模块', link: '/views/components/formModule' },
          { text: 'FormDialog 表单弹窗', link: '/views/components/formDialog' }
        ]
      },
      {
        text: '类型',
        items: [
          { text: 'TtoComputed', link: '/views/common/TtoComputed' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
