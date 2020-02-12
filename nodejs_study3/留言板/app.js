//引入fs核心模块
const fs = require("fs");
//引入http核心模块
const http = require("http");
//引入url核心模块
const url = require("url");
// console.log(url.parse);

//引入path核心模块
const path = require("path");
//引入自定义模块 必须加上  ./
const msg = require("./msg");
//定义留言板那个文件夹
const STATIC_PATH = "liuyanban";
//读文件的类型不一样 设置对象
const obj = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".png": "image/png",
    ".js": "application;javascript"
}

//创建服务器
let server = http.createServer((req, res) => {
    //在控制台上显示哪些ip地址访问过
    console.log(req.connection.remoteAddress);
    //对req.url就行解析 pathname   以下对接口的操作 
    let obj1 = url.parse(req.url, true);
    //有参数的get请求
    let dt = obj1.query.dt;
    //获取json数据
    let data1 = msg.get();
    //过滤的内容  传参数会用到
    let data2 = data1.filter(item => {
        return dt > item.dt
    });
    res.setHeader("content-type", "application/json;chartset=utf-8");
    if (obj1.pathname == "/getMsg" || url.method == "GET") {
        //获取到全部接口的信息
        let objj = {
            code: 200,
            msg: "获取失败",
            data: msg.get()
        }
        //获取满足条件的接口的信息
        let obj22 = {
            code: 200,
            msg: "获取失败",
            data: data2
        }
        dt ? res.end(JSON.stringify(obj22)) : res.end(JSON.stringify(objj))
    } else { //读文件的操作
        //先找到绝对路径
        let pathName = path.join(__dirname, STATIC_PATH, req.url);
        try {
            //获取后缀名
            let ext = path.extname(req.url)
            //读文件
            let aa = fs.readFileSync(pathName);
            if (obj[ext]) {
                res.setHeader("content-type", obj[ext])
            }
            res.end(aa);
        } catch {
            res.statusCode = 404;
            res.setHeader("content-type", "text/html;charset=utf-8");
            res.end(`${req.url}没有找到`);
        }
    }


});

//监听
server.listen(8088, () => {
    console.log("大人,服务器已经打开,请大人开始表演。。。");

})