# Gandi 網域申請與委託 Cloudflare 管理 

申請網域前先來了解一下網址的組成方式

![這是圖片](/assets/img/dns-cloudflare-apply/url-description.png)

## Gandi 介紹

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-net1.png)

[Gandi.net](https://www.gandi.net/zh-Hant) 是一家設立於法國的域名註冊公司，成立於 1999 年，是知名的網域商，提供多項服務像是：網域註冊、 網頁代管、 電子郵件和 SSL 憑證等...。 

目前 Gandi 在巴黎、盧森堡、臺北、三藩市皆設有辦事處，因此可使用中文介面，可說是相當方便。

接下來就正式進入到 Gandi 網域申請的流程！

## 註冊 Gandi

先到 Gandi 官網上註冊一個帳號（依序填寫即可）

<img src="/assets/img/dns-cloudflare-apply/gandi-register.png" alt="" style="width: 60%; height: auto;" />
<!-- ![這是圖片](/assets/img/dns-cloudflare-apply/gandi-register.png) -->

註冊完後，記得要到 Email 完成驗證，不然一天後帳號將被停用！

<img src="/assets/img/dns-cloudflare-apply/gandi-email-validate.png" alt="" style="width: 80%; height: auto;" />
<!-- ![這是圖片](/assets/img/dns-cloudflare-apply/gandi-email-validate.png) -->

註冊完後即可登入購買網域。

## 正式購買網域

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-dns-search.png)

正式購買網域之前，我們先到網站上查詢欲申請的域名是否已存在以及價格

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-search-domain-exist.png)

搜尋結果中，Gandi 會列出可以租用的網域名稱 <br> 從其中挑選一個自己喜歡的，點擊圖示加入購物車

<!-- ![這是圖片](/assets/img/dns-cloudflare-apply/gandi-search-domain-prices.png) -->

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-domain-purchase-step1.png)

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-domain-purchase-step2.png)

![這是圖片](/assets/img/dns-cloudflare-apply/gandi-domain-purchase-step3.png)

付款完成後，即購買成功！  
好感動😭😭，我終於也有自己的網域了 

## Cloudflare 服務

為什麼要將網域託管到 Cloudflare ?  
他提供了哪些服務：

-  **提供 DNS 解析服務**  
Cloudflare 的 DNS 非常快，常年排名全球前幾名（甚至比 Google DNS 快），且免費就能享受 Anycast 全球節點，讓訪客自動連線到最近的節點進行解析
-  **提供 CDN 服務**  
Cloudflare 會幫我們快取靜態資源（圖片、CSS、JS），使用者就近從 Cloudflare 的節點讀取，不用每次都回到我們的主機，不但可以減少伺服器的負擔，也讓國外或遠距離的訪客加快存取速度
-  **安全保護**  
Cloudflare 有自家的 DDoS 保護系統，在流量還沒進到我們的伺服器前，就幫我們擋掉惡意攻擊
-  **免費的 SSL/TLS**  
Cloudflare 提供自動簽發與續期的免費憑證，讓我們的網站輕鬆啟用 HTTPS，提升網站安全性與使用者信任度
-  **圖片與資源優化**  
Cloudflare 能自動將圖片轉換成 WebP 或 AVIF 等更高效的格式，並能根據不同裝置大小自動調整圖片尺寸，讓網站的載入更快速
-  **即時流量與安全分析**   
Cloudflare 提供詳細的分析工具，可以看到訪客來源、流量趨勢，以及有哪些攻擊或惡意請求被阻擋

在了解 Cloudflare 的各項優點後，就可以開始將網域託管給 Cloudflare 了!!

::: info 為什麼不用 Gandi 託管？
或許你會想：「既然網域已經在 Gandi 註冊，為什麼不乾脆也讓它託管就好？」  
其實理由很簡單——Gandi 的託管是要付費的  
對於非商業用途或只是想自己玩玩架站的開發者來說  
Cloudflare 免費又穩定，功能也相當完整，自然成為更划算的選擇  

簡單來說，能省則省，但效果一樣好 😎
:::

## Cloudflare 託管步驟

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-1.png)

註冊完後，Cloudflare 預設會進到帳戶首頁  
➞ 輸入現有網域 (輸入要連結到 Cloudflare 的網站網址)  
Cloudflare 會自動抓取網站的 DNS 記錄

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-2.png)

➞ 選擇方案  
免費套餐就足夠我們使用了

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-3.png)

這裡可以看到剛剛 Cloudflare 自動幫我們抓取的 DNS 紀錄  
如果有任何遺失的記錄，就需要自行手動加入

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-4.png)

➞ 更新名稱伺服器  
Cloudflare 會提供兩個新的名稱伺服器（Nameservers）

<!-- ![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-5.png) -->

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-6.png)

登入原域名註冊商 (Gandi)  
➞ 將域名的 Nameserver 更新為 Cloudflare 提供的這兩個新的名稱伺服器

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-7.png)

完成以上步驟後，就成功將網站轉移到 Cloudflare 了！

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-8.png)

名稱伺服器的變更可能需要一些時間才會生效，Cloudflare 也提醒可能會需要等待最多 24 小時  
但這次的託管幾乎是立即生效！

---
### Proxy 是什麼?

(待補充)

![這是圖片](/assets/img/dns-cloudflare-apply/cloudflare-dns-list.png)

當你在 Cloudflare 的 DNS 設定中看到 **橙色雲朵** (Proxied) 時，實際上域名流量會經過 Cloudflare，而不是直接指向我們的主機伺服器  
如果 DNS 記錄設定為 **灰色雲朵** (DNS Only)，那麼 Cloudflare 只負責將域名指向你的主機 IP

---
參考來源：

- 網站帶路姬-[網域購買指南：網域和網址完整差異比較](https://wpointer.com/wordpress-tutorials/what-is-domain/)
- 犬哥網站-[Gandi 網域教學：如何申請註冊＋網址購買流程](https://frankknow.com/gandi-tutorial/)
- [工程師都該懂的程式通識 - PROXY](https://5xcampus.com/posts/proxy.html?srsltid=AfmBOoqLMcJ21OER30qNnlpioVol9ejo5kx4WV7BC1OolKO3b3SP0z2R)
