# JS 字串處理

###### tags: `JS`

## 長度 / 擷取相關

### length
> 字串長度

#### 用法
```
stringObject.length;
```
#### 範例
```
let a = 'aaa'
a.length
```

### substr() 
> 提取字串中的幾個字（不包含）
#### 用法
```
stringObject.substr(start, length)
```
> start 是一個數字表示要從哪個位置開始擷取，位置從 0 開始
> 如果 start 是一個負數，則表示值同 "字串長度 + start"
> 如果 start 大於字串長度，結果會返回空字串
> 參數 length 是一個數字表示總共要取出幾個字元，預設取到字串結尾
> 可參考[這篇](https://www.fooish.com/javascript/string/substr.html)和[這篇](http://www.eion.com.tw/Blogger/?Pid=1015)



#### 範例
```
let str = 'abcdefghij';
console.log(str.substr(1, 2)); // 輸出 'bc'
console.log(str.substr(-3, 2)); // 輸出 'hi'
console.log(str.substr(-3)); // 輸出 'hij'
console.log(str.substr(1)); // 輸出 'bcdefghij'
console.log(str.substr(-20, 2)); // 輸出 'ab'
console.log(str.substr(20, 2)); // 輸出空字串 ''
```

### substring()
> 提取字串中兩個指定索引號之間的字元（包含）
#### 用法
```
stringObject.substring(start, index)
```
> 參數 start 是一個數字表示要從哪個位置開始擷取
> 參數 index 是一個數字表示要擷取到哪個位置之前為止，預設取到字串結尾
> 可參考[這篇](https://www.fooish.com/javascript/string/substring.html)和[這篇](http://www.eion.com.tw/Blogger/?Pid=1015)

#### 範例
```
let str = 'fooish.com';

// 輸出 'foo'
console.log(str.substring(0, 3))
console.log(str.substring(3, 0))

// 輸出 'sh.'
console.log(str.substring(4, 7))
console.log(str.substring(7, 4))

// 輸出 fooish
console.log(str.substring(0, 6))

// 輸出 'fooish.com'
console.log(str.substring(0, 10))
console.log(str.substring(0, 20))
console.log(str.substring(100, 0))
```

### slice()
> 取得部份字串
#### 用法
```
stringObject.slice(start, end)
```
> 參數 start 是一個數字表示要從哪個位置開始擷取；
> 如果 start 是一個負數，則表示值同 "字串長度 + start"；
> 如果 start 大於字串長度，結果會返回空字串

> 參數 end 表示擷取到這個位置之前為止，預設等於字串長度；
> 如果 endSlice end，則表示值同 "字串長度 + end"
> 可參考[這篇](https://www.fooish.com/javascript/string/slice.html)和[這篇](http://www.eion.com.tw/Blogger/?Pid=1015)

```
let str = 'The morning is upon us.'
// 輸出 'he morn'
console.log(str.slice(1, 8))
// 輸出 'morning is upon u'
console.log(str.slice(4, -2))
// 輸出 'is upon us.'
console.log(str.slice(12))
// 輸出空字串 ''
console.log(str.slice(30))
// 輸出 'us.'
console.log(str.slice(-3))
// 輸出 'us'
console.log(str.slice(-3, -1))
// 輸出 'The morning is upon us'
console.log(str.slice(0, -1))
```

## 組合相關
### concat() 
> 混合兩個字串成一個新字串
#### 用法
```
stringObject.concat(stringX,stringX,...,stringX)
```
#### 範例
```
let myStr = "my"
myStr.concat("Str","ing") /* myString */
```