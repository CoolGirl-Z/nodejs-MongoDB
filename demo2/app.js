// 管道流 =》从一个文件复制写入另一个文件
const fs = require('fs');
var readStream = fs.createReadStream('./1.jpg');
var writeStream = fs.createWriteStream('./data/1.jpg');
readStream.pipe(writeStream);