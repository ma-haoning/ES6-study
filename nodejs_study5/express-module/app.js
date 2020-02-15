//定义一个第三方模块
const express = require("express");
//调用这个方法 获取一个对象
const app = express();

//获取静态资源
app.use("/liuyanban", express.static("liuyanban"));
app.use("/ceshi", express.static("ceshi"));

//监听事件
app.listen(8088, () => {
    console.log("端口8088版本服务器已经启动");

})