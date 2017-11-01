var client = require("scp2");
var fs = require("fs");
var chokidar = require("chokidar");
var argv = require('minimist')(process.argv.slice(2));

// ssh key
var key = (argv.key) ? argv.key : "bsdev.ppk";
//　ホスト
var host = (argv.host) ? argv.host : "bast.bs.hqdomain.celsys.co.jp";

//ソース
var source = argv.s;

//アップロード先
var dest = argv.d;

// 使用例
// chokidar "dist/**" -c "node fileuplod.js -s dist -d /opt/viewer_celsys/htdocs/api/bsr4b/hybrid/webpacktest"

var fileUplod = ()=>{
    client.scp(source, {
        host: host,
        username: "develop",
        privateKey: fs.readFileSync(key),
        path: dest
    }, function(err) {
        if(err) {
            console.error("FAILED", err);
            return;
        }
        console.log("アップロード完了");
    });
};

if (source && dest){
    fileUplod();
}else {
    console.log("-s ソースディレクトリ　-d アップロードディレクトリ (-host ホスト -key キー)");
}


