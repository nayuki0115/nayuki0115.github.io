# ChatGPT 提示詞 (prompts)

###### tags: `AI`

## Prompt Packs 是什麼？
OpenAi 提供了免費的 [Prompt Packs](https://academy.openai.com/public/tags/prompt-packs-6849a0f98c613939acef841c)，它是官方整理、可直接拿來用的 ChatGPT 提示詞（prompts）範本，按用途和角色分類整理好，供大家使用

> Prompt Packs = 官方幫我寫好「怎麼問 AI」

## 目前的角色 / 分類
目前提供了14種角色 / 分類，
例如：
- ChatGPT for any role（任何角色）
- ChatGPT for sales （銷售）
- ChatGPT for product （產品）
- ChatGPT for engineers （工程師）
- ChatGPT for HR （人資）
- ChatGPT for IT 
- ChatGPT for Managers （經理人）
- ChatGPT for Executives （高階主管）

## Prompt Packs 的結構
- 我要做什麼事（write / draft / analyze / plan）
- 使用情境或對象
- 要包含哪些段落 / 面向
- 預期用途（self-service / internal / presentation）

## 怎麼使用 Prompt Packs？
### 範例情境
- 我的角色：**資深前端工程師**
- 情境：公司來了一名新人
- 需求：製作一份 **入職指南（onboarding guide）**

### 1. 選擇最接近的分類
找到 [ChatGPT for engineers](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/use-cases-engineers)，進到該頁面

### 2. 在分類中找對應情境
在分類頁面中，依照任務找 prompt，例如：
- Technical reviews & documentation
  - → Draft onboarding guide for new hires

![image](https://hackmd.io/_uploads/SJ-jDGbUZg.png)

### 3. 複製官方 Prompt 範本

```
I need to write an onboarding guide for new engineers joining [insert team]. 
Create a draft with sections for required tools, access setup, 
codebase overview, and first tasks. 
Make it suitable for self-service onboarding.
```

### 4. 依自己的情境修改 Prompt
```
I need to write an onboarding guide for new engineers joining the Frontend team.

Context:
- Team: Frontend
- Tech stack: React / Next.js
- New hire level: Junior–Mid
- Company type: Startup
- Output format: Markdown 

Create a draft with sections for:
- Required tools
- Access setup
- Codebase overview
- First tasks

Make it suitable for self-service onboarding.
```
再補的資訊：
- Team：Frontend
- Tech stack：React / Next.js
- New hire level：Junior–Mid
- Company type：Startup
- Output format：Markdown / Notion / HackMD
### 5. 貼到 ChatGPT 使用

### 當我覺得 prompt 不夠精準時？
請 AI 幫我優化 Prompt
```
Here is a prompt from OpenAI Prompt Packs.
Please rewrite it to better fit my situation.
```