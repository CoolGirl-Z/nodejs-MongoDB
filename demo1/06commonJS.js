// 使用http模块创建web服务

// 不让别人修改http模块使用const常量
const http = require('http'); //nodejs的内置模块
const url = require('url');
const tools = require('./module/tools.js'); //引入单独模块后期使用
console.log(tools)
http.createServer(function(req, res) {
    // api地址：http://127.0.0.1?name=zs&age=18   获取去url传过来的name和age
    // 设置响应头 ，状态码为200，文件类型是html，字符集为utf-8
    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" }) //解决乱码
    res.write("<head><meta charset='utf-8'></head>"); //解决乱码


    var api = tools.formatApi('api/plist');
    res.write(api);
    console.log(req.url); //获取浏览器访问地址
    if (req.url !== '/favicon.ico') {
        var userInfo = url.parse(req.url, true).query;
        console.log(`姓名：${userInfo.name} -- 年龄：${userInfo.age}`)
    }

    res.end(); //结束响应,必须存在的
}).listen(3000); //listen()监听端口