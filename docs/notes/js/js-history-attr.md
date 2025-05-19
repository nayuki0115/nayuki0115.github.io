# `history` 物件的常用屬性與方法

###### tags: `JavaScript` `BOM` `history`

## 概述
- **`history` 物件** 是瀏覽器物件模型（BOM）的一部分，屬於 `window.history`
- 它管理瀏覽器的歷史紀錄，讓你查詢歷史狀態或控制頁面導航（前進、後退）
- 屬性少，方法為主要功能，用於操作瀏覽器歷史

## 常用屬性

| 屬性名稱 | 類型 | 描述 | 範例 |
|------------|------------|------------|------------|
| `length` | `number` | 歷史紀錄中的條目數量 | `console.log(history.length)` `// 5`    |
| `state` | `any` | 當前歷史條目的狀態物件（由 `pushState` 或 `replaceState` 設置） | `console.log(history.state)` `//{ page: 1 }` |
| `scrollRestoration` | `string` | 控制頁面載入時的滾動行為（`auto` 或 `manual`） | `history.scrollRestoration = 'manual'` |

## 常用方法

| 方法名稱          | 描述                              | 範例                                  |
|-------------------|-----------------------------------|---------------------------------------|
| `back()`          | 返回歷史紀錄中的上一頁            | `history.back()`                      |
| `forward()`       | 前進到歷史紀錄中的下一頁          | `history.forward()`                   |
| `go(delta)`       | 在歷史紀錄中移動指定步數（正數前進，負數後退） | `history.go(-2)` //回退兩頁 |
| `pushState(state, title, url)` | 新增歷史條目並更改 URL，不重新載入頁面 | `history.pushState({ page: 1 }, '', '/page1')` |
| `replaceState(state, title, url)` | 修改當前歷史條目，不新增紀錄   | `history.replaceState({ page: 2 }, '', '/page2')` |

## 屬性與方法詳解

### `scrollRestoration`
- 值：
  - `auto`: 瀏覽器自動恢復滾動位置（預設）
  - `manual`: 開發者手動控制滾動
- 範例：
```javascript
history.scrollRestoration = 'manual'
window.scrollTo(0, 0) // 自訂滾動位置
```

### `pushState` 與 `replaceState`
- 共同點: 修改 URL 和狀態，不觸發頁面重新載入
- 差異:
`pushState`: 新增一條歷史紀錄，可返回
`replaceState`: 替換當前紀錄，無法返回舊狀態
- 參數:
  - `state`: 自訂狀態物件
  - `title`: 標題（目前瀏覽器多忽略）
  - `url`: 新 URL（相對或絕對）