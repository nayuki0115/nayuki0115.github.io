# ESLint One for All Made Easy - Anthony Fu

###### tags: `WebConf2024`

## 簡報
https://talks.antfu.me/2024/webconf-tw

https://antfu.me/
## 共筆
https://hackmd.io/@webconf/BJ2N6ksMke/%2FuUCLipjyTyCrzGDCRHV9BA

## ESLint 傳統設定檔(.eslintrc) vs ESLint Flat config
![image](https://hackmd.io/_uploads/H1uc4LqLJe.png)

## 遷移工具
至v9
https://www.npmjs.com/package/@eslint/migrate-config
```script=
npx @eslint/migrate-config .eslintrc.json
```
![image](https://hackmd.io/_uploads/HJnyHIc8ye.png)

## one for All
傳統的做法要做一個monorepo 才能管理，每次增加一個選項需要很多的手動覆蓋

新型的設定檔我可以撰寫一個工廠函式，底層去改內部的位置

![image](https://hackmd.io/_uploads/Hyz4BL9Ikl.png)


## 工具
```script=
eslint --inspect-config
```
![image](https://hackmd.io/_uploads/S1ZYrI5Iye.png)


## 專案感知的設定檔
[Nuxt ESLint](https://eslint.nuxt.com/)

## ESLint 不只是一個 Linter
它還是一個成熟且強大的AST工具包

## ESLint 也可以是一個格式化工具
[ESLint Stylistic](https://eslint.style/)

## ESLint 也可以是遷移工具（Code modification)
[eslint-plugin-command](https://github.com/antfu/eslint-plugin-command)

## ESLint 也可以是多語言的 Linter
![image](https://hackmd.io/_uploads/SJnXi8cIyx.png)

https://github.com/eslint/rfcs/blob/main/designs/2022-languages/README.md

## 如果想要建構自己/團隊的 eslint file
可以參考 https://github.com/antfu/eslint-config

## 簡報用什麼做的？
https://sli.dev/