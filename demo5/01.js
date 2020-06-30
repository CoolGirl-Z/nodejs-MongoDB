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
    let pathname = url.parse(req.url).pathname.replace('/', '');
    // http://127.0.0.1:3000/login   pathname=login
    // http://127.0.0.1:3000/xxx   pathname=xxx[不存在]
    try {
        // console.log(pathname);
        routes[pathname](req, res);
    } catch (error) {
        routes['error'](req, res);
    }



}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');