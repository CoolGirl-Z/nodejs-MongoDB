// URL模块使用


const url = require('url'); //nodejs内置模块

var api = 'http://www.itying.com?name=zs&age=18';
// url.parse(api)//获取url参数
// url.parse(api，true)//获取url参数，将参数转换为对象
// console.log(url.parse(api, true))
var getValue = url.parse(api, true).query; //获取参数
console.log(`姓名：${getValue.name} -- 年龄：${getValue.age}`)