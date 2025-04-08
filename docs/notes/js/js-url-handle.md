# JS 解析網址 / 處理網址

###### tags: `JavaScript `

## 把 Object 轉換成網址參數
> 情境：
> 想把變數帶到網址上
```javascript=
const searchParams = new URLSearchParams('q=keyword')
const searchParams = new URLSearchParams({q: 'keyword'})
```

> 情境：
> fetch GET 的時候
```javascript=
const queryString = new URLSearchParams(obj).toString()
```

```javascript=
const queryString = new URLSearchParams(obj).toString()
// 此為打 GET api 把檔案轉成 csv 的 function
handleExport(`suggest.export?${queryString}`, {}, 'GET')
```