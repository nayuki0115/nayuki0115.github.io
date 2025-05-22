# 開發者工具 - Elements 面板
###### tags: `Web` `工具`


## Elements 面板
呈現網頁的骨架與樣式，可以檢視和修改網頁的 HTML 結構和 CSS 樣式

可以分為 DOM 結構以及元素（Element）內容兩個子面板
![DOM 結構 (1)](https://hackmd.io/_uploads/B1drYlU1el.png)

Debug CSS 最常用的就是 Styles 分頁

## 怎麼開啟
- 按下鍵盤上的 F12 鍵
- 快捷鍵 `Control + Shift + C` / `Command + Shift + C `

## Element 子面板

### Styles 分頁
Styles 分頁中的規則列表按照 CSS 優先度從高到低排序
位於上方的規則會覆蓋下方的相同屬性

![styles](https://hackmd.io/_uploads/rkiYheLJgx.png)

上圖中任意區域，可以新增一條 Style，編輯時可用 Tab 跳到 Value 或下一條 Style

#### Shadow Editor

![Shadow Editor](https://hackmd.io/_uploads/SkiK4-I1el.png)
`box-shadow` 屬性右方會有一個小小的圖示，點擊後會跳出陰影編輯器，  
如果原本沒有 box-shadow，就隨意輸入一個 `box-shadow: 0 0 black`;
另外也可以切換為 `outset` 或 `inset`  


#### Color editor

![Color editor](https://hackmd.io/_uploads/r106_WUJlx.png)

顏色編輯器大家應該都有用過，除了修改顏色以外，還有很多好用的功能

- 取色器
  - 當需要選取較小範圍的顏色（如文字）時，建議將頁面放大數倍，這樣可避免不小心取到邊緣的漸變色

- 格式轉換器
  - 透過編輯器右側的上下箭頭按鈕，可以輕鬆在不同色彩格式間轉換（如 RGB、HEX、HSL等），同時自動更新 color 屬性值

- 調色板 Palette
  - Page Colors: 從當前網頁的 CSS 中提取出的色彩集合，使用這些顏色能確保設計與網站整體風格協調
  - Material Design: Google 設計語言的標準色彩，當缺乏靈感時可作為參考
  - Custom: 通過右側加號按鈕可新增自定義色塊，不需要時可右鍵點擊色塊移除
  - CSS Variables: 顯示已在樣式表中定義的色彩相關 CSS 變數，方便重複使用


#### Contrast ratio

![Contrast ratio](https://hackmd.io/_uploads/Hy6sSMIyex.png)

僅適用於 `color` 屬性的顏色編輯器，因為它主要用於測量文字與背景間的對比關係
點擊編輯器右側的對比度圖示後，顏色選擇區域會出現兩條白色參考線

- 顯示的兩條白線分別代表
  - AA 標準線：最低可接受的對比度標準，達到此線才算符合基本可讀性要求
  - AAA 標準線：更高級別的對比度標準，提供更佳的可讀性體驗

- 字體大小會影響所需的對比度標準：
  - 較大字體所需的最低對比度要求較低
  - 較小字體則需要更高的對比度以確保可讀性

#### Box model
![Box model](https://hackmd.io/_uploads/SJJziG8Jxe.png)

提供 Box model 和編輯功能

- 位置
  - Styles分頁最下方
  - Computed 分頁最上方
- 使用方式
  - 點擊 Box Model 中任何包含數字的區域（如 `margin`、`padding`、`border` 或 `width`/`height`）可直接進行編輯
  - 編輯完畢後按 Enter 即可立即應用變更
- 定位元素的特殊功能
  當檢視的元素具有非 static 的 position 屬性（如 relative、absolute、fixed 或 sticky）時
  - Box Model 會額外顯示一層 `position` 相關的設定
  - 此區域允許直接編輯元素的 `top`、`right`、`bottom`、`left` 值

#### Pseudo class

![Pseudo class](https://hackmd.io/_uploads/SyNkzXLJxg.png)

- 什麼是虛擬類別 (Pseudo Class)
  - `:hover`、`:active`、`:focus` 等，用於定義元素在特定互動狀態下的樣式變化，這些狀態通常難以用 JavaScript 手動觸發來測試
- 啟用 Pseudo class 的方法
  - 方法 1：元素右鍵選單
    - 在元素檢查器中右鍵點擊目標元素
    - 在彈出選單中找到 `Force state` 選項
  - 方法 2：Styles 分頁
    - 位於樣式編輯區的上方 `:hov`

#### .cls 按鈕：CSS 類別管理工具
![cls 按鈕](https://hackmd.io/_uploads/rJTuuduyex.png)
- 使用 `.cls` 按鈕的方法
  - Styles 分頁
    - 位於樣式編輯區的上方 `.cls`
- 類別切換
  - 以列表形式顯示當前元素所有的 CSS 類別
  - 每個類別旁邊都有一個勾選框，可以直接開關類別 
- 新增類別
  - 界面有一個 `Add new class` 輸入框，在框中輸入新類別名稱並按 Enter


#### 新增 Style Rule
![新增 Style Rule](https://hackmd.io/_uploads/S1WcUiuJex.png)

- Styles 分頁中找到 `+` 符號按鈕，即可生成一條新的 CSS，由此新增 CSS
- 如果長按 `+` 符號按鈕，會有css檔下拉選單，可以選擇將新規則寫入特定的 CSS 檔

#### CSS 刪除線
![CSS 刪除線](https://hackmd.io/_uploads/rJ3JDRuJgg.png)

當 CSS 屬性上出現刪除線時，表示該屬性雖然已宣告但未能生效
- 優先級覆蓋：更高優先級的規則已覆蓋了這條樣式
- 語法錯誤：屬性值格式不正確或不合法（此時左側通常會顯示警告驚嘆號）
- 不適用屬性：該屬性可能不適用於目前的元素類型

### Computed 分頁
![Computed 分頁](https://hackmd.io/_uploads/ryEuQD2Jlx.png)

- Styles 分頁中的覆蓋關係難以確定最終生效的 CSS 屬性值時，就可以使用 Computed 分頁
  - 顯示元素最終計算後的 CSS 屬性值
  - 適合查詢被多條規則影響的屬性（如 `background-color`）

- 操作選項
  - `Filter 搜尋框`：快速過濾尋找特定屬性，減少視覺干擾
  - `Show all 選項`：顯示所有 CSS 屬性，包括繼承或預設值
  - `Group 選項`：將相關 CSS 屬性分組顯示

#### Rendered Fonts
顯示選中的元素中使用的所有字體資訊

- 提供的資訊
  - 實際使用的字體 (Family name)：顯示瀏覽器最終選擇渲染文字的字體名稱
  - 字體來源 (PostScript name)：指出字體的載入來源（如系統字體、網頁字體）
  - 渲染字元數量 (Font origin)：統計使用該字體渲染的字元數量

- 為什麼有時候不顯示？
  - 選中的元素不包含文字
  - 元素使用預設字體

### Layout 分頁
用來查看、修改 Grid 和 Flex 的地方

## DOM 結構
### 取得 DOM 元素的 3 種方法

![取得 DOM 元素](https://hackmd.io/_uploads/HJy0y9hylg.png)
- == $0
  - 當前選中的元素會被標記為 `== $0`
  - 此元素可在 Console 面板中通過變數 `$0` 直接存取，這樣可以在不使用 `document.querySelector()` 的情況下直接操作該元素
  - DevTools 會記住你最近選擇的多個元素，`$1` 代表倒數第二個選中的元素，`$2` 代表倒數第三個選中的元素，以此類推直到 `$4`（最多保留 5 個元素的歷史）
- Copy JS path
  - 選中元素，右鍵 → `Copy` → `Copy JS path`，在 Console 面板貼上
- 存成全域變數
  - 選中元素，右鍵 → `Store as global variable`

### 元素互動導航
![元素互動導航 (1)](https://hackmd.io/_uploads/rkEPUqnkgg.png)
- Scroll into view
  - 這個功能可以將畫面移動到被選取的元素位置
     - Elements 面板找到目標元素, 右鍵 → `Scroll to view`
- Open in Elements Panel
  - 這個功能可以將印出來的元素，切換到 Elements 面板，並且標記該元素在哪
    -  Console 面板找到選取印出來的元素, 右鍵 → `Open in Elements Panel`

### console.dir
![console.dir](https://hackmd.io/_uploads/Hksw4ihyxx.png)
- 印出元素的各個屬性

### 搜尋功能 Control + F (Command + F)
![搜尋功能](https://hackmd.io/_uploads/Byszaohyel.png)

- 字串搜尋
  - 直接輸入文字來搜尋 HTML 中包含該文字的元素
- CSS 選擇器搜尋
  - 輸入有效的 CSS 選擇器（如 `.classname` 或 `#id`）搜尋

### 編輯 DOM 結構
![編輯 DOM 結構](https://hackmd.io/_uploads/H1kTXn31gl.png)

#### 移動元素
- 拖曳元素
  - 在 Elements 面板中拖曳元素調整層級和順序
- Control + 上下鍵  (Command + 上下鍵)
#### 複製與貼上
- 使用 Control+C (Command+C) 複製選中的元素
- 使用 Control+V (Command+C) 將複製的元素貼上到目標位置

#### 復原操作
- 如果想還原操作，可以使用 Control+Z (Command+Z) 來復原上一步操作

### 不同屬性右鍵選單
![不同屬性右鍵選單](https://hackmd.io/_uploads/rJnpr2nygl.png)

在 Elements 面板中，右鍵選單的選項會根據您點擊的元素類型而有所不同

- 標準屬性 (Attribute)：在一般屬性上按右鍵會顯示編輯、添加、刪除屬性等選項
- URL 類型屬性：在包含 URL 的屬性上（如 `href`、`src`、`url()` 等）按右鍵時，選單中會提供額外選項：
  - `Open in new tab` - 直接在新分頁中打開該 URL
  - `Copy link address` - 複製 URL 地址
  - `Reveal in Sources pane` - 切換到 Sources 面板

### Hide element
![Hide element](https://hackmd.io/_uploads/H1oZh2hygx.png)

在開發過程中，如果想要找的元素被其他元素覆蓋，而且選不太到，可以用 `Hide element`
1. 先選取（Inspect）覆蓋在上層的元素
2. 使用以下任一方式隱藏該元素：
   - 在元素上按右鍵 → `Hide element`
   - 選中元素後直接按鍵盤的 `H` 鍵

###  Expand recursively
![Expand recursively](https://hackmd.io/_uploads/BJxjla2kgx.png)

如果 DOM 很多層很複雜的時候，要一層一層打開很麻煩，可以使用 `Expand recursively`
1. 先選取（Inspect）上層的元素
2. 使用以下任一方式展開：
   - 右鍵 → `Expand recursively`
   - 按住 `Alt` 鍵（`Option`鍵）的同時，點擊元素旁的箭頭符號
   - 按住 `Alt` 鍵（`Option`鍵）的同時，按左、右鍵