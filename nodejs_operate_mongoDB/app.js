const { MongoClient } = require('mongodb') //1.引入mongodb     es6语法等价于 const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //2.1定义数据库连接地址
const dbName = 'itying'; //2.2定义要操作的数据库
// 3.实例化mongoClient,第二个参数建议添加
// const client = new MongoClient(url, { useUnifiedTopology: true });
// 4.连接数据库1
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

    //A. 查找数据
    /* db.collection("user").find({}).toArray((err, data) => {
        console.log(data);
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    //B. 增加数据
    /* db.collection("user").insertOne({ "username": "李四4", "age": 14, "name": "lisi4" }, (err, result) => {
        if (err) { //增加失败
            console.log(err);
            return;
        }
        console.log("增加成功");
        console.log(result); //result.insertedId指增加成功的数据的id
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    // C.修改数据
    /* db.collection("user").updateOne({ "name": "zhangsan" }, { $set: { "age": 15 } }, (err, result) => {
        if (err) { //修改失败
            console.log(err);
            return;
        }
        console.log("修改成功");
        console.log(result); //
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */

    // D.删除一条数据
    /* db.collection("user").deleteOne({ "name": "zhangsan" }, (err) => {
        if (err) { //删除失败
            console.log(err);
            return;
        }
        console.log("删除成功");
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    // E.删除多条数据
    /* db.collection("user").deleteMany({ "name": "lisi4" }, (err) => {
        if (err) { //删除失败
            console.log(err);
            return;
        }
        console.log("删除多条成功");
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */

    // 操作数据库完毕之后，关闭数据库连接
    // client.close();
})

// 连接数据库2
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        // 数据库连接失败
        console.log(err);
        return;
    }
    // 数据库连接成功
    console.log("数据库连接成功");
    // 5.获取要操作的数据库实例
    let db = client.db(dbName);
    //A. 查找数据
    /* db.collection("user").find({}).toArray((err, data) => {
        console.log(data);
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    //B. 增加数据
    /* db.collection("user").insertOne({ "username": "李四4", "age": 14, "name": "lisi4" }, (err, result) => {
        if (err) { //增加失败
            console.log(err);
            return;
        }
        console.log("增加成功");
        console.log(result); //result.insertedId指增加成功的数据的id
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    // C.修改数据
    /* db.collection("user").updateOne({ "name": "zhangsan" }, { $set: { "age": 15 } }, (err, result) => {
        if (err) { //修改失败
            console.log(err);
            return;
        }
        console.log("修改成功");
        console.log(result); //
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */

    // D.删除一条数据
    /* db.collection("user").deleteOne({ "name": "zhangsan" }, (err) => {
        if (err) { //删除失败
            console.log(err);
            return;
        }
        console.log("删除成功");
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */
    // E.删除多条数据
    /* db.collection("user").deleteMany({ "name": "lisi4" }, (err) => {
        if (err) { //删除失败
            console.log(err);
            return;
        }
        console.log("删除多条成功");
        // 操作数据库完毕之后，关闭数据库连接
        client.close();
    }); */

    // 操作数据库完毕之后，关闭数据库连接
    // client.close();
})