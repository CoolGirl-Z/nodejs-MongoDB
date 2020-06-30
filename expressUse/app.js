const express = require('express');
const app = new express();

app.get('/', function(req, res) {
    res.send('Hello World');
});
app.get('/login', function(req, res) {
    res.send("登录页面");
});
app.get('/register', function(req, res) {
    res.send("注册页面");
});
// get主要用于显示数据
app.get('/article', function(req, res) {
    res.send("文章页面");
});
// post主要用于增加数据
app.post('/doLogin', function(req, res) {
    console.log(req.body);
    res.send("执行登录");
});
// put主要用于修改数据
app.put('/editUser', function(req, res) {
    res.send("修改用户");
});

// delete主要用于删除数据
app.delete('/doLogin', function(req, res) {
    res.send("删除用户");
});

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
    var id = req.params["id"]
    res.send("动态路由" + id);
});
app.listen(3000);