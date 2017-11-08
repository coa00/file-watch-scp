require("dotenv").config();

var client = require("scp2");
var fs = require("fs");
var chokidar = require("chokidar");


// プライベートキー
var key = process.env.SCP_KEY;

// ホスト
var host = process.env.SCP_HOST;

// ソース
var source = process.env.SCP_SRC;

// アップロード先
var dist = process.env.SCP_DIST;

// ユーザ
var user = process.env.SCP_USER

var fileUpload = () => {
    client.scp(source, {
        host: host,
        username: user,
        privateKey: fs.readFileSync(key),
        path: dist
    }, (err) => {
        if (err) {
            console.error("アップロードに失敗しました。", err);
            return;
        }
        console.log("アップロード完了");
});
};

if (source && dist && key && host && user) {
    fileUpload();
}else {
    console.log(".env ファイルが存在しないか、設定項目が不足しています。");
}


var watcher = chokidar.watch(source, {
    ignored: /node_modules|\.git/,
    persistent: true
}).on("all", (event, path) => {
    console.log(event, path);
    fileUpload();
}).on("ready", () => {
    console.log("Ready");
});