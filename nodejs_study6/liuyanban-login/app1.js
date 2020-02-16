//引入第三方模块 express模块
const express = require("express");
//调用express这个方法 返回是一个对象
const app = express();
//普通键值对传参 需要引入 body-parse
const bodyParser = require("body-parser");
//设置普通键值对参数的项
app.use(bodyParser.urlencoded({
    extended: false
}));
//引入自定义模块  
const user = require("./tools/user")
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
        // req.session.isLogin = true;
        // req.session.name = name;
        res.jsonp({ //jsonp是为了解决跨域问题
            code: 200,
            msg: "登陆成功",
            data: item
        })
    } else { //只要name和pwd其中一个与数据库中的name和pwd不一样  就返回以下内容
        res.jsonp({ //jsonp是为了解决跨域问题
            code: 400,
            msg: "用户名或者密码输入错误"
        })
    }
})
//监听 端口号
app.listen(8888, () => {
    console.log("端口号8888已启动,请操作......");

})