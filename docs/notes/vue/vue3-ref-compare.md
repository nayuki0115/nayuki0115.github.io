
# Vue 3 的響應式 API 比較

###### tags: `Vue`

## 基本響應式轉換

### 深度轉換 (Deep Conversion)

- `ref`
  - 基本數據類型（string、number、boolean）, 也可以用於物件。要用 `.value` 來存取
  - 使用時機：要替換整個物件時

```vue=
import { ref, watch } from 'vue'

// 基本類型
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1

// 物件類型
const user = ref({
  name: 'John',
  age: 20
})
console.log(user.value.name) // 'John'
user.value.age = 21

// 監聽變化
watch(user, (newValue, oldValue) => {
  console.log('user changed:', newValue, oldValue)
}, { deep: true })
```

- `reactive`
  - 響應式物件，會遞迴轉換所有巢狀屬性。不需要使用 `.value`
  - 使用時機：大型物件且只需要監聽整體變化時

```vue=
import { reactive, watch } from 'vue'

const user = reactive({
  name: 'John',
  age: 20,
  address: {
    city: 'Tokyo',
    country: 'Japan'
  }
})

// 直接修改屬性
user.name = 'Jane'
user.address.city = 'Osaka'

// 監聽變化
watch(() => user.address, (newValue, oldValue) => {
  console.log('address changed:', newValue, oldValue)
}, { deep: true })
```

### 淺層轉換 (Shallow Conversion)
- `shallowRef`
只對 `.value` 的值做響應式處理，不會遞迴轉換物件內部的屬性

```vue=
import { shallowRef, watch } from 'vue'

const state = shallowRef({ count: 1 })

// 這會觸發響應式更新
state.value = { count: 2 }

// 這不會觸發響應式更新！
state.value.count = 3

// 要監聽內部屬性變化需要手動觸發
import { triggerRef } from 'vue'
state.value.count = 4
triggerRef(state) // 手動觸發更新
```

- `shallowReactive`
只對物件的第一層屬性做響應式處理

```vue=
import { shallowReactive } from 'vue'

const state = shallowReactive({
  count: 1,
  nested: {
    value: 1
  }
})

// 這會觸發響應式更新
state.count = 2

// 這不會觸發響應式更新！
state.nested.value = 2
```

### 比較

| 特性 | `ref` | `shallowRef` | `reactive` | `shallowReactive` |
| --- | --- | --- | --- | --- |
| 用途 | 基本數據類型或對象的引用 | 只對對象的引用進行響應式處理 | 深層響應式對象，包括嵌套屬性 | 只對對象的第一層屬性進行響應式處理 |
| 是否深層響應式 | 是 | 否 | 是 | 否 |
| 是否需要 `.value` | 需要使用 `.value` | 需要使用 `.value` | 不需要 `.value` | 不需要 `.value` |
| 性能 | 一般 | 性能較好（不處理內部嵌套屬性） | 性能較差（需要深層響應式處理） | 性能較好（只處理第一層屬性） |


## 唯讀

### 深度唯讀
- readonly
  - 深度唯讀
- isReadonly
  - 檢查是否唯讀

```vue=
// readonly 範例
const original = reactive({ count: 0 })
const copy = readonly(original)
// copy.count++ // 警告！

// isReadonly 範例
console.log(isReadonly(copy)) // true
console.log(isReadonly(original)) // false
```

| 特性 | `readonly` | `isReadonly` |
| :---: | --- | --- |
| 功能 | 創唯讀代理 | 檢查是否唯讀 |
| 深度行為 | 深度唯讀 | - |
| 協助 | 開發警告 | 類型檢查 |
| 使用場景 | 防止修改 | 條件判斷 |

### 淺層唯讀
```vue=
const state = shallowReadonly({
  foo: 1,
  nested: { bar: 2 }
})
// state.foo++ // 警告
state.nested.bar++ // 可以修改
```
| 特性 | `shallowReadonly` |
| --- | --- |
| 唯讀範圍 | 僅第一層 |
| 嵌套對象 | 可修改 |
| 效能 | 較好 |
| 使用場景 | 淺層保護 |


## 響應式檢查
### 類型判斷
- `isRef`
  - 檢查是否為 `ref`
- `isReactive`
  - 檢查是否為 `reactive`
- `isProxy`
  - 檢查是否為 proxy（`ref` 或 `reactive`）

