const fs = require('fs');
const url = require('url');
const path = require('path');
// 私有方法
let getFileMime = function(extname) {
    // 同步方法
    var data = fs.readFileSync('./data/mime.json'); //不执行结束，后续不执行
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname];

};
exports.static = function(req, res, staticPath) {
    //1. 获取网站传过的地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname; //处理进入页面先访问index.html问题【设置主页】

    // 获取后缀名path模块的path.extname()方法获取后缀名
    let extname = path.extname(pathname);
    // 2.通过fs模块读取文件
    // 2.1过滤请求
    if (pathname != '/favicon.ico') {
        try {
            var data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (error) {

        }

    }

};