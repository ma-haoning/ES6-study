const http = require("http");
const fs = require("fs")
const path = require("path")
let STATIC_path = "nodejs_study3"
let obj = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8"
}
//创建服务
const server = http.createServer((req, res) => {
    try {
        //响应并传回来数据
        let filePath = path.join(__dirname, STATIC_path, req.url);
        let pathName = path.extname(req.url);
        //这里设置的绝对路径下的文件夹名  意思是  如果index.html文件中有index.css  index.css肯定有个引入的路径才可以到index.html中  这时这个路径就会去重新读取文件  这个路径就是req.url
        let a = fs.readFileSync(filePath, "utf8");
        if (obj[pathName]) {
            res.setHeader("content-type", obj[pathName]);
            console.log(obj[pathName]);

        }
        res.end(a);
    } catch (err) {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8")
        res.end(`${req.url}找不到`);

    }


})
//监听
server.listen("8088", () => {
    console.log("亲爱的管理员,您需要的服务器已经开启啦。。。");

})