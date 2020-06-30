/* 
格式化日期包silly-datetime的使用：
1.在npmjs中查找silly-datetime模块：https://www.npmjs.com/package/silly-datetime
2.下载安装silly-datetime模块 npm i silly-datetime --save 【安装时使用--save是将包信息写入到package.json中的dependencies中。写入到该处方便别人使用我们项目：npm i即可】
3.引入silly-datetime模块  var sd = require('silly-datetime')
4.使用silly-datetime进行格式化时间   sd.format(new Date(), 'YYYY-MM-DD HH:mm');
 */
var sd = require('silly-datetime');
console.log(new Date());
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
// 2015-07-06 15:10

console.log(sd.fromNow(+new Date() - 2000));
// a few seconds ago