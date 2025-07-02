import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid"

const mainSidebar = [
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
          { text: '瀏覽器物件模型（BOM） ', link: '/notes/js/js-bom' },
          { text: 'JS 事件屬性清單', link: '/notes/js/js-event-attribute' },
          { text: 'Window 物件的常用屬性與方法', link: '/notes/js/js-window-attr' },
          { text: 'History 物件的常用屬性與方法', link: '/notes/js/js-history-attr' },
          { text: 'JS 比較值的三種方式', link: '/notes/js/js-compare-value' },
          { text: 'JS preventDefault 和 stopPropagation 的差異', link: '/notes/js/js-stop-event.md' },
          { text: 'JS 日期處理與格式化', link: '/notes/js/js-date-format' },
          { text: 'JS 複製至剪貼簿', link: '/notes/js/js-clipboard' },
          { text: 'JS 字串處理', link: '/notes/js/js-handle-string' },
          { text: 'JS 滾動視窗', link: '/notes/js/origin-js-scroll' },
          { text: 'JS 數字千分位', link: '/notes/js/js-comma' },
          { text: 'JS 解析網址 / 處理網址', link: '/notes/js/js-url-handle' },
          { text: 'JS 社群分享', link: '/notes/js/js-social-share' },
        ]
      },
      {
        text: 'TypeScript',
        collapsed: true,
        items: [
          { text: 'JavaScript 和 TypeScript 型別', link: '/notes/ts/ts-and-js-type' },
        ]
      },
      {
        text: 'Vue',
        collapsed: true,
        items: [
          { text: 'Vue 開發風格指南', link: '/notes/vue/vue-coding-guide' },
          { text: 'Vue 3 雙向綁定以及 component 包裝注意事項', link: '/notes/vue/vue3-model-value' },
          { text: 'Vue 3 的響應式 API 比較', link: '/notes/vue/vue3-ref-compare' },
          { text: 'Vue 修飾符', link: '/notes/vue/vue-modifier' },
          { text: 'Vue 3 setup 中取得 DOM 實體的方法', link: '/notes/vue/vue-dom' },
          { text: 'Vue 寫視窗滾動原生事件', link: '/notes/vue/windows' },
          { text: 'Vue Watch', link: '/notes/vue/vue-watch' },
          { text: 'Vue Transition', link: '/notes/vue/vue-transition' },
          { text: 'Vue 3 Teleport', link: '/notes/vue/vue-teleport' },
          { text: 'Vue $attrs 用法', link: '/notes/vue/vue-attrs' },
          { text: 'Vue Computed 用法', link: '/notes/vue/vue-computed' },
        ]
      },
      {
        text: 'Nuxt',
        collapsed: true,
        items: [
          { text: 'Nuxt SEO 設定', link: '/notes/nuxt/nuxt-seo' },
          { text: 'Nuxt3 SSR 出現 500 可能的問題', link: '/notes/nuxt/nuxt3-ssr-500' },
        ]
      },
      {
        text: 'React',
        collapsed: true,
        items: [
          { text: '使用 Vite 建立 React 專案', link: '/notes/react/react-init-project' },
          { text: 'React 中取得 DOM 實體的方法', link: '/notes/react/react-dom' },
          { text: '讓父層可以使用子層的內容 - forwardRef 和 useImperativeHandle', link: '/notes/react/react-forwardref' },
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
        text: 'Design',
        collapsed: true,
        items: [
          { text: '程式碼美圖產生器', link: '/notes/design/code-aesthetic-image-generator' },
          { text: 'UI 設計 / 切版 會用到的產生器', link: '/notes/design/ui-design-mockup-gen' },
          { text: 'SVG 產生器', link: '/notes/design/svg-gen' },
          { text: 'RWD 和 AWD ', link: '/notes/design/rwd-awd' },
        ]
      },
      {
        text: 'Web Development',
        collapsed: true,
        items: [
          { text: '技術電子報', link: '/notes/web-development/technology-newsletter' },
          { text: 'MIME types', link: '/notes/web-development/mime' },
          { text: '常用類型測試用檔案', link: '/notes/web-development/file-types-testing' },
          { text: 'RWD (Responsive Web Design) 和 AWD (Adaptive Web Design) ', link: '/notes/web-development/rwd-awd-diff' },
          { text: 'Git Commit 規範', link: '/notes/web-development/git-commit' },
          { text: 'Branch 命名規範', link: '/notes/web-development/branch-name' },
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: 'Repo 初始上 Git 之步驟', link: '/notes/git/repo-init' },
          { text: 'Git 分支系列指令', link: '/notes/git/git-branch' },
          { text: 'Git 清理不必要的檔案', link: '/notes/git/gc' },
          { text: '建立 SSH Key', link: '/notes/git/git-ssh' },
        ]
      },
      {
        text: '主題系列',
        collapsed: true,
        items: [
          { text: '瀏覽器 Devtool', link: '/notes/browser-devtool/introduce' },
          { text: 'WebConf 2024', link: '/notes/webconf-2024/rxjs' },
        ]
      }
    ]
  },
  {
    text: '興趣',
    collapsed: true,
    items: [
      {
        text: '美甲',
        items: [
          { text: '完美單色、卸甲、補甲', link: '/notes/nails/base-color' },
          { text: '磨甲機、星空貼、鏡面粉', link: '/notes/nails/nail-grinder' },
          { text: '指模延甲、暈染技法', link: '/notes/nails/nail-lengthen' },
        ]
      },
    ]
  }
]

