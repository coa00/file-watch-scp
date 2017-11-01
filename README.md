fileupload
===============

アップロード元とアップロード先を指定するとファイルをscpします。


動作例

```
node fileuplod.js -s dist -d /opt/viewer_celsys/htdocs/api/bsr4b/hybrid/webpacktest
```


chokidarと組み合わせるとファイル監視してアップロードできるようになります。

```
chokidar "dist/**" -c "node fileuplod.js -s dist -d /opt/viewer_celsys/htdocs/api/bsr4b/hybrid/webpacktest"

```


引数

```
-d アップロード元ファイルを指定
-s アップロード先のファイル指定
-h アップロードホスト
-key ssh のキー
```

WIP

ユーザ名の指定など。
