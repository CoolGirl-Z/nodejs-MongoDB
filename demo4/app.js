// ejs模板引擎使用
/* 
1.查找ejs模板引擎  https://www.npmjs.com/package/ejs
2.安装 npm i ejs --save
3.项目引入ejs
4.使用ejs.renderFile()
*/

const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');
http.createServer(function(req, res) {
    // 创建静态web服务
    routes.static(req, res, 'static'); //使用路由之前将静态web服务改为同步的
    // http://127.0.0.1:3000/news?page=2&id=1
    let pathname = url.parse(req.url).pathname;
    if (pathname == '/news') {
        // 获取请求类型req.method
        console.log(req.method);

        // 获取get地址栏数据
        var query = url.parse(req.url, true).query;
        console.log(query.page)
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end("get获取传值成功");

    } else if (pathname == '/login') {
        // post请求演示
        ejs.renderFile('./view/form.ejs', {}, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end(data)
        });




    } else if (pathname == '/doLogin') {
        // 获取post传值
        // res.end("post ok")
        var postData = "";
        req.on("data", (chunk) => {
            postData += chunk;
        })
        req.on("end", () => {
            console.log(postData);
            res.end(postData);
        })
    } else if (pathname == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('处理后端业务逻辑')
    } else {
        // 路由未匹配到
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('页面不存在')
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');