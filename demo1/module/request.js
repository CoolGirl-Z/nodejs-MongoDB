// 用于获取数据
var obj = {
        get: function() {
            console.log('从服务器获取数据')
        },
        post: function() {
            console.log('提交数据');

        }
    }
    // exports.属性 = obj;
    // exports.xxxx = obj;
module.exports = obj;