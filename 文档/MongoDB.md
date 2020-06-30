# MongoDB数据库使用

## 一、MongoDB的安装配置

```js
1.下载安装包//下载地址：https://www.mongodb.com/try/download/community
2.点击安装包，安装MongoDB
  2.1安装之前在其他磁盘建一个MongoDB的文件夹，文件夹新建data、log两个文件夹。
  2.2安装时配置data与log地址时选择之前新建的data与log文件夹
3.配置环境变量
  3.1复制MongoDB安装路径下的bin路径。例如：D:\mongoDB\bin
  3.2我的电脑右键属性-->高级系统设置-->环境变量-->系统变量-->Path-->新建-->将复制的路径粘贴之后确定即可。
4.打开cmd输入mongo即可

```



## 四、MongoDB账户权限设置

### 1.创建超级管理员

```js
use admin //切换到mongodb的admin数据库设置【use 数据库名  --切换或者创建数据库】
db.createUser({ 
    user:'admin', 
    pwd:'123456', 
    roles:[{role:'root',db:'admin'}] 
})
```

### 2.**修改** **Mongodb** 数据库配置文件

```js
//路径：mongoDB路径 + bin\mongod.cfg

//配置： 
security: 
	authorization: enabled//目的开启权限验证
```

### 3.重启MongoDB服务

```
重启mongo步骤：
1.windows + R
2.输入services.msc  => 运行
3.找到MongoDB右键重启服务
```

![](./imgs/权限管理.png)

**注意**：有可能mongo重启失败。解决方案查看地址：https://editor.csdn.net/md/?articleId=106993758

### 4.用超级管理员账户连接数据库

```js
mongo admin -u 用户名 -p 密码 

mongo 192.168.1.200:27017/test -u user -p password
```

### 5.给每一个数据库制定一个或者多个用户【只能访问某一数据库】

```js
use user //切换到mongodb的user数据库设置【use 数据库名  --切换或者创建数据库】
db.createUser({ 
    user:'useradmin', 
    pwd:'user', 
    roles:[{role:'root',db:'user'}] 
})



连接某一数据库：mongo 数据库名 -u 用户名 -p 密码
```

### 6.Mongodb账户权限配置中常用的命令

```js
1、show users; //查看当前库下的用户 
2、db.dropUser("eggadmin") //删除用户 
3、db.updateUser( "admin",{pwd:"password"}); //修改用户密码 
4、db.auth("admin","password"); //密码认证
```

### 7.**Mongodb** 数据库角色

1.数据库用户角色：read、readWrite; 

2.数据库管理角色：dbAdmin、dbOwner、userAdmin； 

3.集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager； 

4.备份恢复角色：backup、restore； 

5.所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、 

dbAdminAnyDatabase 

6.超级用户角色：root 

参考：https://www.cnblogs.com/zzw1787044/p/5773178.html

### 8.node.js中连接数据库

```js
const url = 'mongodb://admin:123456@localhost:27017/';
```

##  五、MongoDB中的聚合管道

实际项目中主要用于表的关联查询以及数据统计。

### 管道操作符

| 管道操作符 | Description                              |
| ---------- | ---------------------------------------- |
| $project   | 增加，删除，重命名字段                   |
| $match     | 条件匹配。满足条件的文档才能进入下一阶段 |
| $limit     | 限制结果数量                             |
| $skip      | 跳过文档数量                             |
| $sort      | 条件排序                                 |
| $group     | 条件组合结果                             |
| $lookup    | 引入其他集合数据（表关联查询）           |

### SQL与NOSQL对比：

| WHERE    | $match   |
| -------- | -------- |
| GROUP BY | $group   |
| HAVING   | $match   |
| SELECT   | $project |
| ORDER BY | $sort    |
| LIMIT    | $limit   |
| SUM()    | $sum     |
| COUNT()  | $sum     |
| join     | $lookup  |

### 管道表达式

管道操作符作为“键”，所对应的“值”叫做管道表达式。

例如{$match:{status:"A"}}，$match 称为管道操作符，而 status:"A"称为管道表达式，是管道操作符的操作数(Operand)。 

