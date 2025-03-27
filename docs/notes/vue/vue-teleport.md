#  Vue 3 Teleport 

###### tags: `Vue`

## Teleport 是什麼？
Teleport 是 Vue 3 中的內建元件，它允許我們將模板內容傳送到 DOM 中的任何位置，而不受組件層級結構的限制，但同時保持原有的邏輯作用域

### 使用情境
* 彈出對話框（Modal）
* 提示框（Tooltip）
* 通知系統（Notification）
* 全螢幕覆蓋層
* 固定位置的懸浮元素

### 注意事項
* Teleport 不會改變組件的邏輯作用域
* 傳送的內容仍然在原組件的上下文中
* 目標選擇器必須存在於 DOM 中

## 如何使用？

```vue=
<template>
  <div>
    <button @click="openModal">開啟對話框</button>
    
    <teleport to="body">
      <div v-if="isModalOpen" class="modal">
        <h2>這是一個對話框</h2>
        <p>對話框的內容會被傳送到 body 標籤內</p>
        <button @click="closeModal">關閉</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
```
### 用法
```vue=
<teleport to="目標選擇器">
  <!-- 要被傳送的內容 -->
</teleport>
```
雖然內容被傳送到其他位置，但仍然維持原本的組件作用域，包括：
* 數據響應性
* 事件處理
* 組件狀態

#### 範例
```vue=
<template>
  <div class="app">
    <h1>我的應用程式</h1>
    <button @click="showModal = true">開啟對話框</button>

    <teleport to="body">
      <div v-if="showModal" class="modal">
        <h2>對話框標題</h2>
        <p>這是一個被傳送到 body 的對話框</p>
        <button @click="showModal = false">關閉</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>
```

### Teleport 特性
- 靈活的目標位置
  - `to` 屬性可以接受任何有效的 CSS 選擇器
  - 常見的目標：`body`、`#app`、`.modal-container`
- 保持原有邏輯作用域
  - 傳送的內容仍然可以使用原組件的數據和方法
- 條件渲染
  - 可以與 `v-if` 結合使用
  - 支持動態控制是否傳送
- 多重 Teleport
```vue=
<teleport to="body">
  <div>第一個傳送的元素</div>
</teleport>

<teleport to="body">
  <div>第二個傳送的元素</div>
</teleport>
```
渲染結果
```
<body>
  <div>第一個傳送的元素</div>
  <div>第二個傳送的元素</div>
</body>
```

- `disabled` 屬性 (禁用)
  isMobile 狀態可以根據 CSS media query 的不同結果動態地更新
```vue=
<teleport to="body" :disabled="isMobile">
  <!-- 在移動設備上不進行傳送 -->
</teleport>
```

```vue=
<template>
  <teleport to="body" :disabled="isMobile">
    <div>
      根據螢幕大小決定是否使用 Teleport
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const screenWidth = ref(window.innerWidth)

const isMobile = computed(() => screenWidth.value < 768)

// 監聽螢幕大小變化
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth
})
</script>
```

## 進階用法：可重用模態框
```vue=
<!-- Modal.vue -->
<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal">
        <header>
          <slot name="header">預設標題</slot>
          <button @click="close">關閉</button>
        </header>
        <main>
          <slot>預設內容</slot>
        </main>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: {
    type="boolean", 
    default: false
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
}
</style>
```
使用範例：
```vue=
<template>
  <div>
    <button @click="modalOpen = true">打開對話框</button>
    
    <Modal 
      :is-open="modalOpen"
      @close="modalOpen = false"
    >
      <template #header>
        <h2>自定義標題</h2>
      </template>
      
      <p>這是對話框的內容</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const modalOpen = ref(false)
</script>
```

## 瀏覽器支援
* Vue 3 的 Teleport 在現代瀏覽器中有很好的支援
* 舊版瀏覽器可能需要 polyfill


## 參考文件
* [Vue 官方文件 Teleport](https://vuejs.org/guide/built-ins/teleport.html)
* [不只懂 Vue 語法：請示範如何使用 Vue 3 的 teleport？](https://ithelp.ithome.com.tw/articles/10274013)
* [使用 Teleport API 在 Vue 3 中實現 DOM 控制](https://ithelp.ithome.com.tw/articles/10356413)