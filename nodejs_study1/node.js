// // 引入http模块
// const http = require('http');

// // 创建服务
// const server = http.createServer(function (req, res) {
//   console.log(`来自${req.connection.remoteAddress}的客户端在${new Date().toLocaleTimeString()}访问了本服务器`);
//   res.end(`<h1>hello world! very good!!</h1> <p>${req.connection.remoteAddress}</p>`);
// });
// // 启动服务
// server.listen(8081, function () {
//   console.log('服务器启动成功，请在http://localhost:8081中访问....');
// });


//readFile  默认是异步
const fs = require("fs");
const path = require("path")
fs.readFile(path.join(__dirname, "01.js"), "utf8", (err, data) => {
  if (err) throw err;
  //Buffer格式转化为字符串格式
  console.log(data);
  // console.log(path.basename("a/a.txt"));
  // console.log(path.parse(path.join(__dirname, "./01.js")));
  // console.log(__filename); //当前的node.js的文件的绝对地址
  // console.log(__dirname); //当前node.js的上层文件夹的绝对地址  dirname是目录名的意思  也就是文件夹
  //path.join()  绝对地址的拼接
  //path.basename()  当前文件 由文件名和文件的扩展名构成
  //path.parse()  //把一个绝对路径下的文件  解析成个对象  包括  根目录 目录 文件的最后一级  扩展名和最后一级文件名


});