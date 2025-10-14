# 什麼是 API?

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
> <u>**把 TCP/IP 想成「道路系統」**</u>  
> TCP/IP：就像是「高速公路系統」  
> 規定了資料在電腦之間 怎麼傳送，確保資料能完整送到  
> <u>**把 HTTP 想成「運送規則」**</u>   
> HTTP/HTTPS：就像是「在馬路上跑的物流公司規則」  
> 規定了寄件人（Client，像瀏覽器）和收件人（Server，網站）要怎麼 問問題、給回覆，所有的資料（文字、圖片、影片…）要在網路上跑，都需要依照這個規則   
> <u>**把 Web API 想成「服務櫃台」**</u>   
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

## REST/RESTful API
<mark>**RESTful API 是一種 Web API 的開發風格，不是強制性的規定**</mark>  
為了簡化工程師之間的溝通成本，引用 REST 的設計，統一不同工程師所設計出來 API 的風格

### ```成為 RESTful API 的條件一：使用 Http method，表示要執行的資料庫操作```

![這是圖片](/assets/img/api/postman-http-method.png)

HTTP 方法與 CRUD 操作的對應關係
| CRUD 操作    |HTTP 方法 | 說明 | 範例 |
| ----------- | ----------- | ----------- |----------- |
| Create  | POST      | 將資料提交到伺服器 | 新增商品 <br> ```POST /products```|
| Read    | GET       | 取得資料 <br> (不對資料進行更改) | 取得商品列表或單一商品的詳細資料 <br> ```GET /products``` <br> ```GET /products/:id ``` |
| Update  | PUT/PATCH | 更新資料 <br> PUT 是完全更新 <br> PATCH 是部分更新 | 修改商品 <br> ```PUT /products/:id``` <br> ```PATCH /products/:id```|
| Delete  | DELETE    | 刪除資料 | 刪除商品 <br> ```DELETE /products/:id``` |

### ```成為 RESTful API 的條件二：使用 url 路徑，描述資源之間的階層關係```

> 在 RESTful API 中**資源（Resource）是核心，URL 應該表達「Resource」之間的關係，而不是動作**  
> 例如：使用者 (users)、文章 (posts)、影片 (videos)等   

👉 URL 用 斜線 / 來表達層級，就像「某某的某某」

在以往設計 API 時，每進行一項資料的操作時都要設計一個 URL 網址  
依照了 REST 風格設計的 API 則只需要對應的 HTTP Method 和一個 URL 網址即可滿足所有資料的操作

|     | 傳統 API | RESTful API | 
| ----------- | ----------- | ----------- |
| 新增使用者    | /createUser | POST /users |
| 查詢 ID=123 的使用者    | /getUser?id=123 | GET /users/123 |
| 查詢 ID=123 的使用者底下的所有訂單    | /getUserOrders?userId=123 | GET /users/123/orders |

### ```成為 RESTful API 的條件三：Response body 返回 JSON 或是 XML 格式```
為了跨平台、跨語言的易用性，RESTful API 的回應數據應該是機器可讀的格式

- JSON（最常見，輕量、好解析）
- XML（早期常用，現在較少，但仍有支援）

```json
{
  "id": 123,
  "name": "Becky",
  "email": "becky@example.com"
}
```
只要同時滿足上面這三個條件，那這個 API，他就是一個符合 REST 設計風格的 API，所以也可以稱他為 RESTful API 了！

## HTTP 狀態碼
當你的瀏覽器（client）發送請求到伺服器（server）時，伺服器會回覆一個「狀態碼」，告訴你這次請求的結果是成功還是失敗

狀態碼是 3 位數字，分為 5 大類：
- 1xx：資訊（Informational）
- 2xx：成功（Success）
- 3xx：重新導向（Redirection）
- 4xx：客戶端錯誤（Client Error）
- 5xx：伺服器錯誤（Server Error）

### 常見的狀態碼

- 成功（2xx）

200 OK：請求成功，這就是你要的資料  
201 Created：新資源建立成功  
204 No Content：請求成功，但沒有資料返回  

- 客戶端錯誤（4xx）

400 Bad Request：請求格式有問題  
401 Unauthorized：需要先登入認證  
403 Forbidden：已登入但沒有權限  
404 Not Found：找不到資源  
409 Conflict：資源衝突或已存在  

- 伺服器錯誤（5xx）

500 Internal Server Error：伺服器內部出錯  
503 Service Unavailable：服務器暫時無法使用

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
- [HTTPS傳輸格式](https://ithelp.ithome.com.tw/articles/10352207)
- [HTTPS 是什麼？一文搞懂和 HTTP 有什麼差別](https://tw.alphacamp.co/blog/http-https-difference)
- [作為前端的你了解多少TCP的內容](https://juejin.cn/post/6844903731704791054)
- [RESTful API 設計指南，3 個必備條件缺一不可！](https://kucw.io/blog/restful-api/#%E4%BB%80%E9%BA%BC%E6%98%AF-restful-api)