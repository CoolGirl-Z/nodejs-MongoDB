const http = require('http');
const fs = require('fs');
const url = require('url');
const common = require('./module/common.js');
const path = require('path');
http.createServer(function(req, res) {
    // http://127.0.0.1:8081/login.html
    // http://127.0.0.1:8081/index.html
    //1. 获取网站传过的地址
    console.log(req.url);
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname; //处理进入页面先访问index.html问题【设置主页】

    // 获取后缀名path模块的path.extname()方法获取后缀名
    let extname = path.extname(pathname);
    // 2.通过fs模块读取文件
    // 2.1过滤请求
    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, async(err, data) => {
            if (err) {
                console.log('404');
                res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end("404这个页面不存在");
                return;
            }
            // let mime = common.getMime(extname);
            let mime = await common.getFileMime(extname);
            fs.readFile('./data/mime.json', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                let mimeObj = JSON.parse(data.toString())
                console.log(mimeObj[extname])
            })
            res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
            res.end(data);
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');