# git fixup、git rebase 使用場景

如果在 commit 後發現有遺漏的檔案  
我們希望將這個檔案修正合併到之前修改的 commit 地方  
可使用下面的指令來進行操作

#### 找出要修正的那個 commit
記下要修正的 ```<commit-hash>```（7 碼短雜湊即可）
```
git log --oneline
```
![fixup使用場景](/assets/img/problems/git-log.png)

### ```git fixup```
對之前寫錯的檔案內容進行修正
```
git commit --fixup "<commit-hash>"

git commit --fixup 71804bb 
```
![fixup使用場景](/assets/img/problems/fixup.png)

![fixup-git紀錄](/assets/img/problems/fixup-1.png)

fixup 會產生一顆訊息像 fixup! 原訊息... 的臨時 commit，再使用 rebase 將它併回原 commit 

### ```git rebase```

下圖以其中一個 commit-hash 之後的紀錄為例

``rebase 是需要選擇操作範圍的且無任何 unstage changes``  
在 rebase（尤其是 --continue 過程）時，Git 不允許工作樹或暫存區有未處理乾淨的變更

![rebase-error](/assets/img/problems/rebase-error.png)

<img src="/assets/img/problems/rebase-1.png" alt="" style="width: auto; height: 350px;" />

```
會自動把 fixup! / squash! commits 合併到對應的目標 commit
git rebase -i --autosquash <upstream>

git rebase -i 9b1022e8a44ff8ea2cfec01f9e1b411b643f3fe1^
```
輸入上述指令後，會開啟編輯工具，並且要等把視窗關掉後 Git 才會繼續執行

![rebase-GUI](/assets/img/problems/rebase-gui.png)

按下START REBASE 按鈕後，即可完成合併

### ```rebase 後的 push```
```
git push --force-with-lease
```
- --force：不管遠端現在有什麼內容，直接覆蓋  
可能把其他人剛剛推上去的新 commits 也「蓋掉」
- --force-with-lease：在覆蓋前先「檢查遠端 HEAD 狀態」  
如果遠端分支有了新的 commit（別人剛推上去），推送會失敗，提醒你先拉取處理  
只有當「遠端 HEAD 還是我最後看到的那顆 commit」時，才允許覆蓋

---
💡小工具：把 Git 的預設編輯器設成 VS Code，當使用 rebase 的時候，會自動開啟 GUI 工具
```
git config --global core.editor "code --wait"
```
core.editor：指定 Git 要用哪個編輯器來寫 commit message、rebase -i、merge message、tag 訊息