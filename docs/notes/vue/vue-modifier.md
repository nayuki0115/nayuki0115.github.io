# Vue 修飾符

###### tags: `Vue`

## v-model 修飾符
### v-model.lazy
[官方文件](https://vuejs.org/guide/essentials/forms#lazy)  
輸入資料的時候不會更動值，等輸入完畢(離開輸入框失去焦點)才會更新

```vue=
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" />
```

### v-model.number
[官方文件](https://vuejs.org/guide/essentials/forms#number)  
讓使用者輸入的結果轉成數字，如果該結果無法被 `parseFloat()`處理，會回傳原始的值
number 修飾符會在輸入框有 type="number" 時自動啟用

```vue=
<input type="number" v-model.number="age" />
```

### v-model.trim
[官方文件](https://vuejs.org/guide/essentials/forms#trim)  
自動把輸入資料的左右那邊空格去除
```vue=
<input v-model.trim="msg" />
```

## v-on 事件修飾符
[官方文件](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)  

[參考文件](https://peterhpchen.github.io/VuejsQuest/basic/17_EventModifier.html#stop-%E4%BF%AE%E9%A3%BE%E7%AC%A6)  

### .stop

取代 [`event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) 呼叫

```vue=
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>
```

### .prevent

取代 [`event.preventDefault()`](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/preventDefault) 呼叫

```vue=
<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>
```

### .self

只有在事件的目標是自己的時候才會叫用

```vue=
<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>
```

### .capture
用來指定事件在捕獲階段觸發，而不是在冒泡階段 (會優先觸發)

```vue=
<!-- use capture mode when adding the event listener     -->
<!-- i.e. an event targeting an inner element is handled -->
<!-- here before being handled by that element           -->
<div @click.capture="doThis">...</div>
```

### .once
事件最多被觸發一次

```vue=
<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>
```

### .passive
防止觸發 `event.preventDefault()`，就可以優化瀏覽器滾動性能，特別是在處理滾動事件時
一般用於觸摸事件的監聽器，可以用來改善手機、平板的滾動性能

```vue=
<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>
```

### 需注意 
- 不要把 `.passive` 和 `.prevent` 同時使用，，因為 `.passive` 已經告訴瀏覽器你不打算阻止事件的預設行為，所以如果你同時使用 `.prevent`（表示你打算阻止預設行為），會收到瀏覽器的 警告

- 使用修飾符時需要注意調用順序，因為 code 是以相同的順序生成的
  - @click.prevent.self → 阻止元素及其子元素的所有點擊事件的默認行為
  - @click.self.prevent → 只會阻止對元素本身的點擊事件的默認行為

## 按鍵修飾符
### 按鍵別名
- `.enter`
- `.tab`
- `.delete` （"Delete"和"Backspace"兩個按鍵）
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

### 系統按鍵修飾符
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`
  - 在  Mac 上是指 Command 鍵 （⌘）
  - 在 Windows 上是指 Windows 鍵 （⊞）

```vue=
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 點擊 -->
<div @click.ctrl="doSomething">Do something</div>
```

### `.exact` 修飾符
通常與鍵盤事件一起使用，會要求所有的修飾鍵（如 `alt`、`shift`、`ctrl`、`meta`）必須完全匹配，不允許有其他鍵被按下
```vue=
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```
## 滑鼠按鍵修飾符
- `.left` ( 滑鼠左鍵 )
- `.right` ( 滑鼠右鍵 )
- `.middle` ( 滑鼠中鍵 )