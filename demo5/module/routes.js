const fs = require('fs');
const url = require('url');
const path = require('path');
const ejs = require('ejs');
// 私有方法
let getFileMime = function(extname) {
    // 同步方法
    var data = fs.readFileSync('./data/mime.json'); //不执行结束，后续不执行
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname];

};

let app = {
    static: (req, res, staticPath) => {
        //1. 获取网站传过的地址
        let pathname = url.parse(req.url).pathname;
        pathname = pathname == '/' ? '/index.html' : pathname; //处理进入页面先访问index.html问题【设置主页】
        // 获取后缀名：path模块的path.extname()方法获取后缀名
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
    },
    login: (req, res) => {
        // 处理登录业务逻辑
        ejs.renderFile('./view/form.ejs', {}, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end(data)
        })

    },
    news: (req, res) => {
        // news
        res.end('news2')
    },
    dologin: (req, res) => {
        res.end('doLogin');
    },
    error: (req, res) => {
        // 找不到路由
        res.end('error');
    }
}
module.exports = app;