```vue=
const refVal = ref(0)
const reactiveVal = reactive({})
const readonlyVal = readonly({})

console.log(isRef(refVal)) // true
console.log(isReactive(reactiveVal)) // true
console.log(isProxy(refVal)) // true
console.log(isProxy(reactiveVal)) // true
console.log(isProxy(readonlyVal)) // true
```

## 響應式轉換
### ref 相關轉換
- `unref`
  - ref → 原始值
- `toRef`
  - 屬性 → ref
- `toRefs`
  - 物件所有屬性 → ref

| 特性 | `unref` | `toRef` | `toRefs` |
|------|-------|-------|--------|
| 轉換方向 | ref → 值 | 屬性 → ref | 物件屬性 → refs |
| 響應性 | - | 保持 | 保持 |
| 使用場景 | 獲取值 | 單屬性引用 | 解構使用 |
| 返回類型 | 原始值 | ref | refs 物件 |

```vue=
// unref 範例
const foo = ref(1)
console.log(unref(foo)) // 1

// toRef 範例
const state = reactive({ foo: 1 })
const fooRef = toRef(state, 'foo')

// toRefs 範例
const state = reactive({
  foo: 1,
  bar: 2
})
const stateRefs = toRefs(state)
const { foo, bar } = stateRefs
```

### 回到原始數據
- toRaw
  - 響應式物件 → 原始物件

| 特性 | toRaw |
|------|--------|
| 功能 | 獲取原始對象 |
| 使用場景 | 脫離響應式 |
| 性能影響 | 無 |
| 響應性 | 丟失 |

```vue=
const foo = reactive({ count: 1 })
const rawFoo = toRaw(foo)
// rawFoo 的修改不會觸發更新
```



## 響應式監聽
### 自動依賴收集
- watchEffect
  - 自動追蹤依賴
- watchPostEffect
  - 組件更新後執行
- watchSyncEffect
  - 同步執行

| 特性 | `watchEffect` | `watchPostEffect` | `watchSyncEffect` |
|------|------------|-----------------|-----------------|
| 執行時機 | 自動 | 組件更新後 | 同步執行 |
| 依賴收集 | 自動 | 自動 | 自動 |
| 清理機制 | 支持 | 支持 | 支持 |
| 使用場景 | 一般場景 | DOM 操作 | 需要同步的場景 |

```vue=
// unref 範例
const foo = ref(1)
console.log(unref(foo)) // 1

// toRef 範例
const state = reactive({ foo: 1 })
const fooRef = toRef(state, 'foo')

// toRefs 範例
const state = reactive({
  foo: 1,
  bar: 2
})
const stateRefs = toRefs(state)
const { foo, bar } = stateRefs
```

### 明確監聽
- `watch`
  - 明確指定要監聽的 data
```vue=
import { ref, watch } from 'vue'

const count = ref(0)

// watch - 明確指定監聽源
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
}, {
  immediate: true, // 立即執行一次
  deep: true // 深度監聽
})
```

## 計算屬性
- `computed`
  - getter 函數版本
  - get/set 物件版本

```vue=
import { ref, computed } from 'vue'

const count = ref(0)

// 只讀計算屬性
const doubled = computed(() => count.value * 2)

// 可寫計算屬性
const doubledPlusOne = computed({
  get: () => count.value * 2 + 1,
  set: (val) => {
    count.value = (val - 1) / 2
  }
})

console.log(doubled.value) // 0
count.value = 2
console.log(doubled.value) // 4

doubledPlusOne.value = 5 // count.value 會被設為 2
```

## 如何選擇？
### 需要基本響應式？
 `ref` / `reactive`
 
### 需要性能優化？
`shallowRef` / `shallowReactive`

### 需要防止修改？
`readonly`

### 需要轉換類型？
`toRef` / `toRefs` / `unref`

### 需要監聽變化？
`watch` / `watchEffect`

### 需要依賴計算？
`computed`

```vue=
<template>
  <div>
    <h2>計數器: {{ count }}</h2>
    <h3>兩倍值: {{ doubled }}</h3>
    <button @click="increment">增加</button>
    <div>{{ user.name }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

// 基本響應式數據
const count = ref(0)
const user = reactive({
  name: 'John',
  age: 20
})

// 計算屬性
const doubled = computed(() => count.value * 2)

// 方法
const increment = () => {
  count.value++
}

// 監聽器
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})

// 副作用
watchEffect(() => {
  console.log(`Current count is: ${count.value}`)
  console.log(`User name is: ${user.name}`)
})
</script>
```