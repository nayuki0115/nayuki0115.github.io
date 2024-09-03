# Gitlab SSH

###### tags: `Git`

https://sinyilin.github.io/git/20191024/1014042378/

## 檢查是否有 id_rsa.pub
```
$ cd ~/.ssh
$ ls
```

存在：
![](https://i.imgur.com/0x9d0Uj.png)

不存在：
![](https://i.imgur.com/1AIOzJV.png)

## 建立 SSH KEY
```
$ ssh-keygen -t rsa -C "yourEmail@example.com"
```
>– t 指定金鑰型別，預設是 rsa ，可以省略。
-C 設定註釋文字，如mail，這邊的mail需要是註冊Gitlab的那個mail。
-f 指定金鑰檔案儲存檔名。

SSH key的儲存路徑
![](https://i.imgur.com/5x65zok.png)
可以不輸入

## 密碼
如果沒有要設定驗證密碼，直接按 Enter 就可以產生SSH-key。


## 建立完成
如果有建立成功，會看到以下畫面
```
Your identification has been saved in /Users/dbit/.ssh/id_rsa.
Your public key has been saved in /Users/dbit/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256: ----
The key's randomart image is:-----
```

## 如何在 Gitlab 上設定
右上角選 setting
選擇SSH key
![](https://i.imgur.com/uREgmNU.png)

把剛剛複製的那串SSH key貼上與填寫該SSH Key名稱即可



