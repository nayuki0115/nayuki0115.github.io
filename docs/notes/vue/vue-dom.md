# Vue 3 setup 中取得 DOM 實體的方法

###### tags: `Vue`


## 原理
Vue 在建立實體元件之前會先觸發 setup，所以在 setup 中，是無法存取到 this 實體，會印出 `undefined`

## 解決方法
可以用 ref 掛接器 (ref binding) 和  ref 指示詞 (ref directive) 存取 DOM 實體 (像是 options api 的 this.$el), 再使用 `onMounted` 或是 `onMounted` 即可

```vue=
<template>
  <input ref="inputRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue' 

const inputRef = ref<HTMLInputElement | null>(null) 

// 在 onMounted 裡訪問 DOM 元素
onMounted(() => {
  // 直接訪問 DOM 元素
  inputRef.value?.focus() // 聚焦輸入框
  
  // 獲取/設置值
  console.log(inputRef.value?.value) // 獲取輸入值
  inputRef.value!.value = 'new value' // 設置輸入值
})
</script>
```

## 名詞解釋
### ref 掛接器 (ref Binding)
- ref 掛接器 是 Vue 內部的響應式變數，通過 ref() 建立並在 setup 函數或組件的生命週期中使用
- 它通常用於引用組件或 DOM 元素，並能直接操作它們

```vue=
import { ref } from 'vue'

// 建立原始值的響應式引用
const count = ref(0)
const message = ref('Hello')

// 建立 DOM 引用
const inputRef = ref<HTMLInputElement | null>(null)
```

### ref 指示詞 (ref Directive)
- ref 指示詞 是 Vue 模板中用來將 DOM 元素或組件綁定到 ref 變數的指令
- 它將模板中的某個元素或組件的引用賦值給 ref()，並且你可以在 setup 中通過該變數訪問元素或組件

```vue=
<template>
  <!-- DOM 元素引用 -->
  <input ref="inputRef" />
  
  <!-- 組件引用 -->
  <ChildComponent ref="childRef" />
</template>
```

| 特性 | **ref 掛接器 (ref Binding)** | **ref 指示詞 (ref Directive)** |
| --- | --- | --- |
| **用途** | 在 `setup` 函數內創建和操作響應式的引用 | 在模板中綁定 DOM 元素或組件，並使其可用於 `ref` 變數 |
| **作用範圍** | 用於 JavaScript 層面，通過 `ref()` 創建響應式引用 | 用於模板層面，將 DOM 或組件的引用綁定到 `ref` |
| **設置位置** | 在 `setup` 函數中創建，並使用 `ref()` 訪問 | 在模板中的元素或組件上使用 `ref` 指示詞綁定 |
| **功能** | 提供一個可響應的引用，便於訪問 DOM 或組件實例 | 將元素的引用綁定到 JavaScript 中的變數（如 `inputRef`） |


## 參考資料
- [Vue 學習手冊](https://www.tenlong.com.tw/products/9786263248557?list_name=c-vuejs)