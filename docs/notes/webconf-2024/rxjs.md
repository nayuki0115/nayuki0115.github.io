# 有限狀態機與 RxJS - 奶綠茶

###### tags: `WebConf2024`

## 簡報
https://milkmidi.medium.com/2024-webconf-%E6%9C%89%E9%99%90%E7%8B%80%E6%85%8B%E6%A9%9F%E8%88%87-rxjs-fdd9811ed5bb

## 共筆
https://hackmd.io/@webconf/BJ2N6ksMke/%2FZ5mdWoHoTKuYqapQTeR2Gw#%E6%9C%89%E9%99%90%E7%8B%80%E6%85%8B%E6%A9%9F%E8%88%87-RxJS---%E5%A5%B6%E7%B6%A0%E8%8C%B6

## 有限狀態機
https://zh.wikipedia.org/zh-tw/%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E6%9C%BA

有限狀態機（Finite State Machine，FSM）是一種可以根據輸入在不同狀態之間轉換的數學模型

以紅綠燈為例：
- 同一個時間點，只會存在一種狀態 (同時間不會有兩個燈)
- 有限數量的狀態（State）：紅、黃、綠
- 有限數量的事件（event）：一定時間內轉到下個狀態
- 一個 initial state
- 一個轉換函式 transition function，傳入當下的狀態及事件，會返回下一個狀態囚
- n 個 final state

### 目的
目的是要收斂狀態，有寫(的狀態)才會發生
並且收斂需求

## xstate
> 不建議自幹一個有限狀態機，因為要確保可以安全使用

一個js 的 library，基於有限狀態機的概念，是一套狀態管理工具，並且有介面可以使用
[xstate](https://xstate.js.org/)
可以[參考](https://blog.jerry-hong.com/tags/x-state)

以紅綠燈為例：
![image](https://hackmd.io/_uploads/SkG8t2XIke.png)

從簡報截取的 [example](https://stately.ai/registry/editor/27e4d2cf-ec66-4ff1-aede-9c3a8b045e98?machineId=51a11258-112e-445e-80f3-e3e2820ed006&mode=Design)

以番茄時鐘為例：
![image](https://hackmd.io/_uploads/ry-_thQU1l.png)
從簡報截取的 [example](https://stately.ai/registry/editor/011eecd2-ba18-451e-982e-23f096b24697?machineId=da4019e5-2ba1-4564-831a-d75de22517be&mode=Simulate)
狀態有「開始」、「加五分鐘」、「暫停」、「使用中」， 介面可以控制按鈕是否有被禁用，並且顯示相對應可點選的按鈕

### 為何選 xstate
1. 有 GUI 可以使用， 交接給任何人都可以順利進行
2. 有 [Vscode Extension](https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode) 可以使用
3. 很多人用
4. 常常在更新
5. 遵循 functional programming 精神
6. 讓新加入專案的工程師可以快速了解有哪些狀態可以使用

### 建議
使用 library 的時候，去看他的原始碼，了解他的程式邏輯

## framework, library 差在哪
Framework: 同一個專案只會有一個，例如： Vue、React
Library：同時間可以好幾個不影響專案開發，例如： xState

由此可知 jQuery 是個 Library （我們可以從 Vue 或是 React，套 jQuery ）

## RxJS
情境：
同事 A 寫了，一個 util for Hash Change Listener
![image](https://hackmd.io/_uploads/H1v5Y2QUJe.png)
同事 B 寫了，另一個 Hash Change Listener
![image](https://hackmd.io/_uploads/SJ0sFnQIyx.png)


講者：你們覺得有沒有什麼問題
：（心理覺得，有兩種版本沒有統一，各自發展）
講者：如果有想法的, 恭喜你，代表你的思考是有 senior 水準的

為了統一，(使用 RxJS )會限制團隊成員的開發風格 

### Vue 和 React 缺點
Js render 在 client 端，代表 Js 最後才載入，
進入頁面的時候會有一瞬間看到全白 （或是閃一下），所以 fcp 會被扣分

[Rx 系列](https://github.com/orgs/ReactiveX/repositories?type=all)不只在 Js 中使用，有 RxJava、RxPHP... （各種

### 選擇 RxJS 的原因
- popular
- Library層級
- 規範大家的風格

![image](https://hackmd.io/_uploads/SJ8Lq2QLke.png)


### Functional Programing
一定是 pure function

相同的輸入一定是相同的輸出
而且過程中沒有side effect
每個功能都是一個獨立的 function
團隊成員很好被 code review
寫測試的時候也要測 pure function

## RxJS 優點
遵循 Functional Programing 的精神
不太需要客製化的情況下，已可達到大多需求

## 結語
![image](https://hackmd.io/_uploads/S1xecnQIJg.png)
