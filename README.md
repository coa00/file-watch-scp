DevSync
===============

アップロード元とアップロード先を指定するとアップロード元を監視して変更があるとアップロードします。

#### これのどこが便利

* ファイルを変更するたびにアップロードしてくれる
* 導入が簡単。node さえ入ってればOK（なはず）


## インストール方法

```
npm install http://devxserve/gitbucket/git/aoki.kohei/fileupload.git
```

or

```
yarn add -D http://devxserve/gitbucket/git/aoki.kohei/fileupload.git
```



## 実行方法

```
node file-sync.js
```


## 設定

.envを実行ディレクトリに作成します。


```ini
# ソース元
SCP_SRC="dist"

# アップロード先
SCP_DIST="/opt/viewer_celsys/htdocs/users/kaoki/hybrid/webpacktest/"

# アップロードするホスト
SCP_HOST="bast.bs.hqdomain.celsys.co.jp"

# サーバユーザ名
SCP_USER="develop"

# sshのキー
SCP_KEY="bsdev.ppk"
```

## WIP

* 特になし

