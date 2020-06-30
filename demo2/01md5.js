/* 
MD5的使用：
1.在npmjs中查找md5模块：https://www.npmjs.com/package/md5
2.下载安装MD5模块 npm install md5   【安装时使用--save是将包信息写入到package.json中的dependencies中。写入到该处方便别人使用我们项目：npm i即可】
3.引入md5模块  var MD5 = require('md5')
4.使用md5进行加密   MD5('123456')
 */
var MD5 = require('md5')
console.log(MD5('123456'))