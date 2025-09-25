# git branch 取消遠端分支追蹤

原始git分支紀錄如下：

![這是圖片](/assets/img/github-problems/git-branch-error.png)

在此之前有個相同名稱的Project，但已更名為新的Project  
同事在未更新remote path的情況下，還是push到這個專案上  

在當前以及遠端都沒有feature/ryan的分支下，可以使用以下指令來取消追蹤
```
git fetch -p     # prune，把遠端已刪的分支追蹤清掉
```

更新後的git分支紀錄如下：

![這是圖片](/assets/img/github-problems/git-branch-error-1.png)