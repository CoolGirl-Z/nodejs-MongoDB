/* ES6基本语法：
1.let，const，模板字符串
2.箭头函数
3.对象，属性简写
4.模板字符串
5.Promise
*/



//1. let用来定义变量， const用来定义常量【不可以改变】
// 都是块级作用域

// 2.模板字符串：`${name}的年龄是${age}`

/* var name = 'zs';
var age = 18;
console.log(`${name}的年龄是${age}`) */


// 3.方法属性简写  =》
// 3.1 属性简写： 属性名与变量名一直可以简写为一个字段
/* var name = 'zs';
var obj = {
    name: name
}

var app = {
    name
}
console.log(obj);
console.log(app); */


// 3.2方法简写
/* var name = 'zs'
var app = {
    name,
    run() {
        console.log(`${this.name}在跑步`);

    }
}
app.run() */

// 4.箭头函数  可以改变this指向上下文
// setTimeout(() => {
//     console.log("执行")
// }, 1000)


// 5.Promise处理异步
// 获取异步方法总的数据【使用回调函数，获取异步方法数据】
/* function getData(calllback) {
    setTimeout(() => {
            var name = 'zs';
            calllback(name);
        },
        1000)
}

getData(function(aaa) {
    console.log(aaa);

}) */

// Promise处理异步：resolve成功的回调；reject失败的回调函数

/* var p = new Promise((resolve, reject) => {
    setTimeout(() => {
            var name = 'zs--Promise';
            resolve(name);
        },
        1000)
})
p.then((res) => {
    console.log(res)
}) */


// Promise封装
function getData(resolve, reject) {
    setTimeout(() => {
            var name = 'zs';
            resolve(name);
        },
        1000)
}
var p1 = new Promise(getData);
p1.then((res) => {
    console.log(res)
})