每个管道表达式是一个文档结构，它是由字段名、字段值、和一些表达式操作符组成的。

| **常用表达式操作符** | Description            |
| -------------------- | ---------------------- |
| $addToSet            | 将文档指定字段的值去重 |
| #                    | 文档指定字段的最大值   |
| $min                 | 文档指定字段的最小值   |
| $sum                 | 文档指定字段求和       |
| $avg                 | 文档指定字段求平均     |
| $gt                  | 大于给定值             |
| $lt                  | 小于给定值             |
| $eq                  | 等于给定值             |

### aggregate实例显示:

**$project**:修改文档的结构，用来重命名，增加，删除文档中字段。

```sql
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1,order_id:1 }
    } 
])
```

**$match**:用于过滤文档。用法类似于 find() 方法中的参数。

```sql
db.order.aggregate([ 
    { $project:{ trade_no:1, all_price:1,order_id:1 } }, 
    { $match:{"all_price":{$gte:90}} } 
])
```

**$group**:将集合中的文档进行分组，可用于统计结果。 统计每个订单的订单数量，按照订单号分组。

```sql
db.order_item.aggregate([ 
    { $group: {_id: "$order_id", total: {$sum: "$price"}} }
])
```

**$sort** :将集合中的文档进行排序。

```sql
db.order.aggregate([ 
   { $project:{ trade_no:1, all_price:1 } }, 
   { $match:{"all_price":{$gte:90}} }, 
   { $sort:{"all_price":1} }//-1表示降序，1表示升序
])
```

**$limit** :

```sql
db.order.aggregate([ 
   { $project:{ trade_no:1, all_price:1 } }, 
   { $match:{"all_price":{$gte:90}} }, 
   { $sort:{"all_price":1} }, 
   { $limit:1 }
])
```

**$skip**:

```sql
db.order.aggregate([ 
   { $project:{ trade_no:1, all_price:1 } }, 
   { $match:{"all_price":{$gte:90}} }, 
   { $sort:{"all_price":1} }, 
   { $skip:1 }
])
```

**$lookup** **表关联**

```sql
db.order.aggregate([ 
    { $lookup: { 
    	from: "order_item", 
    	localField: "order_id", 
    	foreignField: "order_id", 
    	as: "items" } 
    } 
])
```

```json
{ 
    "_id": ObjectId("5b743d8c2c327f8d1b360540"), 
    "order_id": "1", 
    "uid": 10, 
    "trade_no": "111", 
    "all_price": 100, 
    "all_num": 2, 
    "items": [{ 
        "_id": ObjectId("5b743d9c2c327f8d1b360543"), 
        "order_id": "1", 
        "title": "商品鼠标 1",
        "price": 50, 
        "num": 1 
    }, { 
        "_id": ObjectId("5b743da12c327f8d1b360544"), 
        "order_id": "1", 
        "title": "商品键盘 2",
        "price": 50, 
        "num": 1 
    }, { 
        "_id": ObjectId("5b74f457089f78dc8f0a4f3b"), 
        "order_id": "1",
        "title": "商品键盘 3", 
        "price": 0, 
        "num": 1 
    }] 
}, { 
    "_id": ObjectId("5b743d902c327f8d1b360541"), 
    "order_id": "2", 
    "uid": 7, 
    "trade_no": "222",
    "all_price": 90,
    "all_num": 2,
    "items": [{
        "_id": ObjectId("5b743da52c327f8d1b360545"), 
        "order_id": "2",
        "title": "牛奶", 
        "price": 50, 
        "num": 1 
    }, { 
        "_id": ObjectId("5b743da92c327f8d1b360546"), 
        "order_id": "2",
		"title": "酸奶", 
        "price": 40, 
        "num": 1 }] 
}, { 
    "_id": ObjectId("5b743d962c327f8d1b360542"), 
    "order_id": "3", 
    "uid": 9, 
    "trade_no": "333",
    "all_price": 20,
    "all_num": 6, 
    "items": [{ 
        "_id": ObjectId("5b743dad2c327f8d1b360547"), 
        "order_id": "3", 
        "title": "矿泉水", 
        "price": 2,
        "num": 5 
    }, { "_id": ObjectId("5b743dff2c327f8d1b360548"),
        "order_id": "3", 
        "title": "毛巾", 
        "price": 10,
        "num": 1 
       }]
}
```

