# JS 比較值的三種方式

###### tags: `JavaScript `

## 比較值的三種方式
- == (loose equality)
- === (strict equality)
- `Object.is()`

## `Object.is()` 和 === 的差異
除了以下情況，`Object.is()` 和 === 的行為是完全相同的
### 處理 NaN 的比較
```javascript=
// NaN 的比較
NaN === NaN                  // false
Object.is(NaN, NaN)         // true

// 在實際應用中
const x = 0/0;  // NaN
console.log(x === NaN)         // false
console.log(Object.is(x, NaN)) // true
```

> 要分辨 NaN 的話，可以用 [`isNaN`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

### 處理正負零的比較
```javascript=
// 正負零的比較
-0 === +0                   // true
Object.is(-0, +0)          // false

// 在實際應用中
const negZero = -0;
console.log(negZero === 0)         // true
console.log(Object.is(negZero, 0)) // false
```

## 哪個情境下要用哪個？
相等性比較，使用 `===` 就足夠了，而且效能可能較好

### 處理 NaN
使用 `Object.is()`

### 區分 +0 和 -0
使用 `Object.is()`

## 效能比較
`===` 是運算符，直接在引擎層面實現
`Object.is()` 是方法調用，有額外的函數調用開銷

## 參考
- [Equality comparisons and sameness
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [【ES6 小筆記】比較值：== vs. === vs. Object.is() 差在哪呢](https://ithelp.ithome.com.tw/articles/10217627?sc=rss.iron)
- [在 JavaScript 當中，==、=== 與 Object.is()的區別](https://www.explainthis.io/zh-hant/swe/js-equality)