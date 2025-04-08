# 在 Vue 寫視窗滾動原生事件 

###### tags: `JavaScript ` `Vue`

滾動視窗原生方法可以參考 [JS 滾動視窗](/notes/js/origin-js-scroll) 

這邊主要是記錄遇到比較神奇的狀況

> 後台功能為編輯器，但當初為了為無障礙，所以沒有開連結的功能出去
> 但在後台有註解的小區塊，需在前台內容點下移到註解區塊 
> 後台是可以隨意移動註解區，每個註解區可能會在不同位置

需求：
在html找到文字取代，按下該文字並移到該註解區
因為該區在 vue created 裡面

遇到的困難：
在 code 第 16 行中，不知道 onClick 怎麼寫，
那邊吃不到 vue 的 methods

解決方法：
使用原生的方式寫  onclick="functionName"
function要放在windows上面他才會叫的到，比如 
```javascript=
window.functionName = () => { /*your code*/ }
```  
https://www.w3schools.com/jsref/event_onclick.asp

```javascript=
this.$nextTick(() => {
  let divElement = document.getElementsByClassName('annotation') // 有註解的區塊都有加 class name 'annotation'
  let annotation = ['註解1', '註解2', '註解3'] // 記錄頁面中有的註解標題

  // 標色
  let contentElement = document.getElementsByClassName('article-content') // 編輯器內容的 class name 'article-content'
  window.getAnnotation = (clickName, index) => {
    let annotationInfo = annotation[index]
    if(annotationInfo === clickName ) {
      divElement[index].scrollIntoView({ behavior: 'smooth' });
    }
  }
  for(let i = 0 ; i < contentElement.length ; i++) {
    for(let j = 0 ; j < annotation.length ; j++) {
      if(contentElement[i].innerHTML.indexOf(annotation[j]) !== -1) {
        let temp = String(contentElement[i].innerHTML).replace(annotation[j], `<a href="javascript:void(0)" onClick="getAnnotation('${annotation[j]}', ${j})" title="前往註解${annotation[j]}">${annotation[j]}</a>`)
        contentElement[i].innerHTML = temp
      }
    }
  }
})
```