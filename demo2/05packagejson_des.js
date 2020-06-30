// package.json的生成：npm install --yes【强制生成】
// npm i / cnpm i 表示逐个安装package.json文件下的dependencies中对应的包

var obj = {
    "name": "demo2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js", //入口文件
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": { //保存项目所需要的包
        "md5": "^2.2.1", //只写版本号表示只用该版本；^表示第一位版本号不变后两位取最新；~表示前两位不变，最后一个取最新；*表示全部取最新
        "node-media-server": "^2.1.0",
        "silly-datetime": "^0.1.2"
    },
    "devDependencies": { //保存项目所需要的其他包，主要是工具

    }
}