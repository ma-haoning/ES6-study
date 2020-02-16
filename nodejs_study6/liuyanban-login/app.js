//引入第三方模块 express模块
const express = require("express");
//调用这个函数 得到一个对象
const app = express();
//引入第三方模块 multer模块
const multer = require("multer")
//配置multer包
const upload = multer({
    dest: "uploads/"
});
//普通键值对传参 需要引入 body-parse
const bodyParser = require("body-parser");
//设置普通键值对参数的项
app.use(bodyParser.urlencoded({
    extended: false
}));
//引入第三方模块 express-session模块
const session = require("express-session");
//配置session
app.use(session({
    secret: "123456",
    resave: false,
    saveUninitialized: false
}))
//引入自定义模块
const user = require("./tools/user")
//托管静态资源
app.use(express.static("liuyanban"));
//设置post接口  因为post参数涉及到文件上传 需要引入第三方模块multer
app.post("/post_formdata", upload.single("avatar"), (req, res) => {
    // console.log(req.file);
    // console.log(req.body);
    //获取到请求体中的数据
    let {
        name,
        pwd
    } = req.body
    //获取文件的数据
    let avatarUrl = req.file.path;
    //已经引入了自定义模块 直接调用自定义模块的方法 添加
    user.add(name, pwd, avatarUrl);
    res.send({
        "code": 200,
        "msg": "注册成功"
    })
});
//写用户登录接口  
app.post("/user_login", (req, res) => {
    //由于上面已经引入第三方模块 body-parse模块 直接用 req.body
    //解构赋值
    let {
        name,
        pwd
    } = req.body;
    //获取数据库里面的数据
    let user_list = user.get();
    //得到是一个数组   返回出来的是一个对象 这个对象是数组中的一个元素
    let item = user_list.find(item => {
        if (item.name == name && item.pwd == pwd) {
            return true;
        }
    });
    //如果从前端获取的name和pwd与数据库中的name和pwd一样 返回以下内容
    if (item) {
        //设置session
        req.session.isLogin = true;
        req.session.name = name;
        res.json({ //jsonp是为了解决跨域问题
            code: 200,
            msg: "登陆成功",
            data: item
        })
    } else { //只要name和pwd其中一个与数据库中的name和pwd不一样  就返回以下内容
        res.json({ //jsonp是为了解决跨域问题
            code: 400,
            msg: "用户名或者密码输入错误"
        })
    }
})
//添加是否登录接口 获取session
app.get("/getSession", (req, res) => {
    //获取session
    let isLogin = req.session.isLogin;
    let name = req.session.name;
    if (isLogin) {
        res.send({
            code: 200,
            msg: "登录成功",
            data: {
                name
            }
        })
    } else {
        res.send({
            code: 400,
            msg: "未登录"
        })
    }
})
//删除 session
app.get("/quit", (req, res) => {
    req.session.destroy();
    res.send({
        code: 200,
        msg: "已取消登录"
    })
})
//监听事件 端口号
app.listen(8088, () => {
    console.log("端口号8088已启动,请操作......");

})