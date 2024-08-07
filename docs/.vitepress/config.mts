import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Annie's Notes",
  description: "Annie's front-end notes and records of various interests",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Notes', link: '/notes/js/js-handle-string' }
    ],

    sidebar: [
      {
        text: '關於我',
        collapsed: true,
        items: [
          { text: '簡歷、技能', link: '/about' },
          { text: '工作經歷', link: '/work-experience' },
        ]
      },
      {
        text: '前端筆記',
        collapsed: true,
        items: [
          {
            text: 'JavaScript',
            items: [
              { text: 'JS 字串處理', link: '/notes/js/js-handle-string' },
              { text: 'JS 滾動視窗', link: '/notes/js/origin-js-scroll' },
            ]
          },
          {
            text: 'Vue',
            items: [
              { text: '在 Vue 寫視窗滾動原生事件', link: '/notes/vue/windows' },
            ]
          },
          {
            text: 'CSS',
            items: [
              { text: '滾動視窗 smooth 的方法', link: '/notes/css/windows-scroll' },
              // { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Git',
            items: [
              { text: 'Repo 初始上 Git 之步驟', link: '/notes/git/repo-init' },
              { text: 'Git 分支系列指令', link: '/notes/git/git-branch' },
              { text: 'Git 清理不必要的檔案', link: '/notes/git/gc' },
            ]
          },
        ]
      },
      {
        text: '興趣',
        collapsed: true,
        items: [
          { text: '美甲',
            items: [
              { text: '美甲課程 （完美單色、卸甲、補甲）', link: '/notes/nails/base-color' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nayuki0115' },
      { icon: 'linkedin', link: 'https://tw.linkedin.com/in/nayuki0115?trk=people-guest_people_search-card' },
    ],

    search: {
      provider: 'local'
    }
  }
})
