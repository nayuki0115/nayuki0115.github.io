# Git Commit 規範 
###### tags: `Git` `規範`

## 約定式提交(Conventional Commits)
用於 Git 提交訊息的規範和最佳實踐, 由 [AngularJS的Contributor Guide](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format) 演變而來

### 目的
* 提供更清晰的提交歷史
* 自動化版本管理
* 改善專案協作
* 更容易理解代碼變更


## Commit Message 規範組成
```
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```
```
<type>([optional scope]): <description> [optional body] [optional footer(s)]
```

| Commit 規範組成 | 說明 | required |
|:--------:| -------- |:--------:|
| type | commit 類別 |    ✅    |
| scope | commit 提交的範圍 |       |
| description | commit 簡短描述 |    ✅    |
| body | 若有需要時從第2行開始寫，針對此次commit內容的詳細說明 |          |
| footer | 若為**fix**類別，**建議**要加上issue編號，在 [Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github?view=azure-devops) 上可自動追蹤, 例： #123 |          |

### Commit Type

| Commit Type | 說明 | 範例 | 
|:--------:| -------- |-------- |
| feat | 新增功能或需求異動 (feature)，例如實作一個新功能或因應需求變更的調整 | `feat: 新增使用者登入功能` 或 `feat: 調整首頁按鈕符合新需求` |
| fix  | 修補 bug (bug fix)，修正程式中的錯誤或問題，使其正常運作  | `fix: 修復結帳頁面金額計算錯誤` |
| style  | 格式調整 (style)，不影響程式運行的變更，如調整 CSS、空格或補上分號等排版工作 | `style: 修正 CSS 縮排格式` 或 `style: 補上遺漏的分號` | 
| refactor | 程式碼重構 (refactor)，改進現有程式碼結構，既非新增功能也非修補 bug，而是提升程式品質 | `refactor: 重構資料庫查詢邏輯以提升可讀性` |
| docs  | 文件更新 (documentation)，例如新增註解、編寫說明文件或更新 md 檔  | `docs: 更新 API 使用說明文件` 或 `docs: 在程式碼中補充註解` | 
| perf  | 效能改善 (performance)，優化程式碼以提升運行速度或效率 | `perf: 優化圖片載入速度` |
| chore  | 雜務調整 (chore)，例如更新套件版本、修改建構流程、調整 CICD 的 yml 檔或 Dockerfile，這類不直接影響系統的維護工作  | `chore: 更新 npm 套件版本到最新` 或 `chore: 修改 Dockerfile 設定 `| 
| revert  | 撤銷回覆 (revert)，取消先前的 commit，例如「revert: feat(某功能):某某描述 (回覆版本：xxxx)」 | `revert: feat(login): 新增登入功能 (回覆版本：abc123)` | 
| test  | 測試新增 (test)，例如補充單元測試或新增測試程式以驗證功能 | `test: 新增結帳功能的單元測試` |

  
#### 重大變更
基於 `<type>[optional scope]` 後加 ! 或是於 `[optional body] `填寫  BREAKING CHANGE (要全大寫)


### Example
基本用法
```
feat:  add user authentication
```
  
帶 scope 的用法
```
feat(login): implement two-factor authentication
```
  
詳細描述的用法
```
fix: correct minor typos in code

more precise changes that were missed in the previous commit.

Refs #133
```

包含 breaking change 的用法
```
feat(api)!: migrate to new authentication system
```

```
feat(api)!: migrate to new authentication system

BREAKING CHANGE: The previous authentication method 
is no longer supported. Users must update their 
integration to use the new JWT-based approach.
```

### 工具
* [commitlint](https://commitlint.js.org/)
* [standard-version](https://github.com/conventional-changelog/standard-version)
* [semantic-release](https://github.com/semantic-release/semantic-release)

  
### 參考資料
* https://www.conventionalcommits.org/zh-hant/v1.0.0/
* https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html
* https://www.cythilya.tw/2021/03/16/conventional-commits/
* https://medium.com/@peteeelol/2021%E4%BD%BF%E7%94%A8%E7%B4%84%E5%AE%9A%E5%BC%8F%E6%8F%90%E4%BA%A4%E7%9A%84%E4%B8%80%E5%80%8B%E7%90%86%E7%94%B1-a433464c3dd7
* https://hackmd.io/@ohQEG7SsQoeXVwVP2-v06A/rkhtpmyXa
  

