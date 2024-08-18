# Vue Computed

###### tags: `Vue` `JS`

## 基本用法

> computed 方法接受一個 getter 函式，會回傳一個唯讀的響應式 Ref 物件。
> 可參考[此篇](https://chupai.github.io/posts/2104/compositionapi/)
```
const plusOne = computed(() => count.value + 1);
```

```
const selectKeywords = computed(() => { 
	return xxxx      
})
```

## Setter
> setter
> 使用具有 get 和 set 函式的物件，並回傳一個可寫的響應式 Ref 物件。
> 可參考[此篇](https://chupai.github.io/posts/2104/compositionapi/)

```
const currentLang = computed({
	get(){
		return props.active
	},
	set(val){
		emit('update:active', val)
	}
})
```