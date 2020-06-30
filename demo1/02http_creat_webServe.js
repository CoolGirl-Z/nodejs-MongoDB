// 使用http模块创建web服务
// node-http-server生成以下代码


// 不让别人修改http模块使用const常量
const http = require('http'); //nodejs的内置模块
http.createServer(function(req, res) {
    console.log(req.url); //获取url
    // 设置响应头 ，状态码为200，文件类型是html，字符集为utf-8
    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" }) //解决乱码
    res.write("<head><meta charset='utf-8'></head>"); //解决乱码
    res.write('你好nodejs');
    res.write('<h2>你好</h2>')
    res.end(); //结束响应
}).listen(3000); //listen()监听端口