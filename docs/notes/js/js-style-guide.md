# JavaScript 主流 Coding Style 規範比較

###### tags: `規範` `JavaScript`

## Standard JS ( JavaScript Standard Style )
不用使用設定檔，引入就可以使用。並且「不使用分號」  
https://standardjs.com/readme-zhtw.html  

## Google JavaScript Style Guide
注重長期維護性與 JSDoc 註解，Google 內部專案標準  
https://google.github.io/styleguide/jsguide.html  

## Airbnb JavaScript Style Guide
規則最詳盡、嚴謹，是目前現代 Web 開發（特別是 React）的業界標準
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
| **分號 ``(;)``** | **不使用** | 必須使用 | 必須使用 |
| **縮排** | 2 個空格 | 2 個空格 | 2 個空格 |
| **字串引號** | 優先單引號 `'` | 優先單引號 `'` | 優先單引號 `'` |
| **函式後空格** | **有空格** `fn ()` | 無空格 `fn()` | 無空格 `fn()` |
| **箭頭函式** | 單參數**省略**括號 | 單參數**省略**括號 | 參數**一律加上**括號 `(x) =>` |
| **結尾逗號** | **禁止**使用 | 多行時允許 | 多行時**強制**使用 (Dangling comma) |
| **物件大括號** | 必須使用 | 必須使用 | 必須使用 |
| **運算符換行** | 運算符在**新行開頭** | 運算符在**前行結尾** | 運算符在**新行開頭** |
| **命名規範** | 駝峰式 (camelCase) | 駝峰式 (私有變數結尾加 `_`) | 駝峰式 (常數全大寫 `CONST_VAR`) |

## 程式碼範例對照
### 分號使用
```javascript
// Standard Style (No Semicolon)
let name = 'John'
function greet () {
  console.log('Hello')
}

// Google / Airbnb Style (With Semicolon)
let name = 'John';
function greet() {
  console.log('Hello');
}
```

### 縮排 (Tabs / Indent)
三者均達成共識：使用 2 個空格。
```javascript
function example() {
  if (true) {
    console.log('Indented with 2 spaces')
  }
}
```

### 引號(Quotes)
```javascript=
// Standard / Google / Airbnb (優先使用 Single Quote)
let str = 'Hello'
let template = `Value: ${str}`
```

### 函式與括號空格 (Space before function paren)
這是 Standard Style 最具辨識度的差異  
```javascript
// Standard Style (名稱與括號間有空格)
function calculateTotal () { ... }

// Google / Airbnb Style (無空格)
function calculateTotal() { ... }
```

### 箭頭函式 (Arrow Functions)
```javascript
// Standard / Google Style (單參數可省略括號)
const add = x => x + 1
const multiply = (x, y) => x * y

// Airbnb Style (現代規範：無論幾個參數一律加括號)
const add = (x) => x + 1
const multiply = (x, y) => x * y
```

### 保留關鍵字/運算符換行 (Operator Line Break)
```javascript
// Standard / Airbnb Style (運算符在新行開始)
const result = someVeryLongFunctionName()
  + anotherLongVariable

// Google Style (運算符在當前行結尾)
const result = someVeryLongFunctionName() +
    anotherLongVariable
```

### 結尾逗號 (Trailing Commas)
```javascript
// Standard Style (No Trailing Comma)
const arr = [1, 2, 3]
const obj = {
  a: 1,
  b: 2
}

// Google / Airbnb Style (多行時必須/建議加上逗號)
const arr = [1, 2, 3,]
const obj = {
  a: 1,
  b: 2,
}
```

### 命名規範 (Naming Convention)
```javascript=
// Standard Style (Pure Camel Case)
let userName = 'John'
function calculateTotal() {}

// Google Style (Private with Underscore)
let _privateVar = 'secret'
function _privateMethod() {}

// Airbnb Style (Constants UPPER_CASE)
const MAX_COUNT = 100
let userName = 'John'
```


## 參考文件
- [Airbnb JavaScript Style Guide (Github)](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [JavaScript Standard Style](https://standardjs.com/)
- [ESLint 官方網站](https://eslint.org/)
- [成為資深前端工程師的第一步 JavaScript Best Practice](https://medium.com/hannah-lin/%E6%88%90%E7%82%BA%E8%B3%87%E6%B7%B1%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AD%A5-javascript-best-practice-3f88d0d37035)
- [透過 ESLint 學習 JavaScript ES6](https://idoc.hexschool.com/tobejsfighter/2018-01-01-javascript-eslint.html)
  