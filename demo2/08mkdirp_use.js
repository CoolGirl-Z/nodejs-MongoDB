// 1.判断服务器上有没有upload目录，如果没有创建目录，如果有不做操作。（图片上传）
// mkdirp使用【创建目录模块】
/*
1.查找模块https://www.npmjs.com/package/mkdirp
2.安装模块 cnpm i mkdirp --save
3.引入const mkdirp = require('mkdirp');
4.看文档使用 
mkdirp('./upload')
    .then(made => {
        console.log(`made directories, starting with ${made}`)
    })
 */
var mkdirp = require('mkdirp');
// mkdirp('./upload')
//     .then(made => {
//         if (!made) {
//             console.log("目录已存在");
//         } else {
//             console.log("目录创建完成");
//         }
//     })
mkdirp('./upload/imgs')
    .then(made => {
        if (made) {
            console.log(made);
        } else {
            console.log(made);
        }
    })