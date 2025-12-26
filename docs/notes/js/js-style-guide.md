# JavaScript 主流 Coding Style 規範比較

###### tags: `規範` `JavaScript`

## Standard JS ( JavaScript Standard Style )
不用使用設定檔，引入就可以使用  
https://standardjs.com/readme-zhtw.html  

## Google JavaScript Style Guide
注重長期維護性與 JSDoc 註解，Google 內部專案標準  
https://google.github.io/styleguide/jsguide.html  

## Airbnb JavaScript Style Guide
規則最詳盡、嚴謹，React 生態系中最流行的標準
https://javascript.airbnb.tech/

## 三者綜合比較

### 專案特性與適用性
| 特性 | JavaScript Standard Style | Google JavaScript Style Guide | Airbnb JavaScript Style Guide |
| :--- | :--- | :--- | :--- |
| **配置複雜度** | **零配置** (無法修改規則) | 中等 | 高 (可透過 ESLint 高度客製) |
| **嚴格程度** | 最寬鬆 (但在格式上強制) | 中等嚴格 | **最嚴格** (規則數量最多) |
| **主要客群** | 個人開發者、小型專案、開源套件 | Google 內部、Angular 開發者 | **React 開發者**、大型企業團隊 |
| **社群現況** | 社群驅動，擁護者眾多 | 逐漸轉向推廣 TypeScript 規範 | **目前業界主流**，最多人使用 |


### 語法規則細節

| 規則 | JavaScript Standard Style | Google JavaScript Style Guide | Airbnb JavaScript Style Guide |
| :--- | :--- | :--- | :--- |
| **分號 (;)** | **不使用** | 必須使用 | 必須使用 |
| **縮排** | 2 個空格 | 2 個空格 | 2 個空格 |
| **字串引號** | 優先單引號 `'` | 優先單引號 `'` | 優先單引號 `'` |
| **函式後空格** | **有空格** `fn ()` | 無空格 `fn()` | 無空格 `fn()` |
| **箭頭函式** | 單參數**省略**括號 | 單參數**省略**括號 | 參數**一律加上**括號 `(x) =>` |
| **結尾逗號** | **禁止**使用 | 多行時允許 | 多行時**強制**使用 (Dangling comma) |
| **物件大括號** | 必須使用 | 必須使用 | 必須使用 |
| **運算符換行** | 運算符在**新行開頭** | 運算符在**前行結尾** | 運算符在**新行開頭** |
| **命名規範** | 駝峰式 (camelCase) | 駝峰式 (私有變數結尾加 `_`) | 駝峰式 (常數全大寫 `CONST_VAR`) |