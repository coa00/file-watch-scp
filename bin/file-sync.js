require("dotenv").config();

const client = require("scp2");
const fs = require("fs");
const chokidar = require("chokidar");


// プライベートキー
const key = process.env.SCP_KEY;

// ホスト
const host = process.env.SCP_HOST;

// ソース
const source = process.env.SCP_SRC;

// アップロード先
const dist = process.env.SCP_DIST;

// ユーザ
const user = process.env.SCP_USER;

const uploadFile = () => {
    client.scp(source, {
        host: host,
        username: user,
        privateKey: fs.readFileSync(key),
        path: dist,
    }, err => {
        if (err) {
            console.error("アップロードに失敗しました。", err);
            return;
        }
        console.log("アップロード完了");
});
};

if (source && dist && key && host && user) {
    uploadFile();
} else {
    console.log(".env ファイルが存在しないか、設定項目が不足しています。");
}


chokidar.watch(source, {
    ignored: /node_modules|\.git/,
    persistent: true,
}).on("all", (event, path) => {
    console.log(event, path);
    uploadFile();
}).on("ready", () => {
    console.log("Ready");
});
