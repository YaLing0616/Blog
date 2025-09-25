# 什麼是API?

API 全名為 Application Programing Interface（應用程式介面）  
它不是「一個程式」，而是一套 <mark><u>規則、協定與工具</u></mark>  
作為應用程式與應用程式之間溝通的橋樑，目的就是為了 「**簡化工程師之間的溝通成本**」

![這是圖片](/assets/img/api/api-1.png)

- **像餐廳的菜單**  
菜單列出「能點什麼」與「怎麼點」，但我們不需要知道廚房怎麼煮  
API 告訴我們「可以呼叫哪些功能、需要什麼參數、會回傳什麼」，不用去管背後的程式細節

## 認識 Web API 與 HTTP

在 Web Application 的開發情境下的 API 被稱為 Web API  
要如何將資料進行傳遞就需要透過 HTTP 通訊協定來進行請求與回應，基本上透過「網路」交換資訊，皆為 Web API 的範疇  

白話文說明
> **把 HTTP 想成「馬路」**  
> HTTP/HTTPS：就像一條「運輸的馬路」  
> 規定了車子要怎麼走、紅綠燈怎麼用，所有的資料（文字、圖片、影片…）要在網路上跑，幾乎都走這條馬路  
> **把 Web API 想成「服務櫃台」**  
> Web API：是「建在 HTTP 馬路旁的服務櫃台」  
> 你走到某個地址（URL），跟櫃台說：「我要查台北天氣！」`（HTTP 請求）`，櫃台就會回給你一份 JSON 表單，寫著：「台北 29°C，多雲」`（HTTP 回應）`  

### HTTP Method
客戶端和伺服器端進行請求與回應時，會使用定義明確的請求格式和回應格式

**HTTP Request Method**
- GET：向指定的資源要求取得資料
- HEAD：跟 GET 方法類似只差別在它並不會回傳你所請求的資源在 body 上，只回傳 HTTP header
- POST：向指定的資源提交資料
- PUT：向指定資源位置提交更新內容
- PATCH：跟 PUT 很像，但 只更新部分欄位
- DELETE：向指定資源位置請求刪除內容
- OPTIONS：會回傳伺服器支援哪些方法
- TRACE：回傳收到的請求內容，主要用於測試或診斷
- CONNECT：通常用在Proxy

**HTTP Response Method** 

Response format 是指伺服器端回應時採用的資料格式，可能會是：XML、JSON、Protocol Buffers、Thrift、YAML 等等  
JSON 是最常用的回應格式之一，各種程式語言都可以產生或解析 JSON 字串

## 什麼是 REST/RESTful API ?
RESTful API 是一種 Web API 的開發風格，透過 REST 風格的引進，可以生產並且持續規劃健壯的API

## 好用的 API 工具

當寫完一支API，我們要如何測試它?

#### REST API 測試工具 [Postman](https://www.postman.com/) 
> Postman 是專為開發者設計的一款 API 測試工具  
> 支援：
>
> - 發送 HTTP/HTTPS 請求（GET、POST、PUT、DELETE 等）
> - 設定 Headers、Body、Params、Auth 等細節
> - 儲存與管理測試組合
> - 支援環境變數、測試腳本、自動化流程

![這是圖片](/assets/img/api/postman-1.png)
![這是圖片](/assets/img/api/postman-2.svg)

####  API 設計工具 [Swagger](https://swagger.io/)  
> Swagger 是一套 API 開發工具與規範，主要用來設計、建構、記錄和測試 RESTful API，讓後端工程師、前端工程師、QA 測試人員、甚至產品經理都能更直觀地了解 API 的功能與用法

![alt text](/assets/img/api/swagger.png)  

#### API測試自動化工具 [Katalon](https://katalon.com/)  
> Katalon 是一個自動化測試工具，主要用來測試 Web 應用、行動應用 (Android/iOS)、API 與桌面應用程式，與 GUI 測試不同  
> 支持所有類型的 REST、SOAP/1.1 和 SOAP/1.2 請求  
> 測試也可以從 Swagger、Postman 和 WSDL 導入  
> 除了測 API 正確性，也能做端對端 (End-to-End) 測試，例如:「登入網站 → 新增商品 → 呼叫 API → 驗證資料庫更新」

#### SOAP 和 REST API 測試工具 [Soapui](https://www.soapui.org/)  
(未來需要使用再了解)

---
參考來源：

- [從無到有，打造一個漂亮乾淨俐落的 RESTful API](https://ithelp.ithome.com.tw/users/20107247/ironman/1312)

- [認識 API 與 Web API ，實用的 API 工具](https://tw.alphacamp.co/blog/api-introduction-understand-web-api-http-json)
