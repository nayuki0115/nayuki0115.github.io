# 讓父層可以使用子層的內容 - forwardRef 和 useImperativeHandle
###### tags: `React`

首先，先來了解 `forwardRef` 和 `useImperativeHandle` 這兩個的用法

## forwardRef
- `forwardRef` 是 React 提供的一個函數，寫可以將父層傳遞的 ref 轉發到子組件內部的某個 DOM 元素或另一個組件 （父層傳遞 `ref` 給子組件）
- 子組件可以通過 `useImperativeHandle` 控制 `.current` 的內容，間接讓父組件訪問子組件的 DOM 或方法

### 使用方法

```jsx=
import React, { forwardRef } from 'react';
const fancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="fancy-button">
    {props.children}
  </button>
));
```
#### 範例
```jsx=
import React, { useRef, forwardRef } from 'react';

// 子層：使用 forwardRef 接收父組件傳來的 ref
const fancyButton = forwardRef((props, ref) => (
  return <input ref={ref} className="fancy-input" {...props} />;
));

// 父層：建立 ref 並傳給子組件
const ParentComponent = () => {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <FancyInput ref={inputRef} placeholder="請輸入..." />
      <button onClick={focusInput}>聚焦輸入框</button>
    </div>
  );
}
```

## useImperativeHandle
- `useImperativeHandle` 是 React 提供的一個 Hook，讓子層透過 `forwardRef`，向父層「暴露特定的方法或屬性」，而非直接暴露內部的 DOM 或整個元件實例
- 同前面說的，會和 `forwardRef` 搭配使用， 透過 `useImperativeHandle` 填寫 `.current` 內容，藉此讓父層可以使用

### 使用方法
```jsx=
import { useImperativeHandle } from "react";

useImperativeHandle(ref, () => ({
  // 自定義暴露的屬性或方法
  methodName: () => { ... },
  propertyName: value,
}));
```
- `ref`：父組件傳遞的 `ref`（通過 `forwardRef` 接收）
- return 自定義 `.current` 的內容

#### 範例
```jsx=
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// 子層
const CustomInput = forwardRef((props, ref) => {
  // 內部 ref
  const inputRef = useRef(null);
  
  // 自定義暴露給父組件的方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    getValue: () => {
      return inputRef.current.value;
    },
    setValue: (value) => {
      inputRef.current.value = value;
    },
    // 注意：不暴露整個 DOM 元素，只暴露選定的方法
  }));
  
  return <input ref={inputRef} {...props} />;
});


//  父層
const ParentComponent = () => {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current.focus();
  };
  
  const handleBlur = () => {
    inputRef.current.blur();
  };
  
  const handleGetValue = () => {
    alert('當前值: ' + inputRef.current.getValue());
  };
  
  const handleSetValue = () => {
    inputRef.current.setValue('新值');
  };
  
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>聚焦</button>
      <button onClick={handleBlur}>失焦</button>
      <button onClick={handleGetValue}>獲取值</button>
      <button onClick={handleSetValue}>設值</button>
    </div>
  );
}
```

## 原理
- 父層
  - 建立ref (使用 `useRef`)，傳給子層
- 子層
  - 使用 `forwardRef` 接收 `ref`，並決定 `.current` 的內容，內容可以是 DOM 元素或是自定義的東西

### 為什麼能做到子傳父的效果？
透過 `useImperativeHandle`，子組件可以定義 `.current` 的內容，讓父層可以使用子層的 DOM 或方法