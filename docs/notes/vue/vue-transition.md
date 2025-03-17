# Vue Transition 系統

## Vue Transition 組件
### Vue Transition 是什麼？
Vue Transition 是 Vue.js 框架中的一個動畫系統，用於在元素出現、消失或狀態變化時的過渡效果

### 1. 基本用法
```vue
<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>
<template>
  <button @click="show = !show">Toggle</button>
  
  <Transition name="fade">
    <p v-if="show">Hello Vue</p>
  </Transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

### 2. 轉場類名
Vue 轉場期間會自動添加以下類名：
- `v-enter-from`: 進入開始狀態
- `v-enter-active`: 進入過渡生效狀態
- `v-enter-to`: 進入結束狀態
- `v-leave-from`: 離開開始狀態
- `v-leave-active`: 離開過渡生效狀態
- `v-leave-to`: 離開結束狀態

### 3. CSS 動畫範例
```vue
<template>
  <Transition name="bounce">
    <p v-if="show">我是一個動畫</p>
  </Transition>
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

### 4. 自定義轉場類名
```vue
<Transition
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
>
  <p v-if="show">使用 Animate.css</p>
</Transition>
```

### 5. JavaScript 鉤子
```vue
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
>
  <p v-if="show">Hello</p>
</Transition>
<script setup>
const onBeforeEnter = (el) => {
  el.style.opacity = 0
}
const onEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: 0.5,
    onComplete: done
  })
}
const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    onComplete: done
  })
}
</script>
```

### 6. 列表過渡 (TransitionGroup)
```vue
<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </TransitionGroup>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>
```

### 7. 可複用的轉場組件
```vue
<!-- FadeTransition.vue -->
<template>
  <Transition
    name="fade"
    mode="out-in"
    appear
  >
    <slot />
  </Transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<!-- 使用方式 -->
<FadeTransition>
  <component :is="currentView" />
</FadeTransition>
```

### 8. 重要屬性
- `name`: 指定轉場名稱
- `mode`: 指定轉場模式 (in-out, out-in)
- `appear`: 是否在初始渲染時使用轉場
- `duration`: 指定轉場持續時間
- `type`: 指定轉場類型 (transition, animation)

### 9. 常見用例
- 路由切換動畫
- 元素顯示/隱藏
- 組件切換
- 列表項目動畫
- 頁面轉場效果

## Vue TransitionGroup 組件

### 1. 基本用法
```vue
<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* 移動動畫 */
.list-move {
  transition: transform 0.5s ease;
}
</style>
```

### 2. TransitionGroup 特點
* 需要為每個子元素設置唯一的 key
* 可以通過 tag 屬性指定渲染的容器標籤
* 支持移動過渡(.list-move)
* 可以結合 CSS 動畫庫使用

### 3. 常見應用場景
* 列表過濾
* 列表排序
* 購物車商品添加/刪除
* 待辦事項列表

### 4. 列表洗牌示例
```vue
<template>
  <button @click="shuffle">Shuffle</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in list" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>
<script setup>
import { ref } from 'vue'
import _ from 'lodash'
const list = ref([1, 2, 3, 4, 5])
const shuffle = () => {
  list.value = _.shuffle(list.value)
}
</script>
<style>
.list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
```

### 5. 使用建議
* 動畫時間不要太長，建議在 300ms-500ms 之間
* 合理使用 mode 屬性(in-out/out-in)控制過渡順序
* 可以配合第三方動畫庫(如 Animate.css)使用
* 對於大量列表項目，考慮使用虛擬滾動優化性能
* 使用 appear 屬性實現初始渲染動畫