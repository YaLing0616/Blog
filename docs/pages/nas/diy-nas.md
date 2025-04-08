# DIY 閒置電腦做 NAS

本來也想自組 NAS 來玩看看，剛好家裡有閒置電腦，所以大部分的規格都從家裡舊電腦原封不動沿用來做 NAS，只有額外添購硬碟<br>
其實 NAS 所需的硬體性能要求並不高，如果單純跑檔案管理，就算是十年前的硬體也足夠負荷<br>
雖說 NAS 老玩家都不推薦老舊主機做 NAS，因為舊主機板容易因為自身電壓不穩而造成其他元件損壞，而硬碟是最不能出事的，但基於新手練習**低成本**的考量下，還是先使用閒置電腦來試試看！

### 主要規格

> CPU : Intel i5-7400+主機板 <br>
> RAM : DDR4 8G <br>
> 電源供應器 : 500w 一般的 <br>
> 散熱器 : 一般的cpu散熱器+機箱風扇\*3 <br>
> 硬碟 : WD HC550 SATA 16T\*2 二手伺服器硬碟 <br>
> 機殼 : 一般桌上型電腦主機機殼 <br>

![這是圖片](/assets/img/diy-nas/HDD-1.png)

<!-- | ![這是圖片](/assets/img/diy-nas/HDD-1.png) | ![這是圖片](/assets/img/diy-nas/HDD-2.png) |
|:--:|:--:| -->

## NAS系統 - Unraid 

### Unraid 安裝


參考來源：

- 同事自組[規格](https://hackmd.io/@JunYou/B1AnRO53Jl)參考
- Slark-[一起玩 NAS!](https://wiki.slarker.me/)
- Noah's Blog-[架設自己的 NAS 伺服器，自組 TrueNAS Core 紀錄](https://noahchen.me/posts/diy-truenas-core/)

