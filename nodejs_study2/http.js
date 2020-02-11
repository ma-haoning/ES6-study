// 引入核心模块 http
const http = require('http');
const fs = require("fs")

// 创建服务
const server = http.createServer(function (req, res) {
    if (req.url == "/index.html") {
        var htmlStr = fs.readFileSync("./index.html", "utf-8");
        res.end(htmlStr)
    } else {
        res.end("404");
    }

});
// 启动服务
server.listen(8081, function () {
    console.log('尊敬的管理员,服务已启动');
});