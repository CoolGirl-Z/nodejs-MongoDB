const http = require('http');
const app = require('./module/routers.js');
// 注册web服务
http.createServer(app).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

// 配置路由
app.get('/login', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('执行登录操作');
})

app.get('/news', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('执行news操作');
})
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('首页');
})