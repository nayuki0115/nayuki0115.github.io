# JS 社群分享 
###### tags: `JS`

## Facebook
```javascript=
shareLink = `https://www.facebook.com/sharer/sharer.php?u=${分享網址}&quote=${文字}`
window.open(shareLink,'_blank','noopener')
```

## Instgram
```javascript=
shareLink = `https://www.instagram.com/?url=u=${分享網址}`
window.open(shareLink,'_blank','noopener')
```

## Line
```javascript=
shareLink = ` https://social-plugins.line.me/lineit/share?url=${分享網址}&text=${文字}`
window.open(shareLink,'_blank','noopener')
```

## Twitter 
> https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
```javascript=
shareLink = `https://twitter.com/intent/tweet?url=${分享網址}&text=${文字}`
window.open(shareLink,'_blank','noopener')
```