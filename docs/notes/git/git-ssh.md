# 建立 SSH Key

###### tags: `Git`

## 什麼是 SSH Key
SSH Key 是一種用於遠端連線的安全認證機制，常用於 SSH（Secure Shell）協議中，幫助用戶安全地連接到伺服器或其他遠端系統。它是通過一對密鑰來實現的，這一對密鑰包含：

公鑰（Public Key）：可以公開分發的密鑰，用來加密訊息
私鑰（Private Key）：必須保密的密鑰，用來解密訊息或進行身份驗證

### 如何運行
- 使用 SSH Key 連接到伺服器時，需要使用私鑰來進行身份驗證，伺服器則會使用自己之前上傳的公鑰來驗證私鑰的合法性
- 公鑰儲存在伺服器上，而私鑰則保存在自己本地機器中。當進行 SSH 連接時，伺服器會發送一個挑戰訊息，然後用私鑰對該訊息進行加密，伺服器用相對應的公鑰進行解密來確保身份

### 優點
- 更安全：相比於密碼，SSH Key 是更安全的身份驗證方式，因為私鑰非常難以被破解，並且不會在網路上傳輸
- 無需每次輸入密碼：當你將公鑰部署到伺服器上時，你可以通過私鑰進行身份驗證，而無需每次手動輸入密碼
- 防止暴力破解攻擊：由於 SSH 密鑰是基於數學算法的，即使有攻擊者試圖進行暴力破解，破譯密鑰也需要極高的計算能力

## 檢查是否有 id_rsa.pub
```
$ cd ~/.ssh
$ ls
```

存在：
![image](https://hackmd.io/_uploads/HJ9CSfYSJl.png)


不存在：
![image](https://hackmd.io/_uploads/Sy73rGFByx.png)


## 建立 SSH KEY
1.  打開 Git Bash ( mac 打開終端機 )
2.  輸入以下命令檢查是否已有 SSH 金鑰 (同[檢查是否有-id_rsapub](#檢查是否有-id_rsapub) )
> 如果你已經有 SSH 金鑰，會看到 id_rsa.pub、id_ecdsa.pub 或 id_ed25519.pub 等文件，這些就是你的公開金鑰
```script=
ls -al ~/.ssh
```
3. 如果沒有金鑰，使用以下命令來生成一個新的金鑰
> 按照提示操作，按下 Enter 鍵接受預設的儲存路徑，並可以設定密碼保護金鑰（這步是選擇性的）

```script=
$ ssh-keygen -t rsa -C "yourEmail@example.com"
```
>– t 指定金鑰型別，預設是 rsa ，可以省略。
-C 設定註釋文字，如mail，這邊的mail需要是註冊Gitlab的那個mail。
-f 指定金鑰檔案儲存檔名。

![image](https://hackmd.io/_uploads/SJjNqGFS1l.png)


SSH key的儲存路徑 (可以不輸入)
![image](https://hackmd.io/_uploads/B17U9MYBkl.png)

4. 密碼
如果沒有要設定驗證密碼，直接按 Enter 就可以產生SSH-key。


5. 建立完成
如果有建立成功，會看到以下畫面
![image](https://hackmd.io/_uploads/r18BjzYrJe.png)

## 取得 SSH KEY
如果金鑰對已經生成，可以使用以下命令來顯示你的公開金鑰
```script=
cat ~/.ssh/id_rsa.pub
```

會顯示你的公開金鑰，會長得像：
```
ssh-rsa AAAAB3... your_email@example.com
```

![image](https://hackmd.io/_uploads/SJgajzYrJe.png)


## 如何在 Gitlab 上設定
右上角選 setting
選擇SSH key
![](https://i.imgur.com/uREgmNU.png)

把剛剛複製的那串SSH key貼上與填寫該SSH Key名稱即可