# Nuxt3 SSR 出現 500 可能的問題

###### tags: `Nuxt`

## 情況：內網沒有對外、自簽憑證出了問題 
一開始進入網站，只要有打 api 的情況 ( SSR 模式 )，都會拿到 500

> 問題原因： 因為 staging 沒有對外，用自簽憑證

> 解決方法：
> 在nuxt 的.env.staging 
> 加上NODE_TLS_REJECT_UNAUTHORIZED=0
> 略過驗證自簽憑證，可參考[這篇](https://hackmd.io/@yuna9068/r1janAtpn)

```script=
NODE_TLS_REJECT_UNAUTHORIZED=0
```
