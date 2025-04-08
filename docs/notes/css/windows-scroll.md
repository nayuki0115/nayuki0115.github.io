# 滾動視窗 smooth 的方法

###### tags: `CSS` `JavaScript `

## CSS 方法
```css=
scroll-behavior: smooth;
```



可參考[這篇](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

## JS 方法
```javascript=
var anchor = document.querySelector('a[href="#dest"]')
var target = document.getElementById('dest')
anchor.addEventListener('click', function (e) {
  if (window.scrollTo) {
    e.preventDefault()
    window.scrollTo({'behavior': 'smooth', 'top': target.offsetTop})
  }
})
```
