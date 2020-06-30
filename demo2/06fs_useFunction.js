// node内置的fs模块：主要用于文件操作。

// 官网方法
// fs.access()：检查文件是否存在，Node.js可以使用其权限访问它
// fs.appendFile()：将数据附加到文件。如果文件不存在，则创建
// fs.chmod()：更改通过传递的文件名指定的文件的权限。相关阅读：fs.lchmod()，fs.fchmod()
// fs.chown()：更改由传递的文件名指定的文件的所有者和组。相关阅读：fs.fchown()，fs.lchown()
// fs.close()：关闭文件描述符
// fs.copyFile()：复制文件
// fs.createReadStream()：创建可读的文件流
// fs.createWriteStream()：创建可写文件流
// fs.link()：创建指向文件的新硬链接
// fs.mkdir()： 新建一个文件夹
// fs.mkdtemp()：创建一个临时目录
// fs.open()：设置文件模式
// fs.readdir()：读取目录的内容
// fs.readFile()：读取文件的内容。有关：fs.read()
// fs.readlink()：读取符号链接的值
// fs.realpath()：将相对文件路径指针（.，..）解析为完整路径
// fs.rename()：重命名文件或文件夹
// fs.rmdir()：删除文件夹
// fs.stat()：返回由传递的文件名标识的文件的状态。相关阅读：fs.fstat()，fs.lstat()
// fs.symlink()：创建指向文件的新符号链接
// fs.truncate()：将传递的文件名标识的文件截断为指定的长度。有关：fs.ftruncate()
// fs.unlink()：删除文件或符号链接
// fs.unwatchFile()：停止监视文件上的更改
// fs.utimes()：更改通过传递的文件名标识的文件的时间戳。有关：fs.futimes()
// fs.watchFile()：开始监视文件上的更改。有关：fs.watch()
// fs.writeFile()：将数据写入文件。有关：fs.write()



/* 
1. fs.stat 检测文件还在目录
2. fs.mkdir 创建目录
3. fs.writeFile  创建写入文件
4. fs.appendFile 追加文件
5. fs.readFile  读取文件
6. fs.readdir  读取目录
7. fs.rename 重命名，移动文件
8. fs.rmdir  删除目录
9. fs.unlink  删除文件
*/

const fs = require('fs');
//1. fs.stat 检测文件还在目录
/* fs.stat('./node_modules', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(`是文件：${data.isFile()}`)
    console.log(`是目录：${data.isDirectory()}`)
}) */
/* fs.stat('./package.json', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(`是文件：${data.isFile()}`)
    console.log(`是目录：${data.isDirectory()}`)
}) */

// 2. fs.mkdir 创建目录
/* 
path:将创建的目录路径
mode:目录权限（读写权限），默认777
callback:回调函数，传递异常参数err
*/
/* fs.mkdir('./css', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("创建成功");
}); */

// 3. fs.writeFile 创建写入文件【如果文件存在将替换文件，不存在将创建写入文件】
/* 
filename:创建写入文件名称
data：写入的内容，使用字符串或者buffer数据
options：设置文件编码以及权限
    · encoding：可选，默认'utf-8'
    · mode:文件读写权限，默认438
    · flag:默认值为W
callback{function}  回调函数，传递异常参数err
*/
/* fs.writeFile('./css/index.css', '.index{width:100%}', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建写入文件成功');
}) */


// 4. fs.appendFile 追加文件【存在追加，不存在新增】
/* fs.appendFile('./css/index.css', 'body{padding:0}', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('追加成功')
}) */



// 5. fs.readFile 读取文件
/* fs.readFile('./css/index.css', (err, data) => {
    if (err) {
        console.log(err);
        reuturn;
    }
    // 原本是十六进制的buffer数据
    console.log(data);
    // 将十六进制转为字符串类型
    console.log(data.toString())
}) */



// 6. fs.readdir 读取目录
/* fs.readdir('./css', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data)
}) */


// 7. fs.rename 重命名【功能1：重命名；功能2：移动文件】
/*重命名 
fs.rename('./css/aa.css', './css/demo.css', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('重命名成功')
}) */
// 移动文件 
/* fs.rename('./aa.css', './css/demo.css', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('重命名成功')
}) */



// 8. fs.rmdir  删除目录
// 若目录不为空删除失败，删除目录首先将目录中文件删除
/* fs.rmdir('./css', (err) => {
    if (err) { console.log(err); return }
    console.log('删除目录成功')
}) */



// 9. fs.unlink  删除文件
/* fs.unlink('./css/index.css', (err) => {
    if (err) { console.log(err); return }
    console.log('删除文件成功')
}) */