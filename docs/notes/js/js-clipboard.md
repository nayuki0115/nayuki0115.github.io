# JS 複製至剪貼簿

###### tags: `JavaScript`
> 情境：複製網址

## 頁面上沒有 input 複製的情況
```javascript=
let inputc = document.body.appendChild(document.createElement("input"));
inputc.value = window.location.href || 或是要分享的網址;
inputc.focus();
inputc.select();
document.execCommand('copy');
inputc.parentNode!.removeChild(inputc);
```

如果以上方法會造成位移，需加入
```javascript=
let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
window.scrollTo(0, scrollY)
```

## 頁面上有 input 可以複製的情況
```javascript=
let copyInput = document.querySelector('#quoteCopy')
copyInput.select()
try {
  document.execCommand('copy');
  this.$message.info('已複製文獻引用格式')

} catch (err) {
  this.$message.error('喔喔！請稍後再試，',err)
}
```

## 參考文件
https://chupai.github.io/posts/2101/clipboard/