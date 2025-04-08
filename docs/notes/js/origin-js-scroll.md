# JS 滾動視窗

###### tags: `JavaScript `

##  scrollIntoView

### 有 element id

```javascript=
let targetDiv = document.getElementById('your-div-id')
targetDiv.scrollIntoView({ behavior: 'smooth' })
```

### 有 element className
```javascript=
let targetElements = document.getElementsByClassName('your-class-name')
targetElements[i].scrollIntoView({ behavior: 'smooth' })
```

## scrollTop

### 有 element id

```javascript=
let targetDiv = document.getElementById('your-div-id');
let scrollHeight = 500; // 設定要滾動到的高度，單位為像素

targetDiv.scrollTop = scrollHeight;
```

### 有 element className
```javascript=
// 獲取具有特定 class 名稱的元素集合
var targetElements = document.getElementsByClassName('your-class-name');

// 假設你想要控制第一個元素的滾動高度
var firstTargetElement = targetElements[0];

if (firstTargetElement) {
    var scrollHeight = 500; // 設定要滾動到的高度，單位為像素
    firstTargetElement.scrollTop = scrollHeight;
}

```
