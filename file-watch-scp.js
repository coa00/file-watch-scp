require("dotenv").config();
require('date-utils');

const client = require("scp2");
const fs = require("fs");
const chokidar = require("chokidar");

const getTime = ()=>{
    return formatted = new Date().toFormat("YYYYMMDDHH24MISS");
};

var log = require('loglevel-message-prefix')(require('loglevel'), {
    prefixes: ['level'],
    staticPrefixes: ['fileSync'],
    separator: '/',
});

log.setLevel('info');

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
            log.error(getTime(), "upload error", err);
            return;
        }
        log.info(getTime(), "upload complete");
    });
};

if (source && dist && key && host && user) {
    uploadFile();
} else {
    log.error("not found .env file");
}


chokidar.watch(source, {
    ignored: /node_modules|\.git/,
    persistent: true,
}).on("all", (event, path) => {
    log.info(event, path);
    uploadFile();
}).on("ready", () => {
    log.debug("Ready");
});
