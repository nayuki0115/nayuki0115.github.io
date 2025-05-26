# 來一場兼顧程式碼品質以及開發效率的 Code Review - Fin

###### tags: `WebConf2024`

## 簡報
https://slides.com/finchen/code

https://www.thingsaboutweb.dev/zh-TW/posts/code-review

## 共筆
https://hackmd.io/@webconf/BJ2N6ksMke/%2FTz9q-XSwQK-9SvmycxtXPA

## 本質
透過知識與視角的交流，提升產出品質與團隊技術水準

## 現狀與挑戰
- 非常耗時，平均6hr/wk
- 平均耗時數日，大範圍變更需要更久
- 找出問題只有14%

code review 很好但很耗費時間和精力

## 兼顧程式碼品質以及開發效率的 code review 要怎麼做？
1. 技術執行面
code review 本身的進行
code review 的形式
2. 知識交流面 (Reviewer 跟開發者交流、相關知識的傳遞)
3. 整體開發面
從整體開發流程的其他地方來幫助

## Code Review 的形式
- 同步
  - pair programming
    - 有經驗帶沒有經驗
    - 兩個同經驗的
  - live review
    - 找人過來一起看
  - code review meeting
    - 開會議一起看
    - ~~公開處刑~~ 公審
  - code walkthrough
    - 找熟悉的人一步一步手把手看，比較快的進入狀況
- 非同步
  - PR Review

### 各種code review 優劣比較
![image](https://hackmd.io/_uploads/SJezp2m8yl.png)

![image](https://hackmd.io/_uploads/BJIf6278yg.png)

![image](https://hackmd.io/_uploads/HyhMahQIkl.png)

Principle of least astonishment-最小驚訝原則
> 降低使用者的學習成本。當你看到某些功能和設計時，不會感到驚訝，因為你已經熟悉它們的使用方式。寫程式也是同樣的道理，目的是實現功能、解決問題，而不是為了炫技。如果可以用簡單的方法達成，就不要把事情弄得複雜，以免適得其反

### 提升執行面效率
- 選擇正確的 Code Review 形式
- 自動化：靜態程式碼分析 + 測試 + CI 確保程式碼基本品質
- AI 化：幫助找出一些基本錯誤
- 主要精力放在實作跟邊界的審查

coderabbitai 開源的免費code review
> https://www.coderabbit.ai
填寫表單有 3 個月免費
https://www.coderabbit.ai/startup-program

#### AI Code Review
- 定義清楚的規格書對於 AI 產出的品質有正面的影響
- 合理變更範圍內，對 coding style, api 參數、錯誤處理方式等的建議都很實用
- 不要期望 AI 可以有架構性的建議
- 檔案數量太多 AI 一樣可能會有品質下降的問題

## 知識交流面
正確的理解後才能正確的給予回饋
- 先閱讀 PR 的描述和提交記錄，確認自己是否理解這次變更的目標
- 參考相關測試與文件、規格說明
- 若有疑問，主動提問，要求補充背景資訊
- 用最有效率的方式來獲取資訊
- 討論過程中的重要資訊記得整理與記錄

### 交流要點1：更有效率的理解
- 同步 > 非同步
- 面對面> 線上
- 正面語氣 >負面
- 在 code 上可以連結到文件資料

### 交流要點2: API 原則
Assume Positive Intent  預設大家都想把事情做好

負面語氣的審查：57% 被認為有效
正面或中立語氣：80% 被認為有效

### 交流要點3: 明確、可行動的
![image](https://hackmd.io/_uploads/Byl8pnmI1g.png)


針對不同的能力背景，給予詳細或簡潔的回覆

## 開發流程面
在功能規劃階段，把規格定義好並記錄清楚
（組員同步規格，減少溝通時間）
![image](https://hackmd.io/_uploads/SJ1DpnXL1g.png)


PR 大小 vs 審查效用
（PR越大 code review效益越低）
![image](https://hackmd.io/_uploads/S1uD62mI1l.png)


PR 超過五百行的時候，審查時間就降低了（太長了）

### PR 減肥
1. 功能規劃階段把規格、相關文件理清
2. 把需求拆成 半天 可以完成的小任務
3. 任務相關性拉出來
4. 依據相關性實作，一個任務一個 PR
5. 關鍵字： Stacked PR (每個 PR 都基於前一個 PR 的程式碼碼基礎進行構建，形成一個「堆疊」結構。這種方法可以讓代碼審核變得更清晰，並將大型變更分解為更小的、易於管理的部分)
6. 目標： LOC < 500

> LOC : Lines of Code的縮寫

> Stacked PR:（疊加的 Pull Requests）是一種將程式碼變更分成多個有條理、循序漸進的 PR（Pull Request）的方式，這些 PR 是相互依賴的，組成一個「堆疊」結構。

### Self Review
- 交付 Code Review 之前
  先自行 Review 一次
- 可以透過 AI Coding Tool 幫忙 Review

### AI Code Review
* 定義清楚的規格書對於 AI 產出的品質有正面的影響
* 合理變更範圍內，對 coding style,
  api 參數、錯誤處理方式等的建議都很實用
* 不要期望 AI 可以有架構性的建議
* 檔案數量太多 AI 一樣可能會有品質下降的問題

GenAI 可以幫忙的
- 產規格文件
- 產 PR Description

## 你不一定需要 Code Review
* 對改動的信心足夠
* 測試足夠 或 QA 足夠
* 實驗性質的內容

## 挑戰的處理
* 使用合適的形式
* 針對容易 Review 的引入自動化工具
* 把心力放在需要 Review 的複雜內容上
* 規格明確，bug 自然會比較容易處理
* 縮減任務範圍 / PR 大小，縮減 Review 所需耗費的心力與時程
* 先 Self Review，自己能接受的品質才送出