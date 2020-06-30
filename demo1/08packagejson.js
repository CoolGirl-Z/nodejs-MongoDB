var axios = require('axios'); //自定义模块放在node_modules文件下，可以省略node_modules路径，若后续为index.js也可以省略

// var db = require('db'); //错误写法，因为nodejs会默认找node_modules对应模块里面的index.js
var db = require('db'); //若要使这种方式不报错，需要配置文件:在db.js文件夹同级执行npm init --yes，生成package.json文件
db.add();
axios.get();
axios.post();