# 為什麼 git push 至 GitHub 發生錯誤？

錯誤訊息如下：

![這是圖片](/assets/img/problems/git-push-error.png)

這個錯誤訊息表示你正在使用 HTTPS 方式連接 GitHub，  
但 GitHub 在 2021 年 8 月 13 日起 **不再支援使用帳號密碼進行認證**。

### 快速檢查目前遠端網址是 HTTPS 還是 SSH

```bash
git remote -v
```


## ✅ 解法一：使用 Personal Access Token (PAT)

#### 步驟一：產生 Token

前往 GitHub 的 [Token 產生頁面](https://github.com/settings/tokens)

- 選擇「Fine-grained tokens」或「Classic tokens」都可以（如果不知道差別，選 classic 最簡單）
- 給 token 命名，並勾選 repo 權限
- 點選「Generate token」
- 複製這個 token（只能看到一次）

<br>

#### 步驟二 : 更新 Git 認證

下次 git push 時，GitHub 會要求輸入帳號密碼

帳號： 輸入 GitHub 使用者名稱 <br>
密碼： 輸入剛剛產生的 Personal Access Token

## ✅ 解法二：改用 SSH 認證（更安全）<br>
(尚未使用過) 

#### 步驟一 : 產生 SSH 金鑰（如果你還沒有）
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
一直按 Enter，完成後會產生公私鑰。

#### 步驟二 : 加入 SSH Agent
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

#### 步驟三 : 將你的公鑰 (~/.ssh/id_ed25519.pub) 加到 GitHub
到 [GitHub SSH 設定頁](https://github.com/settings/keys)
新增一組 SSH Key，把公鑰貼上去

#### 步驟四 : 修改 Git 遠端網址為 SSH 版本
```
git remote set-url origin git@github.com:YaLing0616/Blog.git
```
可以正常 git push 囉!