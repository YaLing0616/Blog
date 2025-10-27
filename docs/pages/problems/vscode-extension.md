# 如何製作 Vscode Extensions
單純紀錄如何生成一個空的 extension 專案  
完整程式碼請看[這裡](https://github.com/YaLing0616/vscode_extension)

## 安裝製作工具
```
npm install -g yo generator-code
```

```
yo code
```
![這是圖片](/assets/img/problems/vscode-extension/yo_code.png)

#### 註冊 command
package.json  
![這是圖片](/assets/img/problems/vscode-extension/package.json.png)

extensin.js  
![這是圖片](/assets/img/problems/vscode-extension/extension.js.png)

#### 測試
1. 按 F5
2. 輸入剛剛註冊的 title 名稱 (Hello World)
![這是圖片](/assets/img/problems/vscode-extension/command.png)
3. 即可看到輸出結果
![這是圖片](/assets/img/problems/vscode-extension/result.png)

## 如何打包
#### 圖片打包方式
在 package.json 補上 repository (vsce 會自動推導圖片的絕對網址)
![這是圖片](/assets/img/problems/vscode-extension/repository.png)

#### 將套件打包成.vsix
安裝打包工具
```
npm install -g vsce
```
進行打包
```
vsce package
```
![這是圖片](/assets/img/problems/vscode-extension/test.vsix.png)

## 如何使用 .vsix 
<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd>
<br>
輸入 Extensions: Install from VSIX...  

---
參考來源：
[自己用的工具自己做! 30天玩轉VS Code Extension之旅](https://ithelp.ithome.com.tw/m/users/20108634/ironman/3815)