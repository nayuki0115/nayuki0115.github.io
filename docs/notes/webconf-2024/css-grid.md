# Flex out！ CSS Grid 玩起來！ - 李建杭 Amos

###### tags: `WebConf2024` 

## 簡報
https://drive.google.com/file/d/1ZgN-oDsIazHd3kYt-bPWM1tOap7VGBLF/view

## 範例 code
https://drive.google.com/file/d/1aaH7wncnXp1ydu-C_V9_ez19oPG_j08D/view

## 共筆
https://hackmd.io/@webconf/BJ2N6ksMke/%2FbfiLdEW-QLCiM8oO0qwNMw

## CSS 演進
![image](https://hackmd.io/_uploads/Hkc7vmSIyl.png)

Flex 的出現解救了蒼生，但講者更想推的是Grid

Grid 不是 Grid system

### CSS Grid
CSS Grid 是原生的 CSS 佈局系統，用於創建二維（行和列）的網格佈局

```css=
/* CSS Grid 基本用法 */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 三等分列 */
  grid-template-rows: 100px auto;      /* 指定行高 */
  gap: 20px;                          /* 格線間距 */
}

/* 定位元素 */
.item {
  grid-column: 1 / 3;  /* 跨越第1到第3列 */
  grid-row: 1 / 2;     /* 佔據第1行 */
}
```

CSS Grid 的特點：
- 原生支援二維佈局
- 可以精確控制元素位置
- 高度靈活的佈局能力
- 不需要額外框架

### Grid System（網格系統）
Grid System 是一個預定義的佈局系統，常見於 CSS 框架（如 Bootstrap、Tailwind）中
```html=
<!-- Bootstrap Grid System 示例 -->
<div class="container">
  <div class="row">
    <div class="col-md-6">左半部分</div>
    <div class="col-md-6">右半部分</div>
  </div>
</div>
```
Grid System 特點：
- 預定義的欄數（通常是12欄）
- 響應式斷點設計
- 容易上手和使用
- 統一的設計規範

## Grid
- Grid 擁有大量屬性
![image](https://hackmd.io/_uploads/BkoP9hOIJe.png)
- Grid 原理就是格紙
- Grid 就是格子
![image](https://hackmd.io/_uploads/H1xxo2uUke.png)
- 格子不受紙張範圍限制
  - 可以破版
  - 也可以小於 parent container
![image](https://hackmd.io/_uploads/HJv7kTuIye.png)

## Grid適用情境
- 重複/規律性版面
- 板塊變化版面
![image](https://hackmd.io/_uploads/HytOJTdU1l.png)
- 比例變化型的版面
![image](https://hackmd.io/_uploads/HyFVZ6uU1x.png)
- 破格式設計
![image](https://hackmd.io/_uploads/S1tTHpO8kl.png)
- RWD
![image](https://hackmd.io/_uploads/HJclUauIkg.png)

## SUBGRID廣泛的支援了
繼承 parent container 的屬性
- 使用 DIV 製作 TABLE
![image](https://hackmd.io/_uploads/BJhdwpuIkg.png)
- 欄寬控制
![image](https://hackmd.io/_uploads/BJkJYp_Ikx.png)

## 我還要更新的內容
- transition keyword 
> 範例 code : height-transition
```html= 
<div class="list">
  <div class="list-item">
      <label class="toggle-btn">
          <input type="checkbox" name="" id="">
          Q : 金魚都能懂什麼？
      </label>
      <div class="content">
          <p>「金魚都能懂」的教學系列是由 Amos 創立，目的是為了讓大家在學習過程可以更加輕鬆自在且愉快...</p>
      </div>
  </div>
  <div class="list-item">
    <label class="toggle-btn">
      <input type="checkbox" name="" id=""> Q : 這段秀什麼？
    </label>
    <div class="content">
      <p>這段展現使用 grid 能夠實現不確定容器高度時的動畫轉換效果</p>
      <p>使用 CSS Grid 和 Transition 實現 height auto。</p>
    </div>
  </div>
  <div class="list-item">
    <label class="toggle-btn">
        <input type="checkbox" name="" id="">
        Q : 實現自動高度動畫其實不難，對吧
    </label>
    <div class="content">
        <p>來個長假文吧</p>
        <p>我個人認為義大利麵就應該拌42號混泥土，因為這個螺絲釘 的長度很容易直接影響到挖掘機的扭矩。你往裡砸的時候，一瞬間它就會產生大量 的高能蛋白，俗稱UFO，會嚴重影響經濟的發展，以至於對整個太平洋，和充電器的核污 染。再或者說透過這勾股定理很容易推斷出人工飼養的東條英雞，他是可以捕獲野生 的三角函數，所以說不管這秦始皇的切面是否具有放射性，川普的N次方是否有沈澱物， 都不會影響到沃爾瑪跟維爾康在南極匯合。</p>
      </div>
  </div>
</div>
```
```css=
.list {
  display: flex;
  flex-flow: wrap;
  gap: 1em;
}
.list-item {
  width: 100%;
  display: grid;
  grid-template-rows: auto 0fr;
  align-content: start;
  align-items: start;
  overflow: hidden;
  border: 1px solid #666;
  border-radius: 6px;
  transition: grid-template-rows 0.3s ease-in-out;
}
.list-item:has(:checked) {
  grid-template-rows: auto 1fr;
}
.toggle-btn {
  display: block;
  padding: 1ex 1em;
  align-self: start;
}
.toggle-btn:hover {
  background-image: linear-gradient(to bottom, #033,#066);
  color: #fff;
}
.toggle-btn input {
  display: none;
}
.content {
	overflow: hidden;
	padding: 0em 1em;
	position: relative;
}
.content::before {
	content: '';
	width: calc(100% - 2em);
	position: absolute;
	inset: 0;
	margin: auto;
	border-top: 1px dashed #000;
}
```
- Detail element 
使用 <detail>
> 範例 code : height-transition2
```html=
<div class="accordion">
  <details class="accordion-item" name="item">
    <summary class="detail-title">Q : 金魚都能懂什麼？</summary>
    <div class="detail-content">
      <p>「金魚都能懂」的教學系列是由 Amos 創立，目的是為了讓大家在學習過程可以更加輕鬆自在且愉快...</p>
    </div>
  </details>
  <details class="accordion-item" name="item">
    <summary class="detail-title">Q : 這段秀什麼？</summary>
    <div class="detail-content">
      <p>這段展現「不」使用 grid 也能夠實現不確定容器高度時的動畫轉換效果</p>
      <p>使用 HTML Details 和 interpolate-size: allow-keywords; 實現 height auto。</p>
      </div>
  </details>
  <details class="accordion-item" name="item">
    <summary class="detail-title">Q : 實現自動高度動畫真的不難，對吧</summary>
    <div class="detail-content">
      <p>來個長假文吧</p>
      <p>我個人認為義大利麵就應該拌42號混泥土，因為這個螺絲釘的長度很容易直接影響到挖掘機的扭矩。你往裡砸的時候，一瞬間它就會產生大量 的高能蛋白，俗稱UFO，會嚴重影響經濟的發展，以至於對整個太平洋，和充電器的核污 染。再或者說透過這勾股定理很容易推斷出人工飼養的東條英雞，他是可以捕獲野生 的三角函數，所以說不管這秦始皇的切面是否具有放射性，川普的N次方是否有沈澱物， 都不會影響到沃爾瑪跟維爾康在南極匯合。</p>
      </div>
  </details>
</div>
```
  
```css=
:root{
  interpolate-size: allow-keywords;
}
.accordion-item {
  margin: 30px;
  border: 1px solid #aaa;
}
.accordion-item .detail-title {
  background-color: #ccc;
  padding: 10px;
}
.accordion-item .detail-title::marker {
  content: '';
}
.accordion-item .detail-content {
  padding: 10px;
}
/* Animation */
.accordion-item::details-content {
  transition: height 0.5s ease, content-visibility 0.5s ease allow-discrete;
  height: 0;
  overflow: clip;
  content-visibility: visible!important;
}
.accordion-item[open]::details-content {
  height: auto;
  height: calc-size(auto);
}
```
  
- Color-mix function 
> 範例 code : color-mix

https://im1010ioio.hashnode.dev/css-currentcolor-accent-color-color-mix

```css=
:root {
	--btn-bg: #fa0;
	--btn-hover-bg: #fff;
}
html,body{
	height: 100%;
	place-content: center;
	text-align: center;
}
.btn {
	display: inline-block;
	padding: 1ex 3em;
	background-color: var(--btn-bg);
	color: #fff;
	font-size: 22px;
	margin: 6px;
	border: none;
}
.btn:nth-child(1):hover {
	background-color: color-mix(in srgb, var(--btn-bg), var(--btn-hover-bg) 20%);
}
.btn:nth-child(2):hover {
	background-color: color-mix(in srgb, var(--btn-bg), var(--btn-hover-bg) 50%);
}
.btn:nth-child(3):hover {
	background-color: color-mix(in srgb, var(--btn-bg), var(--btn-hover-bg) 80%);
}
	```