// 瀏覽器 Devtool 專屬 Sidebar
const browserDevtoolSidebar = [
  {
    text: '瀏覽器 Devtool',
    items: [
      { text: '介紹', link: '/notes/browser-devtool/introduce' },
      { text: 'Elements 面板', link: '/notes/browser-devtool/elements' },
      // { text: 'Console 的使用方法', link: '/browser-devtool/console' },
      // { text: 'Network 面板介紹', link: '/browser-devtool/network' },
      // { text: 'Performance 面板', link: '/browser-devtool/performance' },
      // { text: 'Sources 面板', link: '/browser-devtool/sources' },
      // { text: 'Application 面板', link: '/browser-devtool/application' },
    ]
  }
];

// WebConf2024
const webConf2024Sidebar = [
  {
    text: 'WebConf2024',
    items: [
      { text: '有限狀態機與 RxJS - 奶綠茶', link: '/notes/webconf-2024/rxjs' },
      { text: '個人專案到產品：善用 AI 工具打造可盈利產品 - 王鵬傑 PJ Wang', link: '/notes/webconf-2024/ai-tool' },
      { text: '從技術專才到領導者: 1 到 100 人的管理之路 - Singz Hsieh', link: '/notes/webconf-2024/org-management' },
      { text: '來一場兼顧程式碼品質以及開發效率的 Code Review - Fin', link: '/notes/webconf-2024/code-review' },
      { text: '產品 AI 整合路徑：分階段為現有產品找到最佳 AI 整合方案 - 林威宇', link: '/notes/webconf-2024/ai-integration-solutions' },
      { text: 'AI、Data 與 Web，跨領域的資料科學工作者之路 - 維元', link: '/notes/webconf-2024/ai-data-web-career-path' },
      { text: 'AI+商業思維：軟體工程師如何擁抱趨勢，提升職場價值 - 游舒帆', link: '/notes/webconf-2024/ai-business-thinking' },
      { text: '談組織內部的產品創業：由技術選型、優劣勢分析、階段性目標再到團隊設計 - 高玉璁 Samuel', link: '/notes/webconf-2024/internal_product_startup_strategy' },
      { text: '擁抱漸進式體驗 — 設計驅動企業改革動能 - 郭藺瑩 Lydia Kuo', link: '/notes/webconf-2024/progressive-experience-design' },
      { text: 'Flex out！ CSS Grid 玩起來！ - 李建杭 Amos', link: '/notes/webconf-2024/css-grid' },
      { text: '從零到頂尖：無懈可擊的網頁設計 - 設計師勞哥', link: '/notes/webconf-2024/web-design' },
      { text: '當 Vue 與 View 分手之後⋯ - Kuro Hsu', link: '/notes/webconf-2024/vue-view' },
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig(
    {
      title: "Annie's Notes",
      description: "Annie's front-end notes and records of various interests",
      lang: 'zh-Hant',
      base: '/nayuki0115.github.io/',
      lastUpdated: true,
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Notes', link: '/notes/js/js-handle-string' }
        ],
        outline: [2, 3],
        sidebar: {
          '/': mainSidebar, // 其他路徑的 Sidebar
          '/notes/browser-devtool/': browserDevtoolSidebar, // 對應 瀏覽器 Devtool 的專屬 Sidebar
          '/notes/webconf-2024/': webConf2024Sidebar, // 對應 WebConf2024 Sidebar
        },
        // sidebar: mainSidebar,
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
)
