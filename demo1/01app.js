// 引入http模块【公共功能单独抽出一个模块】
var http = require('http');
// 创建Web服务
http.createServer(function(request, response) { //request获取url信息；response给浏览器相应信息
    // 设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 页面上面是输出一句话并且结束相应
    response.end('Hello World成功');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');