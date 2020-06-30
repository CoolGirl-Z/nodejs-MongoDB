const fs = require('fs');
exports.getMime = function(extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
};
// 02使用
/* exports.getFileMime = function(extname) {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/mime.json', (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let mimeObj = JSON.parse(data.toString())
            console.log(mimeObj[extname]);
            resolve(mimeObj[extname]);
        })
    })

}
 */
// 03使用
exports.getFileMime = function(extname) {
    // 同步方法
    var data = fs.readFileSync('./data/mime.json'); //不执行结束，后续不执行
    let mimeObj = JSON.parse(data.toString())
    return mimeObj[extname];

}