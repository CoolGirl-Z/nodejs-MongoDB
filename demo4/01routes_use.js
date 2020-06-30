const http = require('http');
const routes = require('./module/routes');
const url = require('url');
http.createServer(function(req, res) {
    // 创建静态web服务
    routes.static(req, res, 'static'); //使用路由之前将静态web服务改为同步的
    let pathname = url.parse(req.url).pathname;
    if (pathname == '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('执行登录')
    } else if (pathname == '/reginster') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end('执行注册')
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