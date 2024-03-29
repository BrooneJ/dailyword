# Dailyword v1.0


## 🌟 サービス紹介
---

<p align='center'>
    <img src="https://hyungwonjin.github.io/portfolio/img/home.png" width="200"/>
</p>

📝 日本語を勉強する時、学んだ単語や例文を記録するWeb Applicationです。

deployments: <a href="https://dailywords-hw.herokuapp.com/">https://dailywords-hw.herokuapp.com/</a>

<a href="https://github.com/HyungwonJin/dailyword/wiki/%E9%96%8B%E7%99%BA%E8%83%8C%E6%99%AF">開発背景</a>

## 🌟 使用した技術
---

<div>
    <img src="https://img.shields.io/badge/PUG-A86454?style=flat-square&logo=PUG&logoColor=white" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" />
    <img
        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white" />
    <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" />
    <img
        src="https://img.shields.io/badge/Amazon S3-232F3E?style=flat-square&logo=Amazon%20S3&logoColor=white" />
    <img src="https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" />
</div>

## 🌟 全体像
---    
<a href="https://www.figma.com/file/DM8r8JEVsBihBVn08bjLrv/Design?node-id=102%3A4">https://www.figma.com/file/DM8r8JEVsBihBVn08bjLrv/Design?node-id=102%3A4</a>
<p align='center'>
    <img src="https://i.imgur.com/7B7BiQo.png" width="400"/>
</p>

## 🌟 各ページ   
---
### ✅ Home            
---
Homeでは全てのユーザーが登録した単語や例文を見ることができます。        
ユーザーが使いやすいように「無限スクロール」を導入しました。        
<p align='center'>
    <img src="https://i.imgur.com/SRTkZpi.gif" width="400"/>
</p>     
単語や詳しく見る(자세히보기→)をクリックするとクリックした単語の詳細を見ることができます。

わかりやすく単語を例文に赤字で示しました。      
下の方の「修正する」と「削除する」ボタンをクリックし、修正や削除ができます。        
<p align='center'>
    <img src="https://i.imgur.com/bhFGELO.gif" width="400"/>
</p>     


### ✅ Search    
---  
検索するとデータベースから単語を探します。
<p align='center'>
    <img src="https://i.imgur.com/7QSvcQD.png" width="400"/>
</p>     

### ✅ Upload
---
<p align='center'>
    <img src="https://i.imgur.com/LLWK1aZ.png" width="400"/>
</p>     
上から  

ーーーーーーーーーー        
外国語　→　母国語       
ーーーーーーーーーー        
単語を入力してください。            
ーーーーーーーーーー        
発音を入力してください。（選択）             
ーーーーーーーーーー       
意味を入力してください。             
ーーーーーーーーーー       
例文を入力してください。             
ーーーーーーーーーー       
出典を入力してください。（選択）             
ーーーーーーーーーー       
登録        

になります。        

### ✅ ユーザーページ
---
<p align='center'>
    <img src="https://i.imgur.com/eAzhSYd.gif" width="400"/>
</p>     
My wordでは自分が登録した全ての単語が見れます。     
<br/>       
<br/>       
Edit Profileでは自分のユーザーネームやEメールやパスワード、アイコンを変更することができます。
<p align='center'>
    <img src="https://i.imgur.com/xLe6Juv.png" width="400"/>
</p>
アイコンはAWS S3に保存されます。
<p align='center'>
    <img src="https://i.imgur.com/EbnqWOL.png" width="800"/>
</p>
<br/>
<br/>
Logoutをクリックするとlogoutすることができます。
<p align='center'>
    <img src="https://i.imgur.com/XJ3q83T.gif" width="400"/>
</p>     
