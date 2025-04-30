# 原生 JavaScript 事件屬性清單

###### tags: `JavaScript` `DOM` `Event`

## 基本概述
- **事件物件**：當事件（如 `click`、`keydown` 等）觸發時，瀏覽器會生成一個 `Event` 物件，並傳遞給事件監聽器（Event Listener）
- **繼承結構**：所有事件物件都繼承自 `Event` 類，不同類型的事件（如 `MouseEvent`、`KeyboardEvent`）會擴展額外的屬性

## 常見屬性（`Event` 基礎屬性）
| 屬性名稱            | 類型         | 描述                                                                 |
|------|------|------|
| `type` | `string` | 事件的名稱（如 `"click"`、`"keydown"`） |
| `target` | `EventTarget`| 觸發事件的目標元素（DOM 節點） |
| `currentTarget` | `EventTarget`| 當前處理事件的元素（事件監聽器綁定的元素，可能與 `target` 不同） |
| `bubbles` | `boolean` | 指示事件是否會冒泡（bubble）到父元素 |
| `cancelable` | `boolean` | 指示事件是否可以被取消（透過 `preventDefault()`） |
| `defaultPrevented` | `boolean` | 指示是否已調用 `preventDefault()` 取消預設行為 |
| `eventPhase` | `number` | 事件傳播的階段（0: 未傳播, 1: 捕獲, 2: 目標, 3: 冒泡） |
| `timeStamp` | `number` | 事件創建的時間戳（毫秒，從頁面加載開始計算） |
| `isTrusted` | `boolean` | 指示事件是否由用戶觸發（`true`），還是程式碼模擬（`false`） |

### 範例
```javascript
document.addEventListener('click', (event) => {
  console.log(event.type);          // "click"
  console.log(event.target);        // 點擊的元素
  console.log(event.currentTarget); // 綁定監聽器的元素
  console.log(event.bubbles);       // true
});
```

## 特定事件類型的擴展屬性
### 1. 滑鼠事件（`MouseEvent`）
繼承自 `Event`，用於 `click`、`mousedown`、`mousemove` 等事件
| 屬性名稱 | 類型 | 描述 |
| --- | --- | --- |
| `clientX` | `number` | 滑鼠相對於視窗（viewport）的 X 座標 |
| `clientY` | `number` | 滑鼠相對於視窗的 Y 座標 |
| `screenX` | `number` | 滑鼠相對於螢幕的 X 座標 |
| `screenY` | `number` | 滑鼠相對於螢幕的 Y 座標 |
| `pageX` | `number` | 滑鼠相對於 document （考慮滾動）的 X 座標 |
| `pageY` | `number` | 滑鼠相對於 document 的 Y 座標 |
| `offsetX` | `number` | 滑鼠相對於目標元素的 X 座標 |
| `offsetY` | `number` | 滑鼠相對於目標元素的 Y 座標 |
| `button` | `number` | 按下的滑鼠按鈕（0: 左鍵, 1: 中鍵, 2: 右鍵） |
| `buttons` | `number` | 表示哪些按鈕被按下（位元掩碼：1: 左鍵, 2: 右鍵, 4: 中鍵） |
| `altKey` | `boolean` | 是否按下 Alt 鍵 |
| `ctrlKey` | `boolean` | 是否按下 Ctrl 鍵 |
| `shiftKey` | `boolean` | 是否按下 Shift 鍵 |
| `metaKey` | `boolean` | 是否按下 Meta 鍵（Windows 鍵或 Command 鍵） |

```javascript=
document.addEventListener('click', (event) => {
  console.log(event.clientX, event.clientY); // 滑鼠位置
  console.log(event.button);                 // 按下的按鈕
});
```

### 2. 鍵盤事件（`KeyboardEvent`） 
用於 `keydown`、`keyup`、`keypress` 等事件

| 屬性名稱 | 類型 | 描述 |
| --- | --- | --- |
| `key` | `string` | 按下的按鍵的值（如 "Enter"、"a"） |
| `code` | `string` | 按鍵的物理位置代碼（如 "KeyA"、"Enter"） |
| `altKey` | `boolean` | 是否按下 Alt 鍵 |
| `ctrlKey` | `boolean` | 是否按下 Ctrl 鍵 |
| `shiftKey` | `boolean` | 是否按下 Shift 鍵 |
| `metaKey` | `boolean` | 是否按下 Meta 鍵 |
| `repeat` | `boolean` | 指示按鍵是否被重複按下（長按） |
| `keyCode` | `number` | 已棄用，按鍵的數值代碼（不推薦使用，建議用 key 或 code） |

```javascript=
document.addEventListener('keydown', (event) => {
  console.log(event.key);   // "Enter"
  console.log(event.code);  // "Enter"
  console.log(event.ctrlKey); // true 或 false
});
```

### 3. 表單事件（`InputEvent` 或 `Event`）
用於 `input`、`change`、`submit` 等事件

| 屬性名稱 | 類型 | 描述 |
| --- | --- | --- |
| `data` | `string` | `InputEvent` 特有，輸入的新資料（僅適用於 input 事件） |
| `inputType` | `string` | `InputEvent` 特有，輸入的類型（如 `"insertText"`、`"deleteContent"`） |
```javascript=
document.querySelector('input').addEventListener('input', (event) => {
  console.log(event.data);      // 新輸入的字符
  console.log(event.inputType); // "insertText"
});
```

### 4. 觸控事件（`TouchEvent`）
用於觸控設備的 `touchstart`、`touchmove` 等事件
| 屬性名稱 | 類型 | 描述 |
| --- | --- | --- |
| `touches` | `TouchList` | 當前螢幕上的觸控點列表 |
| `targetTouches` | `TouchList` | 當前目標元素上的觸控點列表 |
| `changedTouches` | `TouchList` | 觸發本次事件的觸控點列表 |

```javascript=
document.addEventListener('touchstart', (event) => {
  console.log(event.touches.length); // 觸控點數量
});
```

## 需注意

1.  **棄用屬性**
    *   `keyCode`、`charCode`、`which` 已棄用，建議使用 `key` 和 `code`
2.  **瀏覽器兼容性**
    *   大多數屬性在現代瀏覽器中廣泛支援，但某些屬性（如觸控相關）可能僅限行動裝置。
3.  **事件類型擴展**
    *   不同事件類型（如 WheelEvent、FocusEvent）有額外專屬屬性，可查閱 [MDN Event 參考](https://developer.mozilla.org/en-US/docs/Web/API/Event)。

* * *

## 總結
*   **基礎屬性**：`type`、`target`、`currentTarget` 等適用於所有事件。
*   **擴展屬性**：根據事件類型（如 `MouseEvent`、`KeyboardEvent`）提供特定資訊。
*   **使用方式**：通過事件監聽器訪問，例如 `event.target`