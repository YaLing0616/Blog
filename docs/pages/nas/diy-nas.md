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

## Unraid 開機碟選用 
Unraid 的設計原理跟一般作業系統不同，它不是安裝在 SSD 或 HDD 上，而是採用<mark>隨身碟</mark>開機

Unraid 對隨身碟的要求：
- 必須有唯一 GUID（硬體序號）
- 容量 4～32 GB 之間  
太小裝不下更新、太大（64GB 以上）有時候 BIOS 開機不穩
- 官方文件建議使用 USB 2.0 裝置 (但 2025 年市面上很難找到 USB 2.0)  
USB 3.0 隨身碟是向下相容的，如果真的找不到適合的隨身碟，也可以使用替代方案 ⭢ **將 3.0 隨身碟插到 2.0 接口上**

因為手邊剛好有個閒置隨身碟，所以來做個檢查確認是否適合作為 Unraid 開機碟

```bash
>powershell -Command "Get-CimInstance Win32_DiskDrive | Select-Object Index,Model,SerialNumber,InterfaceType"

Index Model                                SerialNumber               InterfaceType
----- -----                                ------------               -------------
    0 JetFlash Transcend 16GB USB Device   xxxxxxxxxx                 USB
```

檢查結果：  
✅ 有「唯一序號」(不是空白 / 不是全 0)  
✅ 容量 16GB  
✅ InterfaceType 正確認出為 USB 裝置

接下來，將隨身碟格式化為 FAT32 格式 (格式化設定如下)

![這是圖片](/assets/img/diy-nas/formatUSB.png)

## Unraid 安裝

https://ithelp.ithome.com.tw/m/articles/10263560

---
參考來源：

- 同事自組[規格](https://hackmd.io/@JunYou/B1AnRO53Jl)參考
- Slark-[一起玩 NAS!](https://wiki.slarker.me/)
- Noah's Blog-[架設自己的 NAS 伺服器，自組 TrueNAS Core 紀錄](https://noahchen.me/posts/diy-truenas-core/)
- [用自組 NAS 亂玩 unRaid 系列](https://ithelp.ithome.com.tw/m/articles/10260755)
- [用 UNRAID 打造 AIO 全生態](https://ithelp.ithome.com.tw/m/articles/10292137)




