const url = require('url');
const path = require('path');
const fs = require('fs');
// 扩展res

function changeRes(res) {
    res.send = (data) => {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
    }
}
// 根据后缀名获取文件类型：私有方法
function getFileMime(extname) {
    // 同步方法
    var data = fs.readFileSync('./data/mime.json'); //不执行结束，后续不执行
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname];

};
// 静态web服务方法
function initStatic(req, res, staticPath) {
    //1. 获取网站传过的地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname; //处理进入页面先访问index.html问题【设置主页】
    // 获取后缀名：path模块的path.extname()方法获取后缀名
    let extname = path.extname(pathname);
    // 2.通过fs模块读取文件
    // 2.1过滤请求
    // if (pathname != '/favicon.ico') {
    try {
        var data = fs.readFileSync('./' + staticPath + pathname);
        if (data) {
            let mime = getFileMime(extname);
            res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
            res.end(data);
        }
    } catch (error) {

        // }

    }
};
let server = () => {
    let G = {
        _get: {},
        _post: {},
        staticPath: "static"

    };
    // 表示将get与post区分开来
    // G._get = {};
    // G._post = {};
    let app = function(req, res) {
        // 拓展res
        changeRes(res);
        // 配置静态web服务
        initStatic(req, res, G.staticPath);
        let pathname = url.parse(req.url).pathname;
        // 获取请求类型
        let method = req.method.toLowerCase();
        if (G['_' + method][pathname]) {
            if (method == 'get') {
                G._get[pathname](req, res);
            } else {
                // 执行post请求，获取post数据，绑定在req.body中
                var postData = "";
                req.on("data", (chunk) => {
                    postData += chunk;
                })
                req.on("end", () => {
                    console.log(postData);
                    res.end(postData);
                    req.body = postData;
                    G._post[pathname](req, res); //执行方法
                })


            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end('页面不存在');
        }
    }
    app.get = function(str, cb) {
        // 注册方法
        G._get[str] = cb;
    }
    app.post = function(str, cb) {
        // 注册方法
        G._post[str] = cb;
    }

    // 配置静态web服务目录
    app.static = function(staticPath) {
        G.staticPath = staticPath;
    }


    return app;
}
module.exports = server();