# 當 Vue 與 View 分手之後⋯ - Kuro Hsu

###### tags: `WebConf2024`

## @vue/reactivity



### effect 管理渲染畫面更新

![image](https://hackmd.io/_uploads/By9KdZ9Uke.png)
https://stackblitz.com/edit/vitejs-vite-jntohn4e?file=src%2Fmain.js

單純處理狀態與事件流，不需要渲染畫面
```javascript=
import { reactive, effect } from @vue/reactivity';
import WebSocket from 'ws';
const state = reactive({ message: '' });

const ws = new WebSocket('ws://example.com');

ws.on('message', (data) => {
  state.message = data; // 更新應式狀態
})；

effect(()=> {
  //當state, message改變時，觸發這個effect
  console.log( New message: ${state.message}');
});
```

### @vue/reactivity 是什麼？
- Vue.js 將其響應式系統抽離出來，變成一個獨立套件 @vue/reactivity
- 即使不安裝 Vue 也能單獨使用 Vue 所提供的響應式狀態 API.
- effect() 用來管理畫面渲染更新，原理類似 Vue 的 watchEffect()
- 當 effect 函數首次被調用時，會自動追蹤內部所有的響應式狀態，當狀態被修改時，會觸發effect 函數重新執行
https://github.com/vuejs/core/tree/main/packages/reactivity

可以和其他框架一起用 （講者舉例：react、websocket）

#### 基本概念和用法
```typescript=
import { ref, reactive, effect, computed } from '@vue/reactivity'

// 1. 基本使用
const count = ref(0)
const state = reactive({
  name: 'John',
  age: 25
})

// 2. 監聽變化
effect(() => {
  console.log(`count is: ${count.value}`)
  console.log(`name is: ${state.name}`)
})

// 3. 計算屬性
const doubleCount = computed(() => count.value * 2)
```

### 與其他 signals 的比較
![1344413_0](https://hackmd.io/_uploads/HkHh0V5Lke.jpg)
![1344414_0](https://hackmd.io/_uploads/B1vWyr58kl.jpg)



| 特性 | @vue/reactivity | SolidJS Signals | Svelte 5 Signals | Angular Signals |
| :---: | --- | --- | --- | --- |
| 核心 API | `reactive`, `ref`, `computed`, `effect` | `createSignal`, `createEffect` | `(Runes)` | `signal`, `computed`, `effect` |
| 依賴追蹤 | 自動追蹤依賴 | 自動追蹤依賴 | 編譯時分析依賴 | 自動追蹤依賴 |
| 讀寫方式 | .value (ref) | Getter/Setter 分離 | $ 符號操作 | Getter/Setter 分離 + update 方法 |
| 深層結構支援 | 支援深層物件結構 | 不直接支援，需要手動管理 | 編譯時優化，支援深層結構 | 支援深層結構 |
| 運行時 vs 編譯時 | 運行時 | 運行時 | 編譯時 | 編譯時 |

## Vapor Mode 是什麼？
- 受到 SolidJS 與 Svelte 的啟發，不使用 Virtual DOM 的編譯策略。
- 目標是讓 Vue.js 更快速且輕量，更容易維護。
- 採用 @vue/reactivity 作為核心，追蹤狀態變化後重新渲染畫面。
- 減少打包後的檔案大小
  - 去除了 vDOM 的抽象層，直接操作 DOM，降低記憶體消耗也提升執行效能
  - 相較於傳統 vDOM 模式，打包後可減少 33.6% 的檔案大小

### 現行 Vue 更新策略 (vDOM)
包含 ref data 的 div 會重新渲染

![image](https://hackmd.io/_uploads/SkDNzS98yg.png)
![image](https://hackmd.io/_uploads/H1faQScI1x.png)
[demo](https://vapor-repl.netlify.app/#__VAPOR__eNp9UsFu2zAM/RVOOzgBEhvDdgrcbF3RYt2hKbqhu+ji2kyiTpYESfY8GP73UfKceW1RA4YsPj7y8dE9OzcmbRtkG5a70grjwaFvDMhCHc44846zLVeiNtp66MHifgUH9BeNtaj8tXK+UCXCAHura0ioVMIVV6UmBGp3gLPAWSRfUEoNP7SV1ZtkyVWWwSfv1tgZLP0ardV2Ygl3X1A7Yj5vtFimbQC5yrNRL6mji8fayMIj3QDy47tt38fuw5BndItREw+A+/Pb3R3kDyFn6vURkt1NAhs6rq6SSHsYWdlIy4UyjYd2XesKJTlD1TmDjMA8m3VnKyZUhV169LWcuep/GwwsXTUSo6dBSnhO3pYWqUbUQ1uZW5rFmcnYJ5yQNial2d9FzpL+r7egd5nWulF+kbwtjEmWJwvzSrQgKtJHcRKXZxTY0ije0Ur24pA+Oq1omj5U56zUtRES7c54QSvjbAMRCVhBe/71Nca8bXA1xcsjlj9fiD+6LsQ4u7Xo0LZkzgnzhaVfYIQvv91gR98ncLLyFfAOnZZN0DimfW5URbJneVHtdXRTqMN3d9l5VG4aKggNmUPM54z8vXhl9H9y36cfIo+rgQ1/AI1HHRM=)

使用傳統的 Vue 會整個重新渲染，Vue Vapor 的不會，可以單獨更新 data

### 結論
- vDOM的優勢在於抽象化，讓開發者可以更方便，而不需要手動操作DOM
- 抽象化也帶來了額外的執行耗損，例如記憶體與執行效能的影嚳，尤其在大型專案中，這些問題會逐漸被放大
- Vapor Mode則是找到一個平衡點，讓開發者可以繼續在Vue.js的API與模板語法的基礎上移除vDOM的操作
- 因為少了 vDOM 相關程式碼，也減少了執行階段的開銷以及打包後的檔案大小
- 除了不支援Options API之外，沒有產生任何Breaking Changes!

:::danger
WARNING: Vapor Mode 還在開發階段
:::

### 如何使用 Vue Vapor
- 目前 Vue Vapor 還沒有正式發布，可直接在 [Vue Vapor SFC Playground](https://vapor-repl.netlify.app/#__VAPOR__eNp9UsFu2zAM/RVOOzgBEhvDdgrcbF3RYt2hKbqhu+ji2kyiTpYESfY8GP73UfKceW1RA4YsPj7y8dE9OzcmbRtkG5a70grjwaFvDMhCHc44846zLVeiNtp66MHifgUH9BeNtaj8tXK+UCXCAHura0ioVMIVV6UmBGp3gLPAWSRfUEoNP7SV1ZtkyVWWwSfv1tgZLP0ardV2Ygl3X1A7Yj5vtFimbQC5yrNRL6mji8fayMIj3QDy47tt38fuw5BndItREw+A+/Pb3R3kDyFn6vURkt1NAhs6rq6SSHsYWdlIy4UyjYd2XesKJTlD1TmDjMA8m3VnKyZUhV169LWcuep/GwwsXTUSo6dBSnhO3pYWqUbUQ1uZW5rFmcnYJ5yQNial2d9FzpL+r7egd5nWulF+kbwtjEmWJwvzSrQgKtJHcRKXZxTY0ije0Ur24pA+Oq1omj5U56zUtRES7c54QSvjbAMRCVhBe/71Nca8bXA1xcsjlj9fiD+6LsQ4u7Xo0LZkzgnzhaVfYIQvv91gR98ncLLyFfAOnZZN0DimfW5URbJneVHtdXRTqMN3d9l5VG4aKggNmUPM54z8vXhl9H9y36cfIo+rgQ1/AI1HHRM=) 線上體驗 Vue Vapor

Vue Vapor SFC Playground 右上角的按鈕去切換 on off
![image](https://hackmd.io/_uploads/BJJpiHqU1l.png)

可以對照開關後的 JS 長什麼樣子
![image](https://hackmd.io/_uploads/BJaJ3Bc8yx.png)
開啟 vapor mode 後，不用使用 v-node 中間這一層轉換，跟原生的 DOM API 很接近

Vue/Vapor Template 編譯後的結果比較
![image](https://hackmd.io/_uploads/HJxInr5UJx.png)

以前的版本會看到很多 createElementVNode()

![image](https://hackmd.io/_uploads/rkjU3Bq8Jg.png)

Vapor 很直觀 template 會提前抽取出來，要 render 的時候才呼叫


- 或者先從 Vue 官方成員 sxzz 的 [vue-vapor-starter](https://github.com/sxzz/vue-vapor-starter) 專案中，先來體驗看看
```script=
# 為 Typescript 專案模板，可建立新專案
npx degit sxzz/vue-vapor-starter my-vapor-project

# 或者使用我修改過的 Javascript 版本
npx degit kurotanshi/vue-vapor-starter my-vapor-project
```
  - 進入專案資料夾後，先安裝相關套件即可啟動
```script=
cd my-vapor-project
npm i 
npm run dev
```

### Vue/Vapor 幾個常見的底層 API
![1344422_0](https://hackmd.io/_uploads/Syds2HqUyg.jpg)


## 沒有 vDOM 的前端框架是否是未來趨勢
vDOM 效能變更好，網頁節點太多的話，感受會不好

virtual dom 來自 React

Vue 若少了這個包袱可能成為未來趨勢