```sql
db.order.aggregate([ 
    { $lookup:{ 
    	from: "order_item", 
    	localField: "order_id", 
    	foreignField: "order_id", 
    	as: "items" 
    	} 
    }, { 
    $match:{"all_price":{$gte:90}}
    } 
])
```

## 六、nodejs操作MongoDB数据库

在nodejs操作MongoDB数据库，需要先下载nodejs操作MongoDB数据库的模块。

操作步骤路径： http://mongodb.github.io/node-mongodb-native/3.5/installation-guide/installation-guide/ 

```js
步骤：
1.创建一个package.json  -》npm init
2.安装mongodb模块   -》npm install mongodb --save
3.在项目中引入mongodb，获取MongoClient。   -》const MongoClient = require('mongodb').MongoClient;
4.定义数据库连接地址,以及要操作的数据库。  -》const url = 'mongodb://localhost:27017';const dbName =  'myproject';
5.实例化MongoClient,实例化是将数据库url添加进去，获取到一个client对象。  -》const client = new MongoClient(url);
6.通过client.connect()和数据库进行相应连接。连接以后将dbName作为参数传递，获取要操作数据库的对象。通过db对象操作相应数据库。 
    -》client.connect(function(err){
    assert.equal(null,err);
    const db =  client.db(dbName);
    client.close();
})
```

#### 问题1  数据库设置管理员之后初次使用nodejs链接获取数据存在问题

初次使用连接代码如下：

```js
const { MongoClient } = require('mongodb') //1.引入mongodb     es6语法等价于 const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //2.1定义数据库连接地址
const dbName = 'itying'; //2.2定义要操作的数据库
// 3.实例化mongoClient,第二个参数建议添加
const client = new MongoClient(url, { useUnifiedTopology: true });
// 4.连接数据库
client.connect((err) => {
    if (err) {
        // 数据库连接失败
        console.log(err);
        return;
    }
    // 数据库连接成功
    console.log("数据库连接成功");
    // 5.获取要操作的数据库实例
    let db = client.db(dbName);

    // 查找数据
    db.collection("user").find({}).toArray((err, data) => {
            console.log(err);
            console.log(data);
            // 操作数据库完毕之后，关闭数据库连接
            client.close();
        })
        // 操作数据库完毕之后，关闭数据库连接
        // client.close();
})
```

运行node app.js报错：

```js
//报错信息：开启了权限验证
MongoError: command find requires authentication
    at MessageStream.messageHandler (C:\Users\zfj\Desktop\node_demo\nodejs_operate_mongoDB\node_modules\mongodb\lib\cmap\connection.js:263:20)        
    at MessageStream.emit (events.js:310:20)
    at processIncomingData (C:\Users\zfj\Desktop\node_demo\nodejs_operate_mongoDB\node_modules\mongodb\lib\cmap\message_stream.js:144:12)
    at MessageStream._write (C:\Users\zfj\Desktop\node_demo\nodejs_operate_mongoDB\node_modules\mongodb\lib\cmap\message_stream.js:42:5)
    at doWrite (_stream_writable.js:442:12)
    at MessageStream.Writable.write (_stream_writable.js:317:11)
    at Socket.ondata (_stream_readable.js:695:22)
    at Socket.emit (events.js:310:20)
    at addChunk (_stream_readable.js:286:12) {
  ok: 0,
  code: 13,
  codeName: 'Unauthorized',
  name: 'MongoError'
}
```

初次使用解决方案简单粗暴：**我居然直接将数据库超级管理员删除了，我可真是太强了**【注意删除用户需谨慎：**db.dropUser("admin")慎用！！！**】



```js
//解决方案：
1.关闭mongodb服务  -》net stop MongoDB
2.重启mongodb服务  -》 net start MongoDB
```

