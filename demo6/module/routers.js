const url = require('url');

function changeRes(res) {
    res.send = (data) => {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
    }
}
let server = () => {
    let G = {};
    // 表示将get与post区分开来
    G._get = {};
    G._post = {};
    let app = function(req, res) {
        changeRes(res);
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


    return app;
}
module.exports = server();