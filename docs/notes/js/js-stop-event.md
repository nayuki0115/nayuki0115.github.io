# preventDefault 和 stopPropagation 的差異

###### tags: `JavaScript `

## 基本定義

### preventDefault()
目的：阻止元素的預設行為
- 不會阻止事件冒泡
- 常見用途：
  - 阻止表單提交
  - 阻止連結跳轉
  - 防止預設的滑鼠或鍵盤事件

### stopPropagation()
目的：阻止事件在 DOM 樹中的傳播
- 不會阻止元素的預設行為
- 常見用途：
  - 控制事件在嵌套元素中的傳遞
  - 防止父元素接收到子元素的事件

## 詳細範例

### 範例 1：表單提交 (preventDefault)
```javascript
document.getElementById('loginForm').addEventListener('submit', (event) => {
  // 阻止表單自動提交
  event.preventDefault();

  // 自定義驗證邏輯
  const username = event.target.username.value;
  
  if (username.length < 3) {
    alert('使用者名稱太短');
    return;
  }

  // 手動發送 Ajax 請求
  fetch('/login', {
    method: 'POST',
    body: new FormData(event.target)
  });
});
```

### 範例 2：事件冒泡 (stopPropagation)
```javascript=
// 外層 Div 的點擊事件
document.getElementById('outerDiv').addEventListener('click', () => {
  console.log('外層 Div 被點擊');
});

// 內層 Div 的點擊事件
document.getElementById('innerDiv').addEventListener('click', (event) => {
  // 阻止事件繼續向上冒泡
  event.stopPropagation();
  console.log('內層 Div 被點擊');
});
```

### 範例 3：同時使用
```javascript=
document.getElementById('specialLink').addEventListener('click', (event) => {
  // 同時阻止預設行為和事件傳播
  event.preventDefault();     // 阻止連結跳轉
  event.stopPropagation();    // 阻止事件繼續傳播

  // 執行自定義邏輯
  console.log('執行特殊操作');
});
```

## 主要差異總結
1. preventDefault()
- 阻止元素的預設行為
- 不影響事件傳播
- 適用於：表單提交、連結跳轉


2. stopPropagation()
- 阻止事件繼續向上/下傳播
- 不影響元素預設行為
- 適用於：控制事件傳遞

## 使用建議
### 何時使用 preventDefault()
- 表單提交時需要自定義驗證
- 連結需要自定義跳轉邏輯
- 需要攔截預設的瀏覽器行為

### 何時使用 stopPropagation()
- 複雜的巢狀元素事件處理
- 避免意外觸發父元素事件
- 精確控制事件傳遞

## 進階技巧：stopImmediatePropagation()
[stopImmediatePropagation](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/stopImmediatePropagation)
```javascript=
element.addEventListener('click', (event) => {
  // 不僅阻止冒泡，還阻止同一元素上的其他監聽器
  event.stopImmediatePropagation();
});
```

## 關鍵點
可以根據實際需求同時使用這兩種方法
- preventDefault() 是停止瀏覽器的預設動作
- stopPropagation() 是阻止事件在 DOM 樹中的傳遞

