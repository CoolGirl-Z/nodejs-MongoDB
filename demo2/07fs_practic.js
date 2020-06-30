// 1.判断服务器上有没有upload目录，如果没有创建目录，如果有不做操作。（图片上传）
const fs = require('fs');
var path = "./upload";
// fs.stat()：判断目录存在不存在
fs.stat(path, (err, data) => {
    // 目录不存在
    if (err) {
        // console.log(err, '目录不存在');
        // 执行创建目录
        mkdir(path);
        console.log('1');
        return;
    }

    // 判断upload是目录还是文件
    if (data.isDirectory()) {
        console.log('2');
        console.log("upload目录存在")
    } else {
        console.log('3');
        // upload存在但是是一个文件，此处需要将文件upload删除，再去执行创建目录
        fs.unlink(path, (err) => {
            if (!err) {
                // 执行创建目录
                mkdir(path);
                console.log('文件删除成功')
            } else {
                console.log('请检测传入数据是否正确');

            }
        })
    }
})

// 封装创建目录
function mkdir(dir) {
    fs.mkdir(dir, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}









// 2.wwwroot文件夹下面有images，css，js以及index.html，找出wwwroot目录下的所有目录