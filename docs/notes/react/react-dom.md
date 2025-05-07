# React 中取得 DOM 實體的方法
###### tags: `React`

這篇是相對應於 [Vue 3 setup 中取得 DOM 實體的方法](/notes/vue/vue-dom.html)  
前端很常會需要取得 DOM 元素，在不同框架中會有不同的方式，  
因為正在學習 React 中，便把它記錄下來

## useRef
- useRef 是 React 中的一個 Hook，用於建立一個可變的引用對象（可以把它當成容器）
- 這個對象有一個 `.current` 屬性，可以用來存任何值
- 它會存在於整個元件的生命週期中，修改 `.current` 的值不會引發組件的重新渲染

### 使用方法

```jsx=
import React, { useRef } from 'react';
const refContainer = useRef(initialValue);
```

### 取得 DOM 元素
```jsx=
import React, { useRef, useEffect } from 'react';

const TextInputWithFocusButton = () => {
  // 建立一個 ref 來存input 的 DOM 元素
  const inputRef = useRef(null);
  
  // 點擊按鈕時聚焦 input
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  // 組件掛載後自動聚焦
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>聚焦輸入框</button>
    </>
  );
}
```

