file-watch-scp
===============

アップロード元とアップロード先を指定するとアップロード元を監視して変更があるとアップロードします。

#### これのどこが便利

* ファイルを変更するたびにアップロードしてくれる
* 導入が簡単。node さえ入ってればOK（なはず）


## インストール方法

```
npm install file-watch-scp --save-dev  
```


## 実行方法

```
./node_modules/fileupload/bin/file-watch-scp.js
```

npm scriptに記載すると便利です。

```
  "scripts": {
    "dev-sync": "./node_modules/fileupload/bin/file-watch-scp.js",
  },

```

## 設定

.envを実行ディレクトリに作成します。


```ini
# src dir
SCP_SRC="dist"

# upload dir
SCP_DIST="/opt/viewer_celsys/htdocs/users/kaoki/hybrid/webpacktest/"

# upload host
SCP_HOST="bast.bs.hqdomain.celsys.co.jp"

# ssh user name
SCP_USER="develop"

# ssh private key
SCP_KEY="bsdev.ppk"
```

