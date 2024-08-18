# Vue 3 雙向綁定以及 component 包裝注意事項

###### tags: `Vue` `Nuxt`

>父層 pages

```htmlembedded=
<thePagination
  :pageSize="parentPageSize"
  :currentPage="parentCurrentPage"
/>
```

> 子層 components / thePagination.vue
```javascript=
<template>
  <div class="pager-group d-flex flex-column flex-lg-row align-center ga-4 mb-6">
    <div>共 6 頁 {{ totalRecord }} 筆</div>
    <div>
      <v-select
        v-model="pageSize"
        :items="pageSizeOptions"
        label="每頁顯示"
        variant="outlined"
      ></v-select>
    </div>
    <v-pagination
      v-model="currentPage"
      :length="15"
      :total-visible="5"
      current-page-aria-label="第Ｘ頁"
      page-aria-label="前往第Ｘ頁"
      previous-aria-label="上一頁"
      next-aria-label="下一頁"
      first-aria-label="第一頁"
      last-aria-label="最後ㄧ頁"
      show-first-last-page
      color="primary"
      class="xxxxxx"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  totalRecord: {
    type: Number,
    require: true
  },
  currentPage: {
    type: Number,
    requre: true
  },
  pageSize: {
    type: Number,
    default: 15
  },
  pageSizeOptions: {
    type: Array,
    default: [15, 30, 50, 100]
  },
  
})
</script>
```


## 問題點

這樣的寫法會導致錯誤發生

