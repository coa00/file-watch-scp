DevSync
===============

アップロード元とアップロード先を指定するとアップロード元を監視して変更があるとアップロードします。

#### これどこか便利

* ファイルを変更するたびにアップロードしてくれる
* 導入が簡単。node さえ入ってればOK（なはず）


## インストール方法

```
npm install 
```

or

```
yarn install 
```



## 実行方法

```
node file-sync.js
```


## 設定

.envを実行ディレクトリに作成します。


```
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

