# Express框架使用

## express简单介绍
基于 Node.js 平台，快速、开放、极简的 Web 开发框架。
英语官网：http://expressjs.com
中文网：https://www.expressjs.com.cn/
## Express安装使用
1. 在项目文件生成一个`paceage.json`文件。 
```js
npm init --yes //强制生成package.json文件
```
2. 安装express模块
```js
npm install express --save
```
3. 简单使用
```js
//3.1在使用的页面引入该模块
var express= require("express");
var app = new express();

//3.2.1 配置路由
app.get("/,function(req,res){
	res.send("hello world");
})
app.post("/doLogin,function(req,res){
	res.send("hello world");
})

//3.2.2二级三级路由配置   http://127.0.0.1:3000/login/auth访问
app.get('/login/auth', function(req, res) {
    res.send("登录验证");
});
//3.2.3 动态路由配置
app.get('/article', function(req, res) {
    res.send("文章");
});
//article路由后面可以传入任意值
app.get('/article/:id', function(req, res) {
    //获取动态路由：id
    var id= req.params["id"]
    res.send("动态路由" +id);
});
//3.3监听端口
app.listen(3000,"127.0.0.1");
```
4. 
