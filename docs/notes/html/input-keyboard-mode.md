# 虛擬鍵盤輸入優化：input type 和 inputmode 與 enterkeyhint

###### tags: `HTML`


1. **`type`**：定義輸入欄位的類型，影響資料驗證和預設行為
2. **`inputmode`**：提示虛擬鍵盤的顯示類型，主要用於移動設備
3. **`enterkeyhint`**：提示虛擬鍵盤上 Enter 鍵的外觀或用途

## input type
`type` 是 `<input>` 的核心屬性，決定輸入欄位的類型

### 語法
```html
<input type="text">
```

| 值 | 描述 | 預設行為 |
|--------|--------|--------|
| `text` | 純文字輸入 | 顯示一般文字鍵盤 |
| `number` | 數字輸入 | 顯示數字鍵盤 + 限制非數字輸入 |
| `tel` | 電話號碼 | 顯示電話鍵盤 |
| `email` | 電子郵件地址 | 顯示 email 鍵盤 + 驗證格式 |
| `url` | 網址 | 顯示 URL 鍵盤 + 驗證格式 |
| `search` | 搜尋欄位 | 顯示搜尋鍵盤 + 提交表單行為 |
| `password` | 密碼輸入 | 隱藏輸入內容 |

### 使用範例
```html
<input type="email" placeholder="Enter your email">
```

## `inputmode`
`inputmode` 是一個 HTML 屬性，用於指定輸入欄位（`<input>` 或 `<textarea>`）在移動設備上顯示的虛擬鍵盤類型

`inputmode` 不會限制輸入內容（不像 `type` 會有驗證），它只是建議鍵盤類型

如果同時指定了 `type` 和 `inputmode`，瀏覽器可能會優先考慮 type，但 inputmode 可以提供更細緻的控制

### 語法
```html
<input type="text" inputmode="numeric">
```

| 值 | 描述 | 適用場景 |
| -------- | -------- | -------- |
| `text` | 預設文字鍵盤 | 一般文字輸入 |
| `decimal` | 數字鍵盤，包含小數點 | 小數輸入（如價格） |
| `numeric` | 純數字鍵盤 | 電話號碼、郵遞區號 |
| `tel` | 電話號碼鍵盤，可能包含 `*` 和 `#` | 電話號碼輸入 |
| `search` | 搜尋鍵盤，通常搭配 `<input type="search">` | 搜尋欄位 |
| `email` | 電子郵件鍵盤，包含 `@` 和 `.` | 電子郵件地址輸入 |
| `url` | URL 鍵盤，包含 `/` 和 `.` | 網址輸入 |
| `none` | 不顯示虛擬鍵盤 | 自訂輸入或非鍵盤輸入 |

### 使用範例
```html
<!-- 輸入電話號碼 -->
<input type="text" inputmode="tel">

<!-- 輸入金額 -->
<input type="text" inputmode="decimal">

<!-- 輸入電子郵件 -->
<input type="email" inputmode="email">
```

## `enterkeyhint`
`enterkeyhint` 是一個 HTML 屬性，用於指定虛擬鍵盤上「Enter」鍵的顯示方式或行為
允許開發者提示使用者按下 Enter 鍵後的預期動作

enterkeyhint 只影響虛擬鍵盤的視覺提示，不會改變 Enter 鍵的功能邏輯（功能仍需由 JavaScript 控制）

### 語法
```html
<input type="text" enterkeyhint="search">
```

| 值 | 描述 | 適用場景 |
| -------- | -------- | -------- |
| `enter` | 預設 Enter 鍵，通常顯示為「換行」符號 | 一般文字輸入 |
| `done` | 表示完成輸入，通常顯示為「完成」或勾號 | 表單提交或結束輸入 |
| `go` | 表示前往某處，通常顯示為箭頭 | 導航到某個頁面（如 URL） |
| `next` | 表示前往下一個欄位 | 多欄位表單中的下一步 |
| `previous` | 表示返回上一個欄位 | 多欄位表單中的上一步 |
| `search` | 表示搜尋，通常顯示為放大鏡圖示 | 搜尋表單提交 |
| `send` | 表示發送，通常顯示為紙飛機或箭頭 | 訊息發送（如聊天應用） |


### 使用範例
```html
<!-- 搜尋欄位 -->
<input type="search" enterkeyhint="search">

<!-- 表單最後一欄，提交表單 -->
<input type="text" enterkeyhint="done">

<!-- 聊天訊息輸入 -->
<input type="text" enterkeyhint="send">
```


## 三者比較
| 屬性 | 主要功能 | 影響資料驗證 | 影響鍵盤顯示 | 影響 Enter 鍵 |
| -------- | -------- | :--------: | :--------: | :--------: |
| `type` | 定義輸入類型與行為 | ⭕ | ⭕ | ❌ |
| `inputmode` | 提示虛擬鍵盤類型  |  ❌  |  ⭕  |  ❌  |
| `enterkeyhint` |  提示 Enter 鍵的用途 |  ❌  |  ❌  |  ⭕  |

## 使用情境
### 電子郵件輸入
```html
<input type="email" inputmode="email" enterkeyhint="next">
```
- `type="email"`：驗證輸入格式，顯示 email 鍵盤
- `inputmode="email"`：強化鍵盤提示（通常不必要，因為 type 已足夠）
- `enterkeyhint="next"`：Enter 鍵提示「下一步」，適合多欄位表單

### 純數字但不限制輸入
```html
<input type="text" inputmode="numeric" enterkeyhint="done">
```
- `type="text"`：允許任何輸入，不驗證
- `inputmode="numeric"`：顯示數字鍵盤
- `enterkeyhint="done"`：Enter 鍵提示「完成」

### 搜尋欄位
```html
<input type="search" inputmode="search" enterkeyhint="search">
```
- `type="search"`：支援搜尋行為
- `inputmode="search"：顯示搜尋鍵盤
- `enterkeyhint="search"`：Enter 鍵顯示放大鏡


## 參考文件
- [MDN 文件參考 - inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
- [MDN 文件參考 - enterkeyhint](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)