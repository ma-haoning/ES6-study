//1.fs模块readFile方法  异步  第一个参数文件的路径  第二个参数编码格式 第三个参数是回调函数
//先引入在调用
const fs = require("fs"); //const常量一般是大写的 这里的fs小写是因为习惯性的小写   
// fs.readFile("01.js", (err, data) => { //err必须在前面 语法格式规定
//     if (err) throw err
//     console.log(data.toString()) //如果不加编码格式传来的数据会是Buffer格式的数据
// }); //如果不加编码格式  utf8 ，可以在data后面加上  toString()方法  转化为字符串格式的数据



//2.fs模块的readFileSync方法 syne 同步的意思   同步不需要回调函数
// let res = fs.readFileSync("01.js", "utf8");
// console.log(res);



//3.fs模块的writeFile方法 覆盖模式  需要回调函数  第一个参数是要覆盖的文件路径 ， 第二个参数覆盖之后的内容， 第三个参数编码格式  默认utf8  可以省略，  第四个参数回调函数  就 err一个参数  
// fs.writeFile("./a.txt", "我成功啦，亲爱的", (err) => {
//     if (err) throw err
//     console.log("覆盖成功");
// })




//4.fs模块的appendFile方法  追加模式   需要回调函数  第一个参数是要追加的文件的路径,第二个参数是要追加的内容,第三个参数是编码格式 默认是utf8  可省略,第四参数是回调函数  就err一个参数
// fs.appendFile("./a.txt", "\n我是你爸爸哦", err => {
//     if (err) throw err;
//     console.log("追加文件成功");
// })



//5.路径问题   __dirname的意思是目录名  也就是说当前的文件（本文件）的上层文件夹的名字    目录名的绝对地址
//          __filename的意思是文件名  也就是说当前的文件（本文件）的绝对地址
//const path = require("path"); path.basename() 这个是当前（本文件）的文件名+扩展名
//                    path.join("","","","") 这是拼接路径  参数是根目录 目录路径 文件名 拓展名
//                    path.parse()  把一个绝对路径下的文件 分成个对象  root dir base ext name
//                                       根目录 目录路径 文件名和拓展名  拓展名 文件名
const path = require("path");
// console.log(path.parse(path.join(__dirname, "./a.txt")));
let fileName = path.join(__dirname, "./a.txt")
fs.appendFile(fileName, "\n我是你爸爸0000000000000000哦", err => {
    if (err) throw err;
    console.log("追加文件成功");
    console.log(fileName);
})