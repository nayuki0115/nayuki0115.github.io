# `window` 物件的常用屬性與方法

###### tags: `JavaScript` `BOM` `window`

## 概述
- **`window` 物件** 是瀏覽器物件模型（BOM）的核心，代表整個瀏覽器視窗
- 屬性描述狀態，方法執行操作，以下用表格整理常用項目

## 常用屬性

| 屬性名稱               | 類型       | 描述                           | 範例                                   |
|-----------|------------|-----------|-----------|
| `innerWidth`         | `number`   | 視窗內容區域的寬度 | `console.log(window.innerWidth)`       |
| `innerHeight`        | `number`   | 視窗內容區域的高度             | `console.log(window.innerHeight)`      |
| `outerWidth`         | `number`   | 視窗總寬度（含邊框）           | `console.log(window.outerWidth)`       |
| `outerHeight`        | `number`   | 視窗總高度              iwn        | `console.log(window.outerHeight)`      |
| `screenX / screenLeft` | `number` | 視窗左邊相對螢幕 X 座標       | `console.log(window.screenX)`          |
| `screenY / screenTop` | `number`  | 視窗頂部相對螢幕 Y 座標       | `console.log(window.screenY)`          |
| `document`           | `Document` | DOM 入口                      | `window.document.title = '新標題'`     |
| `location`           | `Location` | 當前 URL 資訊                 | `console.log(window.location.href)`    |
| `history`            | `History`  | 歷史紀錄物件                  | `window.history.back()`                |
| `navigator`          | `Navigator`| 瀏覽器與設備資訊              | `console.log(window.navigator.userAgent)` |
| `screen`             | `Screen`   | 螢幕資訊                      | `console.log(window.screen.width)`     |
| `localStorage`       | `Storage`  | 本地儲存                      | `window.localStorage.setItem('key', 'value')` |
| `sessionStorage`     | `Storage`  | 會話儲存                      | `window.sessionStorage.getItem('key')` |
| `scrollX / pageXOffset` | `number`| 水平滾動距離                  | `console.log(window.scrollX)`          |
| `scrollY / pageYOffset` | `number`| 垂直滾動距離                  | `console.log(window.scrollY)`          |
| `closed`             | `boolean`  | 視窗是否關閉                  | `console.log(popup.closed)`            |
| `opener`             | `Window`   | 開啟當前視窗的父視窗          | `console.log(window.opener)`           |
| `name`               | `string`   | 視窗名稱                      | `window.name = 'myWindow'`             |
| `self`               | `Window`   | 當前視窗                      | `console.log(window.self === window)`  |
| `top`                | `Window`   | 最頂層視窗                    | `console.log(window.top)`              |
| `parent`             | `Window`   | 父視窗                        | `console.log(window.parent)`           |

## 常用方法

| 方法名稱               | 描述                              | 範例                                           |
|------------------------|-----------------------------------|------------------------------------------------|
| `alert(message)`     | 顯示警告彈窗                      | `window.alert('Hello')`                        |
| `confirm(message)`   | 顯示確認對話框，回傳 `boolean`    | `if (window.confirm('確定嗎？')) { console.log('Yes') }` |
| `prompt(message, default)` | 顯示輸入框，回傳 `string` 或 `null` | `let name = window.prompt('你的名字？', 'Guest')` |
| `open(url, name, specs)` | 開啟新視窗，回傳 `Window`      | `window.open('https://google.com', 'google', 'width=500,height=500')` |
| `close()`            | 關閉當前視窗                      | `let popup = window.open(); popup.close()`     |
| `setTimeout(callback, delay)` | 延遲執行，回傳計時器 ID   | `window.setTimeout(() => console.log('過 2 秒'), 2000)` |
| `clearTimeout(id)`   | 清除延遲計時器                    | `let id = setTimeout(() => {}, 2000); window.clearTimeout(id)` |
| `setInterval(callback, delay)` | 間隔重複執行，回傳計時器 ID | `window.setInterval(() => console.log('每秒'), 1000)` |
| `clearInterval(id)`  | 清除間隔計時器                    | `let id = setInterval(() => {}, 1000); window.clearInterval(id)` |
| `scrollTo(x, y)`     | 滾動到指定座標                    | `window.scrollTo(0, 100)`                      |
| `scrollBy(x, y)`     | 相對滾動指定距離                  | `window.scrollBy(0, 50)`                       |
| `scroll(x, y)`       | 等同 `scrollTo`，較舊用法         | `window.scroll(0, 100)`                        |
| `addEventListener(type, listener)` | 綁定事件監聽器            | `window.addEventListener('resize', () => console.log('大小改變'))` |
| `removeEventListener(type, listener)` | 移除事件監聽器         |                                                |
| `focus()`            | 讓視窗獲得焦點                    | `window.focus()`                               |
| `blur()`             | 讓視窗失去焦點                    | `window.blur()`                                |
| `print()`            | 開啟列印對話框                    | `window.print()`                               |
| `requestAnimationFrame(callback)` | 請求動畫幀，適合動畫渲染 | `window.requestAnimationFrame(() => console.log('下一幀'))` |
| `cancelAnimationFrame(id)` | 取消動畫幀請求              |                                                |

## 實際應用範例

### 屬性範例
```javascript
console.log(`視窗寬高: ${window.innerWidth}x${window.innerHeight}`)
console.log(`滾動位置: ${window.scrollY}`)
window.localStorage.setItem('theme', 'dark')
```

### 方法範例
```javascript
window.setTimeout(() => window.alert('3 秒後彈窗'), 3000)
window.addEventListener('scroll', () => window.scrollTo(0, 0))
```