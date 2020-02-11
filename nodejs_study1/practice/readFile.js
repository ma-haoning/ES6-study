//引入fs模块
const fs = require("fs");
//引入path模块
const path = require("path");
//定义一下文件的绝对路径
let fileAbs = path.join(__dirname, "./message.json")
let res = fs.readFileSync(fileAbs, "utf8");
// console.log(res);
let arr = JSON.parse(res);
console.log(arr);