![image](https://hackmd.io/_uploads/rkL2wW4aT.png)

原因是 vue 3 把單向綁定 (父層上的 v-bind 以及丟到components 中的 props )丟到雙向綁定(components 裡面的 v-model)會直接噴 error

## 解決方法

### 方法一 - 全部使用單向資料流傳遞

父層仍然維持使用 v-bind 單向綁定
>父層 pages

```htmlembedded=
<thePagination
  :pageSize="parentPageSize"
  :currentPage="parentCurrentPage"
/>
```

子層內部跟 v-select/v-pagination 綁定的 v-model 改用 `modelValue` 搭配 `update:modelValue`
可參考 [文章一](https://blog.csdn.net/Onion_521257/article/details/129145033) 和 [文章二](https://v3-migration.vuejs.org/breaking-changes/v-model.html) 
> 子層 components / thePagination.vue

```htmlembedded=
<template>
  <div class="pager-group d-flex flex-column flex-lg-row align-center ga-4 mb-6">
    <div>共 6 頁 {{ totalRecord }} 筆</div>
    <div>
      <v-select
        :modelValue="_pageSize"
        :items="pageSizeOptions"
        @update:modelValue="handleSelect"
        label="每頁顯示"
        variant="outlined"
      ></v-select>
    </div>
    <v-pagination
      :modelValue="_currentPage"
      :length="15"
      :total-visible="5"
      @update:modelValue="handlePagination"
      current-page-aria-label="第Ｘ頁"
      page-aria-label="前往第Ｘ頁"
      previous-aria-label="上一頁"
      next-aria-label="下一頁"
      first-aria-label="第一頁"
      last-aria-label="最後ㄧ頁"
      show-first-last-page
      color="primary"
      class="xxxxxx"
    ></v-pagination>
  </div>
</template>
```

### 方法二 - 子層跟v-select/v-pagination維持使用v-model綁定

父層維持不變（仍然維持使用 v-bind 單向綁定）

>父層 pages

```htmlembedded=
<thePagination
  :pageSize="parentPageSize"
  :currentPage="parentCurrentPage"
/>
```

子層跟 v-select/v-pagination 綁定方式是跟最一開始一樣使用 `v-model`

> 子層 components / thePagination.vue
```javascript=
<template>
  <div class="pager-group d-flex flex-column flex-lg-row align-center ga-4 mb-6">
    <div>共 6 頁 {{ totalRecord }} 筆</div>
    <div>
      <v-select
        v-model="_pageSize"
        :items="pageSizeOptions"
        label="每頁顯示"
        variant="outlined"
      ></v-select>
    </div>
    <v-pagination
      v-model="_currentPage"
      :length="15"
      :total-visible="5"
      current-page-aria-label="第Ｘ頁"
      page-aria-label="前往第Ｘ頁"
      previous-aria-label="上一頁"
      next-aria-label="下一頁"
      first-aria-label="第一頁"
      last-aria-label="最後ㄧ頁"
      show-first-last-page
      color="primary"
      class="xxxxxx"
    ></v-pagination>
  </div>
</template>
```

由於將 props （單向綁定）直接跟 v-select/v-pagination 使用 `v-model` 會噴 error，所以此方法是在子層使用新變數接住

```javascript=

const _currentPage = ref(0)
watch(props.currentPage, (v) => {
    _current.value = v
})

const _pageSize = ref(0)
watch(props.pageSize, (v) => {
    _pageSize.value = v
})

```


### 方法三 - 全部使用 `v-model` 雙向綁定

父層跟子層改使用`v-model`雙向綁定，這樣子層跟 v-select/v-pagination 的 v-model 綁定就不會發生上述的error

因此為了要實作`v-model`，需使用 `:modelValue` 搭配 `@update:modelValue` （`modelValue`可替換為自訂的 props 名稱，比如本範例的 `pageSize` 和 `currentPage`）


> 子層 components / thePagination.vue
```htmlembedded=
<template>
  <div class="pager-group d-flex flex-column flex-lg-row align-center ga-4 mb-6">
    <div>共 6 頁 {{ totalRecord }} 筆</div>
    <div>
      <v-select
        v-model="_pageSize"
        :items="pageSizeOptions"
        label="每頁顯示"
        variant="outlined"
      ></v-select>
    </div>
    <v-pagination
      v-model="_currentPage"
      :length="15"
      :total-visible="5"
      current-page-aria-label="第Ｘ頁"
      page-aria-label="前往第Ｘ頁"
      previous-aria-label="上一頁"
      next-aria-label="下一頁"
      first-aria-label="第一頁"
      last-aria-label="最後ㄧ頁"
      show-first-last-page
      color="primary"
      class="xxxxxx"
    ></v-pagination>
  </div>
</template>
```

props 這個變數是單向綁定，所以需要使用新變數接住(例如 computed, watch)

使用 watch 的寫法：

```javascript=

const emits = defineEmits([
  'update:currentPage',
  'update:pageSize'
])

const _currentPage = ref(0)
watch(props.currentPage, (v) => {
    _current.value = v
    emit('update:currentPage', v)
})

const _pageSize = ref(0)
watch(props.pageSize, (v) => {
    _pageSize.value = v
    emit('update:pageSize', v)
})

```


除了 watch 的寫法外還可以使用 computed （要加 get / set ） 的方式來寫


```typescript=
const emits = defineEmits([
  'update:currentPage',
  'update:pageSize'
])


const _currentPage = computed({
  get () {
    return props.currentPage
  },
  set (v) {
    emits('update:currentPage', v)
  }
})
const _pageSize = computed({
  get () {
    return props.pageSize
  },
  set (v) {
    emits('update:pageSize', v)
  }
})
```

子層已實作雙向綁定，父層可使用雙向也可以使用單向兩種方式跟子層作傳遞

1. pages 改用 v-model 雙向綁定
```htmlembedded=
<thePagination
  v-model:pageSize="parentPageSize"
  v-model:currentPage="parentCurrentPage"
/>
```

2. pages 仍然維持使用 v-bind 單向綁定
```htmlembedded=
<thePagination
  :pageSize="parentPageSize"
  @update:totalRecord="parentTotalRecord = $event"
  :currentPage="parentCurrentPage"
  @update:currentPage="parentCurrentPage = $event"
/>
```



