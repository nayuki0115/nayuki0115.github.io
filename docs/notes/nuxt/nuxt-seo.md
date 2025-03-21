#  SEO 及 Nuxt 設定

###### tags: `Nuxt` `SEO`

## SEO 是什麼
SEO是指搜索引擎優化（Search Engine Optimization）的縮寫。它是一種手段或策略，旨在通過提高網站在搜索引擎結果頁（SERP）中的排名，從而增加有機搜索流量和網站的可見性。

通過使用SEO技術，你可以對網站進行優化，以使其在搜索引擎中更容易被發現和理解。這包括對網站的內容進行關鍵字研究和優化，改善網頁結構和頁面速度，增加內部和外部鏈接，以及優化技術性因素。

SEO的目的是將你的網站排名提高到搜索結果的前幾頁，這樣當用戶搜索與你的業務相關的關鍵字時，他們更有可能訪問你的網站。通過適當的SEO策略，你可以增加網站的曝光率，吸引更多的訪問者，並最終實現您的業務目標。

## Meta
https://www.w3schools.com/tags/tag_meta.asp  
HTML meta tag 是 HTML 中的一種標籤（tag），用於提供有關網頁的元數據（metadata）。元數據是指描述網頁內容、屬性和其訊息的數據，而不是直接顯示在網頁上的內容。

HTML meta tag 通常包含在 `<head>` 標籤中，它不會直接影響網頁的顯示，而是提供有關網頁的一些描述訊息，以及一些指示給瀏覽器和搜索引擎的提示。一些常見的 HTML meta tag 屬性包括：

* charset：指定網頁的字符編碼，如 UTF-8。
* viewport：用於指定在移動設備上顯示網頁的視口大小和縮放比例。
* description：提供網頁的描述，通常用於搜索引擎顯示搜索結果中的描述。
* keywords：指定與網頁相關的關鍵字，但現在大多數搜索引擎不再將關鍵字作為排名因素。
* author：指定網頁的作者。
* robots：用於控制搜索引擎爬蟲的行為，如禁止爬蟲訪問特定頁面或不跟隨鏈接。
* canonical：指定網頁的正規URL，有助於解決重複內容的問題。
* og:title、og:description、og:image：用於 Open Graph 協議，提供在社交媒體上分享時使用的標題、描述和圖像。

```html=
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="This is an example description of the web page.">
      <meta name="keywords" content="HTML, meta tag, metadata, description, keywords">
      <meta name="author" content="John Doe">
      <meta name="robots" content="index, follow">
      <meta property="og:title" content="Example Website">
      <meta property="og:description" content="This is an example description of the web page for Open Graph.">
      <meta property="og:image" content="https://example.com/image.jpg">
      <title>Example Website</title>
  </head>
  <body>
      <!-- 內容 -->
  </body>
</html>

```
這些 meta tag 提供了關於網頁的基本描述、作訊息、以及在搜索引擎和社交媒體分享時使用的訊息。


  
## robots.txt

robots.txt 是一個用於控制網絡爬蟲（也稱為機器人或蜘蛛）訪問網站的文本文件。當機器人訪問網站時，它會首先查看該網站的 robots.txt 文件，以確定哪些部分的網站是允許或禁止訪問的。

簡單來說，robots.txt 提供了一種方法讓網站管理者向搜索引擎和其他網絡爬蟲指示哪些頁面可以訪問，哪些頁面應該被忽略。這有助於控制搜尋引擎爬蟲對網站的訪問，以確保只有合適的頁面被收錄。

robots.txt 文件位於網站的根目錄下。例如，對於一個網站 example.com，它的 robots.txt 文件的位置通常是 example.com/robots.txt。

> 禁止所有爬蟲訪問 example.com/private/ 下的所有頁面
```
User-agent: [爬蟲名稱]
Disallow: [禁止訪問的URL路徑]
```
  
* User-agent 定義了要設置規則的爬蟲的名稱。通常會使用星號 * 來表示所有的爬蟲，或者指定特定的爬蟲名稱。
* isallow 指定了不允許被訪問的URL路徑。如果設置為 /，則表示禁止爬蟲訪問整個網站；如果設置為特定的路徑，則表示禁止爬蟲訪問該路徑下的頁面。
  
robots.txt 文件僅僅是給搜尋引擎和其他爬蟲參考的建議，而不是強制規定
  
