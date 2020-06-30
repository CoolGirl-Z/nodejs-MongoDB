var request = require('./module/request');

// exports.xxxx = obj;这种暴露获取的数据
console.log(request); //{ xxxx: { get: [Function: get], post: [Function: post] } }

// module.exports = obj;//这种暴露获取的数据
console.log(request); //{ get: [Function: get], post: [Function: post] }