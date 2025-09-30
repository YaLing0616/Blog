# Apache 開放資料庫連線功能 (Apache 2.2寫法)
打開：C:\xampp\apache\conf\extra\httpd-xampp.conf

### 修改 phpMyAdmin 的 Directory、LocationMatch
以同事 IP 192.168.0.65、帳號 ryan、要開放的 DB 叫 wiretech 為例：

原始設定:
```
--1
Alias /phpmyadmin "C:/xampp/phpMyAdmin/"
<Directory "C:/xampp/phpMyAdmin">
    AllowOverride AuthConfig
</Directory>

--2
<LocationMatch "^/(?i:(?:xampp|security|licenses|phpmyadmin|webalizer|server-status|server-info))">
    Order deny,allow
    Deny from all
    Allow from 127.0.0.0/8 
    ErrorDocument 403 /error/HTTP_XAMPP_FORBIDDEN.html.var
</LocationMatch>
```
改為:
```
--1
Alias /phpmyadmin "C:/xampp/phpMyAdmin/"
<Directory "C:/xampp/phpMyAdmin">
    AllowOverride AuthConfig
    Order Deny,Allow
    Deny from all
    Allow from 127.0.0.1 192.168.0.65
    # 若要整個 192.168.*.* 都可用，改成：
    # Allow from 127.0.0.1 192.168.
</Directory>

--2
<LocationMatch "^/(?i:(?:xampp|security|licenses|phpmyadmin|webalizer|server-status|server-info))">
    Order Deny,Allow
    Deny from all
    Allow from 127.0.0.1 192.168.0.65
    # 或者要整個 192.168.*.*：
    # Allow from 127.0.0.1 192.168.
    ErrorDocument 403 /error/HTTP_XAMPP_FORBIDDEN.html.var
</LocationMatch>
```
儲存後，重新啟動 Apache 套用設定  
👉 接下來，直接打 http://<我的 XAMPP 機器 IP>/phpmyadmin 

![這是圖片](/assets/img/environment/phpMyAdmin_login.png)

若可成功看到登入頁面，代表成功開放連線  
若仍 403，請立刻打開 C:\xampp\apache\logs\error.log，看最後幾行會指到哪段規則擋到（通常就是 LocationMatch）

### 建立使用者以及設定資料庫讀取權限

依照下列指令操作
```
-- 1) 建立使用者（不給任何全域權限）  
CREATE USER 'ryan'@'192.168.0.65' IDENTIFIED BY 'g1234'; --程式用
CREATE USER 'ryan'@'127.0.0.1' IDENTIFIED BY 'g1234'; --開發用，如果使用者欲使用 phpMyAdmin 登入需要設定此帳號

-- 2) 設定授權資料庫（CRUD讀寫）  
GRANT SELECT, INSERT, UPDATE, DELETE ON `wiretech`.* TO 'ryan'@'192.168.0.65';
GRANT SELECT, INSERT, UPDATE, DELETE ON `wiretech`.* TO 'ryan'@'127.0.0.1';

-- 3) 驗證：目前擁有哪些權限
SHOW GRANTS FOR 'ryan'@'192.168.0.65';

-- 其他相關指令
-- 刪除使用者  
--DROP USER 'ryan'@'127.0.0.1';
-- 清掉 ryan 的權限  
-- REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'ryan'@'127.0.0.1'
```

---
### 🗒️ Issue
在第一階段設定完成後  
測試 http://<我的 XAMPP 機器 IP>/phpmyadmin 連線時發生  
同事在沒打帳號密碼的情況下會直接以 root 帳號登入，所以中途先來解決這個問題

這個錯誤是來自於 config 的設定問題  
> XAMPP 的 phpMyAdmin 很常預設 **auth_type = 'config'、root/空密碼**  
> `所以任何能開啟 phpMyAdmin 的人都等於 root`

💡由於 root 預設是空密碼，所以記得先設定 root 密碼，否則修改完 config 後會進不去唷！

現在要來設定 phpMyAdmin 不要自動用 root 來進行登入  
打開：C:\xampp\phpMyAdmin\config.inc.php

> **改為 cookie 登入**
> ```
> // $cfg['Servers'][$i]['auth_type'] = 'config';
> $cfg['Servers'][$i]['auth_type'] = 'cookie';  
> ```
> **當登入方式設定為 cookie 時，phpMyAdmin 會用這把金鑰來加密/簽名瀏覽器裡的登入 Cookie**
> ```
> // $cfg['blowfish_secret'] = 'xampp'; /* YOU SHOULD CHANGE THIS FOR A MORE SECURE COOKIE AUTH! */
> $cfg['blowfish_secret'] = 'asdjf9230uasd!@#9u23kasdf9823jlasdf'; // phpMyAdmin 的 Cookie 加密用金鑰
> ```
> **禁止空密碼**
> ```
> // $cfg['Servers'][$i]['user'] = 'root';
> // $cfg['Servers'][$i]['password'] = 'YOUR_PASSWORD';
> // $cfg['Servers'][$i]['AllowNoPassword'] = true;
> $cfg['Servers'][$i]['AllowNoPassword'] = false; 
> ```
再測試一次 http://<我的 XAMPP 機器 IP>/phpmyadmin 連線時，已順利跳出登入畫面
