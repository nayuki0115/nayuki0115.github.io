# Branch 命名規範

###### tabs: `Git` `規範`

## 命名規範
### 基本命名原則
* 使用小寫
* 使用連字符 `-` 分隔
* 簡潔描述分支目的
* 包含類型前綴

### 風格比較
#### 使用 /
```
<type>/xxxx-xxxx
```

#### 使用 -
```
<type>/xxxx-xxxx
```
#### 工具

支持 / 的工具：
- GitHub
- GitLab
- Bitbucket
- Azure DevOps

支持 - 的工具：
- Jira
- Gerrit
- 某些 CI 系統

### Branch 前綴類型
同 Commit Type

| Commit Type | 說明 | 
|:--------:| -------- |
| feat | 新增功能或需求異動 (feature)，例如實作一個新功能或因應需求變更的調整 |
| fix  | 修補 bug (bug fix)，修正程式中的錯誤或問題，使其正常運作  |
| style  | 格式調整 (style)，不影響程式運行的變更，如調整 CSS、空格或補上分號等排版工作 |
| refactor | 程式碼重構 (refactor)，改進現有程式碼結構，既非新增功能也非修補 bug，而是提升程式品質 |
| docs  | 文件更新 (documentation)，例如新增註解、編寫說明文件或更新 md 檔  |
| perf  | 效能改善 (performance)，優化程式碼以提升運行速度或效率 |
| chore  | 雜務調整 (chore)，例如更新套件版本、修改建構流程、調整 CICD 的 yml 檔或 Dockerfile，這類不直接影響系統的維護工作  |
| revert  | 撤銷回覆 (revert)，取消先前的 commit，例如「revert: feat(某功能):某某描述 (回覆版本：xxxx)」 |
| test  | 測試新增 (test)，例如補充單元測試或新增測試程式以驗證功能 |

## Example

### ❌ 不好的分支名稱
- 沒有前輟
```
my-fix
```

- 只用票號 
>沒辦法從分支名稱直接了解這個 feature 是做什麼用的，必須透過多一次的查找才能搞的清楚
```
feat/PROJ-123
feat/issue-3445
```

- 過於簡短
```
feat/login
```

- 不一致的命名 (假設已經確定是要feat，但用了別的名)
```
feature/login
```

### ✅ 好的分支名稱
- 特徵當分支名稱
```
feat/add-login-component
```

- 一致的命名方式
```
feat/login-feature
feat/payment-integration
bugfix/session-timeout
```

- 用票號
```
feat/PROJ-123-footer-links
```

怕 branch 名稱重複，可在後面加上日期
```
feat/add-login-component-20241128
```

## 資料參考
* [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
* [Atlassian Git 分支策略](https://www.atlassian.com/git/tutorials/comparing-workflows) 
* [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
* [Git Good：分支命名和 commit 訊息的最佳實踐](https://codelove.tw/@tony/post/ga9Epa)
* [Git branch 規範](https://medium.com/@gliyao/git-branch-%E8%A6%8F%E7%AF%84-a98630be3d3e)