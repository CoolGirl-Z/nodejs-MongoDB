let G = {};
let app = function(req, res) {
    if (G['/login']) {
        G['/login'](req, res); //执行方法
    }

}
app.get = function(str, cb) {
    // 注册方法
    G[str] = cb;
    /* G['/login'] = function(req, res) {
        res.send('hello World!')
    } */
}
app.post = function() {
    console.log('post')
}

// 调用
app.get('/login', function(req, res) {
    // res.send("hello world!")
    console.log('login');

})

setTimeout(() => {
    app('req', 'res');
}, 1000)