### robots.txt 工具
* [Google Search Console](https://search.google.com/search-console/welcome?utm_source=about-page)


## Open Graph (OG)
https://ogp.me/ 
> Open Graph 並不是 SEO Ranking Factor

### 什麼是 Open Graph (OG)
Open Graph (OG) 是一個由Facebook開發的協議，用於在社交網絡上展示網頁的元數據。它通過在網頁的 HTML 標記中添加特定的標籤，使網站能夠將關於網頁的資訊（如標題、縮略圖、描述等）分享到Facebook和其他社交媒體平台上

### 使用Open Graph (OG) 有以下幾個好處：
1. 提高網頁的社交分享效果：透過Open Graph (OG) 標籤，您可以控制在社交媒體平台上分享網頁時的呈現效果。這包括顯示正確的標題、描述和圖像，從而增加分享的曝光度和點擊率。

2. 客製化分享內容：您可以通過Open Graph (OG) 標籤設置您希望在社交媒體上展示的特定內容，這樣可以更好地吸引用戶並傳遞您想要分享訊息。

3. 提升搜索引擎優化：使用Open Graph (OG) 可以改善您的網站在搜索引擎結果頁面上的展示方式，提高可見性和點擊率。

總結一下，使用Open Graph (OG) 可以增加社交媒體分享的效果，提升網站的可見性和點擊率，進而幫助您更好地傳訊息並增加網站的流量。

### 常用的 Open Graph (OG)

```
<meta property="og:xxx" content="對應內容" />
```

> 可參考： https://developers.facebook.com/docs/sharing/webmasters?locale=zh_TW
* og:title
```
<meta property="og:title" content="og標題" />
```
* og:url
```
<meta property="og:url" content="og url" />
```
* og:description
```
<meta property="og:description" content="og描述" />
```
* og:image
```
<meta property="og:image" content="image網址" />
```
臉書 Facebook 圖片尺寸大全：https://medium.com/chigyosha/facebook-photos-size-guide-2018-557eb3ee9c1b
* og:type
```
<meta property="og:type" content="website" />
```
type 內容可參考：https://ogp.me/#types 


### Open Graph (OG) 工具
*  Meta Sharing Debugger（臉書分享偵錯工具）
https://developers.facebook.com/tools/debug/?locale=zh_TW
*  LINE Page Poker
https://poker.line.naver.jp/
*  Twitter 
https://cards-dev.twitter.com/validator

## 如何不被搜到？
使用 noindex

```
<meta name="robots" content="noindex">
```
[Nuxt 2 設定](https://hackmd.io/006ITw0LTh6JPsLRmcBh_Q?both#Nuxt-2-%E8%A8%AD%E5%AE%9A2)
[Nuxt 2 設定](https://hackmd.io/006ITw0LTh6JPsLRmcBh_Q?both#Nuxt-2-%E8%A8%AD%E5%AE%9A2)

## Nuxt 設定

> Nuxt 3 https://nuxt.com/docs/getting-started/seo-meta
> Nuxt 2 https://v2.nuxt.com/docs/features/meta-tags-seo/

### 全域

#### Nuxt 3 設定

> nuxt.config.js
```
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
```

> app.vue
```
<script setup lang="ts">
  useHead({
    title: 'My App',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })
</script>

```



#### Nuxt 2 設定

> nuxt.config.js
```
export default {
  head: {
    meta: [
      // social media
      { hid: 'og:url', property: 'og:url', content: '/' },
      { hid: 'og:title', property: 'og:title', content: 'XXXX'},
      { hid: 'og:description', property: 'og:description', content: 'XXXX'},
      { hid: 'og:image', property: 'og:image', content: process.env.VUE_APP_ROOT_URL + '/images/social-media.png'},
    ]
  }
}
```
避免子元件中的 meta 標籤不能正確覆蓋父元件中相同的標籤而產生重複的現象，需使用hid：https://www.nuxtjs.cn/faq/duplicated-meta-tags


### 單頁

#### Nuxt 3 設定
> useHead 為 Nuxt 3 Composables  
> https://nuxt.com/docs/api/composables/use-head

```
useHead({
  title: 'Nuxt 3 title',
})


const route = useRoute()
useHead({
  meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
})
```

> useSeoMeta 為 Nuxt 3 Composables  
> https://nuxt.com/docs/api/composables/use-seo-meta

```
useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})
```

#### Nuxt 2 設定

> useMeta 為  Nuxt Composition API 的功能之一  
> https://composition-api.nuxtjs.org/packages/usemeta/
```
useMeta(
  {
    meta: [
      { hid: 'og:url', property: 'og:url', content: root.$config.baseURL + '/about' },
      { hid: 'og:title', property: 'og:title', content: pageTitle + ' | XXXX'},
      { hid: 'og:description', property: 'og:description', content: 'XXXX'},
      { hid: 'og:image', property: 'og:image', content: 'XXXX'},
    ]
  },
)
```

```
useMeta(() => ({ hid: 'og:title', property: 'og:title', content: pageTitle + ' | XXXX' }))
```




Nuxt 3 設定
### Noindex

#### Nuxt 3 設定

```
useHead({
  meta: [{ name: 'robots', content: 'noindex' }]
})
```
> https://nitro.unjs.io/config
```
export default defineNuxtConfig({
  routeRules: {
    '/about': { robots: 'noindex' },
  }
})
```

#### Nuxt 2 設定
> nuxt.config.js 
```
export default {
  head: {
    meta: [
      { name: 'robots', content: 'noindex'}

    ]
  }
}
```



### 套件
* nuxt-og-image 自動產生連結縮圖 OG Image
Nuxt 2、Nuxt 3 皆可使用
https://github.com/nuxt-modules/og-image?tab=readme-ov-file
可參考： https://ithelp.ithome.com.tw/articles/10333611?sc=rss.iron

* @nuxtjs/robots
Nuxt 3
https://github.com/nuxt-modules/robots




### 參考文章 
* https://frankchiu.io/seo-open-graph/
* https://www.tsg.com.tw/blog-detail4-292-1-open-graph.htm
* https://welly.tw/serp-rank-optimization/what-is-seo