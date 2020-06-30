let app = function() {
    console.log('app方法');

}
app.get = function() {
    console.log('get')
}
app.post = function() {
    console.log('post')
}

// 调用
app()