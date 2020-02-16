//引入第三方模块 express模块
const express = require("express")
//调用这个express方法生成对象
const app = express();
//引入第三方门模块 express-session模块
const session = require("express-session")
//配置session
app.use(session({
    secret: "123456",
    resave: false,
    saveUninitialized: false
}))

//设置服务器对浏览器的session
app.get("/login", (req, res) => {
    //设置session
    req.session.name = "mhn";
    req.session.age = "23"
    res.send("发送凭证成功")
})
//获取凭证
app.get("/user", (req, res) => {
    if (req.session.name) {
        res.send(`登录成功：${req.session.name} ${req.session.age}<a href="./quit">退出</a>`)
    } else {
        res.send("没有登录")
    }
})
//销毁session
app.get("/quit", (req, res) => {
    req.session.destroy();
    res.send("销毁成功")
})
//监听 设置端口号8088
app.listen(8088, () => {
    console.log("8088端口号已经开启");

})