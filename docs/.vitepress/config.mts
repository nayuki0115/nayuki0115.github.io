import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Annie's Notes",
  description: "Annie's front-end notes and records of various interests",
  lang: 'zh-Hant',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Notes', link: '/notes/js/js-handle-string' }
    ],
    outline: [2, 3] ,
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
            collapsed: true,
            items: [
              { text: 'JS 字串處理', link: '/notes/js/js-handle-string' },
              { text: 'JS 比較值的三種方式', link: '/notes/js/js-compare-value' },
              { text: 'JS 日期處理與格式化', link: '/notes/js/js-date-format' },
              { text: 'JS preventDefault 和 stopPropagation 的差異', link: '/notes/js/js-stop-event.md' },
              { text: 'JS 滾動視窗', link: '/notes/js/origin-js-scroll' },
              { text: 'JS 數字千分位', link: '/notes/js/js-comma' },
              { text: 'JS 解析網址 / 處理網址', link: '/notes/js/js-url-handle' },
              { text: 'JS 社群分享', link: '/notes/js/js-social-share' },
            ]
          },
          {
            text: 'Vue',
            collapsed: true,
            items: [
              { text: 'Vue 3 雙向綁定以及 component 包裝注意事項', link: '/notes/vue/vue3-model-value' },
              { text: 'Vue 3 的響應式 API 比較', link: '/notes/vue/vue3-ref-compare' },
              { text: 'Vue 修飾符', link: '/notes/vue/vue-modifier' },
              { text: 'Vue 寫視窗滾動原生事件', link: '/notes/vue/windows' },
              { text: 'Vue Watch', link: '/notes/vue/vue-watch' },
              { text: 'Vue Transition', link: '/notes/vue/vue-transition' },
              { text: 'Vue $attrs 用法', link: '/notes/vue/vue-attrs' },
              { text: 'Vue Computed 用法', link: '/notes/vue/vue-computed' },
              { text: 'Nuxt SEO 設定', link: '/notes/vue/nuxt-seo' },
              { text: 'Nuxt3 SSR 出現 500 可能的問題', link: '/notes/vue/nuxt3-ssr-500' },
            ]
          },
          {
            text: 'HTML',
            collapsed: true,
            items: [
              { text: 'input type 和 inputmode 與 enterkeyhint', link: '/notes/html/input-keyboard-mode' },
            ]
          },
          {
            text: 'CSS',
            collapsed: true,
            items: [
              { text: '滾動視窗 smooth 的方法', link: '/notes/css/windows-scroll' },
              { text: '用 CSS 做螢光筆的效果', link: '/notes/css/highlighter-pen' },
              // { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Web Development',
            collapsed: true,
            items: [
              { text: 'MIME types', link: '/notes/web-development/mime' },
            ]
          },
          {
            text: 'Git',
            collapsed: true,
            items: [
              { text: 'Repo 初始上 Git 之步驟', link: '/notes/git/repo-init' },
              { text: 'Git 分支系列指令', link: '/notes/git/git-branch' },
              { text: 'Git 清理不必要的檔案', link: '/notes/git/gc' },
              { text: 'Gitlab SSH', link: '/notes/git/git-ssh' },
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
              { text: '完美單色、卸甲、補甲', link: '/notes/nails/base-color' },
              { text: '磨甲機、星空貼、鏡面粉', link: '/notes/nails/nail-grinder' },
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
      provider: 'local',
    },
    footer: {
      copyright: 'Copyright © 2024-present <a href="https://github.com/nayuki0115">Annie Wu</a>'
    }
  }
})
