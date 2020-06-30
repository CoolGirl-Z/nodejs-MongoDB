// 以流的方式读取写入文件
// fs.createReadStream  从文件流中读取数据
const fs = require('fs');
/* var readStream = fs.createReadStream('./data/input.txt');
// readStream.on()监听读取状态
var count = 0;
var str = "";
readStream.on('data', (data) => {
    str += data;
    count++;
})
readStream.on('end', () => { //读取结束
    console.log(str);
    console.log(count);
})
readStream.on('error', (err) => {
    console.log(err);
}) */


// 以流的方式写入文件
// fs.createWriteStream
var str = "";
for (var i = 0; i < 500; i++) {
    str += "我是从数据库获取的数据，保存起来\n";
}
var writeStream = fs.createWriteStream('./data/output.txt');
writeStream.write(str);


writeStream.end(); // 标记写入完成，若不写监听不到写入完成
writeStream.on('finish', () => { //监听写入结束
    console.log('写入完成');

})