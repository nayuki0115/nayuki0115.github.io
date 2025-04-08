# Vue Watch

###### tags: `Vue` `JavaScript `

## Vue Composition api
```
watch(() => xxx (newVal, oldVal) => {
	....
}
```

### immediate
>  immediate 設為 true 可讓監聽值在初始和值被改變時觸發 callback handler
>  可參考[這篇](https://www.cythilya.tw/2017/04/15/vue-watch/)
```
watch(() => xxx (newVal, oldVal) => {
	....
}, { immediate: true }
```

### deep
> 當欲觀察值的特性為 call by reference，例如 Object 時，需將 deep 值設定為 true，告知 watch 需要深度觀察。否則會因為特性關係，無法觸發監聽器。
>  可參考[這篇](https://medium.com/unalai/%E8%AA%8D%E8%AD%98-vue-js-watch-%E7%9B%A3%E8%81%BD%E5%99%A8-ffee991368be)

```
watch(() => xxx (newVal, oldVal) => {
	....
},{ deep: true }
```

## Vue 3
```javascript=
watch(() => xxx , (newVal, oldVal) => {
  ....
})
```
> 多個
```javascript=
watch(() => [xxx, xxx], (newVal, oldVal) =>{
  ....
}
```
