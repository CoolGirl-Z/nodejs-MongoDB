// 2.wwwroot文件夹下面有images，css，js以及index.html，找出wwwroot目录下的所有目录,然后将找到的目录放在一个数组里
const fs = require('fs');
// 注意：fs中的方法是异步的

// 以下属于错误写法
// var path = './wwwroot';
// var dirArr = [];

// fs.readdir(path, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     for (var i = 0; i < data.length; i++) {
//         fs.stat(path + '/' + data[i], (error, stats) => {
//             if (stats.isDirectory()) {
//                 dirArr.push(data[i]);
//             }
//         })
//     }
//     console.log(dirArr);

// })

// 解决异步方法：1.改造for循环使用递归；2.使用nodejs中的新特性async await

// 正确操作1.改造for循环使用递归；
/* var path = './wwwroot';
var dirArr = [];

fs.readdir(path, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    // 使用匿名自执行函数递归调用
    (function getDir(i) {
        if (i == data.length) {
            // 执行完成
            console.log(dirArr);
            return;
        }
        fs.stat(path + '/' + data[i], (error, stats) => {
            if (stats.isDirectory()) {
                dirArr.push(data[i]);
            }
            // 异步函数自执行
            getDir(i + 1); //此处不可以使用i++
        })
    })(0)
}) */


//正确操作 2.使用nodejs中的新特性async await
// 1.定义一个isDir的方法判断一个资源是目录还是文件 
async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }
            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })

}


// 2.获取wwwroot里面所有资源遍历循环
function main() {
    var path = './wwwroot';
    var dirArr = [];
    fs.readdir(path, async(err, data) => { //注意await外部方法为async
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i < data.length; i++) {
            if (await isDir(path + '/' + data[i])) {
                dirArr.push(data[i])
            }
        }
        console.log(dirArr);
    })
}
main();