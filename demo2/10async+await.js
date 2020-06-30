// 2.使用nodejs中的新特性async await

/* //普通方法
function test() {
    return '你好nodejs'
}
console.log(test()); */

// 异步方法【错误】
/* async function test() { //返回promise或者字符串
    return '你好node异步方法'
}
console.log(await test()); //错误写法，await必须用在async方法里 */




// 异步【await必须用在async方法里】

async function test() { //返回promise或者字符串
    return new Promise((resolve, rejec) => {
        setTimeout(() => {
                var name = 'zs--Promise';
                resolve(name);
            },
            1000)
    })
}
async function main() {
    var data = await test(); //获取异步方法里的数据
    console.log(data)
}
main();