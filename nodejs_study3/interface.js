//引入模块
const url = require("url")
const http = require("http");
//引入自定义模块  必须有  ./
const msg = require("./msg")

let server = http.createServer((req, res) => {
    let obj = url.parse(req.url, true);
    // console.log("接口地址", obj.pathname);
    // console.log("查询字符串或者参数", obj.query.dt);


    let data = msg.get();
    let dt = obj.query.dt;
    let data1 = data.filter(function (item) {
        return obj.query.dt > item.dt
    })
    res.setHeader("content-type", "application/json;charset=utf-8")
    if (obj.pathname == "/getMsg" && req.method == "GET") {
        // if (dt) {
        //     res.end(JSON.stringify(dt))
        // } else {
        //     res.end(JSON.stringify(data))
        // }
        dt ? res.end(JSON.stringify(data1)) : res.end(JSON.stringify(data));
    } else {
        res.end("404")
    }
})
server.listen(8088, () => {
    console.log("主人,请尽情吩咐妲己");

})