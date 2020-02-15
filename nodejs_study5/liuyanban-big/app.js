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
//监听事件 端口号
app.listen(8088, () => {
    console.log("端口号8088已启动,请操作......");

})