#  Vue 開發風格指南

###### tags: `Vue` `規範`

## 什麼是 Vue 開發風格指南？
在使用Vue 官方建議使用 Vue 開發時遵守的規範

[Priority A Rules: Essential | Vue.js](https://zh-hk.vuejs.org/style-guide/rules-essential.html)

## 官方套件
[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

```
npm install --save-dev eslint eslint-plugin-vue
```

## Priority A: 必要 (Essential)
### Component 為多個單詞
這樣可以避免跟現有或是未來的 html 元素[衝突](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，因為 html 都是單個單詞
```vue
// ✅ 正確
<TodoItem />
<todo-item></todo-item>
```
```vue
// ❌ 錯誤 
<item></item>
<Item />
```

### Component Props 盡量詳細
包含 type、預設值、是否為 required
```vue
// ✅ 正確 
const props = defineProps({
  status: String
})

// Even better!
const props = defineProps({
  status: {
    type: String,
    required: true,

    validator: (value) => {
      return ['syncing', 'synced', 'version-conflict', 'error'].includes(
        value
      )
    }
  }
})
```

```vue
// ❌ 錯誤 
const props = defineProps(['status'])
```

### `v-for` 要使用 Key
v-for 搭配 key 使用，以方便維護 component 及其子樹的狀態
也可維持 [Object Constancy（物件恆定性）](https://bost.ocks.org/mike/constancy/)

> Object Constancy（物件恆定性）是一個視覺化設計概念，主要用於資料視覺化和動畫過渡中。它的核心理念是：當資料更新時，相同的物件應該保持視覺上的連續性，讓使用者能夠追蹤物件的變化

```vue
// ✅ 正確 
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
```vue
// ❌ 錯誤 
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

### `v-for` 和 `v-if` 避免一起使用

```vue
// ✅ 正確 
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

// ✅ 正確 
<ul>
  <template v-for="user in users" :key="user.id">
    <li v-if="user.isActive">
      {{ user.name }}
    </li>
  </template>
</ul>
```
```vue
// ❌ 錯誤 
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

### Component CSS 作用域


```css
// ✅ 正確 
<template>
  <button class="button button-close">×</button>
</template>
<!-- Using the `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```

```css
// ✅ 正確 
<template>
  <button :class="[$style.button, $style.buttonClose]">×</button>
</template>

<!-- Using CSS modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
```

```css
// ✅ 正確 
<template>
  <button class="c-Button c-Button--close">×</button>
</template>

<!-- Using the BEM convention -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```

```css
// ❌ 錯誤 
<template>
  <button class="btn btn-close">×</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>
```

## Priority B: 強烈推薦 (Strongly Recommended)
### 單一元件結構
```
// ✅ 正確 
components/
|- TodoList.js
|- TodoItem.js
```
```
// ✅ 正確 
components/
|- TodoList.vue
|- TodoItem.vue
```

```vue
// ❌ 錯誤 
app.component('TodoList', {
  // ...
})

app.component('TodoItem', {
  // ...
})
```

### Component 檔名大小寫
檔名命名應該要是 PascalCase 或 kebab-case 原則
```
// ✅ 正確 
components/
|- MyComponent.vue
```
```
// ✅ 正確 
components/
|- my-component.vue
```

```
// ❌ 錯誤 
components/
|- mycomponent.vue
```

```
// ❌ 錯誤 
components/
|- mycomponent.vue
```

### 基礎 Component 命名原則
基礎 Component 指的是展示類、沒有邏輯、無狀態的 Component
要用特定開頭前綴 `Base` `App` `V`
```
// ✅ 正確 
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

```
// ✅ 正確 
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
```

```
// ✅ 正確 
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

```
// ❌ 錯誤 
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

### 緊密耦合的 Component 檔名
和父元件緊密耦合的子元件應該以父元件名作為前綴命名

```
// ✅ 正確 
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```
```
// ✅ 正確 
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```
```
// ❌ 錯誤 
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
```
```
// ❌ 錯誤 
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

### Component 命名順序性
Component 檔名應該以層次較高(highest-level)、較普遍(often most general)的單詞開頭，以描述性的修飾詞結尾

```
// ✅ 正確 
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

```
// ❌ 錯誤 
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

### 自閉合 Component
> DOM templates 是指直接在 HTML 文件中編寫的 Vue 模板，而不是在 .vue 文件或 JavaScript 中定義的模板

:::spoiler DOM Templates vs Single-File Components
- DOM Templates（直接在 HTML 中）：
```html
<!-- index.html -->
<div id="app">
  <!-- 這就是 DOM template -->
  <user-profile></user-profile>  <!-- 必須用 kebab-case -->
  <my-component></my-component>
</div>

<script>
new Vue({
  el: '#app'
})
</script>
```

- Single-File Components（.vue 文件）：
```
<!-- UserProfile.vue -->
<template>
  <!-- 這不是 DOM template -->
  <UserProfile></UserProfile>  <!-- 可以用 PascalCase -->
  <user-profile></user-profile>  <!-- 也可以用 kebab-case -->
</template>
```
:::

```
// ✅ 正確 
<!-- In Single-File Components, string templates, and JSX -->
<MyComponent/>
```
```
// ✅ 正確 
<!-- In in-DOM templates -->
<my-component></my-component>
```

```
// ❌ 錯誤 
<!-- In Single-File Components, string templates, and JSX -->
<MyComponent></MyComponent>
```

```
// ❌ 錯誤 
<!-- In in-DOM templates -->
<my-component/>
```

### template 中的 Component 檔名大小寫
```
// ✅ 正確 
<!-- In Single-File Components and string templates -->
<MyComponent/>
```
```
// ✅ 正確 
<!-- In in-DOM templates -->
<my-component></my-component>
```
```
// ✅ 正確 
<!-- Everywhere -->
<my-component></my-component>
```

```
// ❌ 錯誤 
<!-- In Single-File Components and string templates -->
<mycomponent/>
```
```
// ❌ 錯誤 
<!-- In Single-File Components and string templates -->
<myComponent/>
```
```
// ❌ 錯誤 
<!-- In in-DOM templates -->
<MyComponent></MyComponent>
```

### 完整單詞的 Component 名稱
元件名應該傾向於完整單詞而不是縮寫
```
// ❌ 錯誤 
components/
|- SdSettings.vue
|- UProfOpts.vue
```

```
// ✅ 正確 
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### Props 命名大小寫
使用 camelCase
在 template 或是 jsx 用 kebab-case
```vue
// ❌ 錯誤 
const props = defineProps({
  'greeting-text': String
})
```
```vue
// ❌ 錯誤 
// for in-DOM templates
<welcome-message greetingText="hi"></welcome-message>
```

```vue
// ✅ 正確 
const props = defineProps({
  greetingText: String
})
```
```vue
// ✅ 正確 
// for in-DOM templates
<welcome-message greeting-text="hi"></welcome-message>
```

### 多個 attribute 的元素
多個 attribute 的元素應該分多行撰寫，每個 attribute 一行

```vue
// ❌ 錯誤 
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">

<MyComponent foo="a" bar="b" baz="c"/>
```

```vue
// ✅ 正確 
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>

<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

### 指令縮寫
用 `：` 表示 `v-bind：`、用 `@` 表示 `v-on：` 和用 `#` 表示` v-slot`：

## Priority C: 推薦 (Recommended)

### Vue 實例統一順序
```vue
<script setup>
// 1. Global Awareness (requires knowledge beyond the component)
defineOptions({
 name: 'ComponentName'
})

// 2. Template Compiler Options
defineOptions({
 compilerOptions: {
   // ...
 }
})

// 3. Template Dependencies
import MyComponent from './MyComponent.vue'
import MyDirective from './MyDirective'

// 4. Composition
import { useParentComponent } from './parent'
import { myInjectionKey } from './symbols'
const parentData = useParentComponent()
const injected = inject(myInjectionKey)
provide('key', 'value')

// 5. Interface
defineOptions({
 inheritAttrs: false
})
const props = defineProps<{
 title: string
}>()
const emit = defineEmits<{
 (e: 'update'): void
}>()

// 6. Composition API imports & usage
import { ref, computed, watch, onMounted } from 'vue'
import { useMyComposable } from '@/composables/myComposable'
const { data } = useMyComposable()

// 7. Local State
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// 8. Events & Lifecycle
watch(count, (newVal) => {
 console.log(newVal)
})

// Lifecycle hooks in order
onBeforeMount(() => {})
onMounted(() => {})
onBeforeUpdate(() => {})
onUpdated(() => {})
onActivated(() => {})
onDeactivated(() => {})
onBeforeUnmount(() => {})
onUnmounted(() => {})
onErrorCaptured(() => {})
onRenderTracked(() => {})
onRenderTriggered(() => {})

// 9. Non-Reactive Properties (methods)
function increment() {
 count.value++
}

// 10. Rendering is handled by <template>
</script>

<template>
 <div>
   <MyComponent />
   {{ count }}
 </div>
</template>
```

### Vue 的元素特性順序
```vue
<template>
  <div
    // 1. v-if/else 條件渲染
    v-if="condition"
    v-else-if="condition"
    v-else

    // 2. v-for 列表渲染
    v-for="item in items"
    :key="item.id"

    // 3. v-model 雙向綁定
    v-model="value"
    v-model:title="title"

    // 4. v-on 事件監聽
    @click="handleClick"
    @input="handleInput"

    // 5. v-bind 屬性綁定
    :class="classes"
    :style="styles"
    :disabled="isDisabled"

    // 6. 一般屬性
    id="unique-id"
    ref="elementRef"
  >
    <!-- 內容 -->
  </div>
</template>
```


## Priority D: 謹慎使用 (Use with Caution)
### `scoped` 中的元素選擇器
scoped 中 css class selector 比 element selector 更好

```vue
// ❌ 錯誤 
<template>
  <button>×</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
```

```vue
// ✅ 正確 
<template>
  <button class="btn btn-close">×</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```

### 隱性的父子 Component props 傳遞
一個理想的 Vue 應用是 prop 向下傳遞，事件向上傳遞的

```vue
// ❌ 錯誤 
<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <input v-model="todo.text" />
</template>
```
```vue
// ❌ 錯誤 
<script setup>
import { getCurrentInstance } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const instance = getCurrentInstance()

function removeTodo() {
  const parent = instance.parent
  if (!parent) return

  parent.props.todos = parent.props.todos.filter((todo) => {
    return todo.id !== props.todo.id
  })
}
</script>

<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo">×</button>
  </span>
</template>
```

```vue
// ✅ 正確 
<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['input'])
</script>

<template>
  <input :value="todo.text" @input="emit('input', $event.target.value)" />
</template>
```
```vue
// ✅ 正確 
<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete'])
</script>

<template>
  <span>
    {{ todo.text }}
    <button @click="emit('delete')">×</button>
  </span>
</template>
```

## 參考文件
- [Vue3 Style Guide](https://zh-hk.vuejs.org/style-guide/rules-essential.html)
- [Vue2 Style Guide](https://v2.cn.vuejs.org/v2/style-guide/)