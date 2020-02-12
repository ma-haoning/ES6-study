//引入fs模块
const fs = require("fs");
//引入path模块
const path = require("path");
//定义一下文件的绝对路径
let fileAbs = path.join(__dirname, "./message.json");
//读文件
const get = () => {
    let res = fs.readFileSync(fileAbs, "utf8");
    let arr = JSON.parse(res);
    // console.log(arr);
    return arr;
}
const insert = (name, content) => {
    let arr = get();
    // console.log(arr);
    //最后一个元素的id+1   给要添加的内容的id在最后一个元素的基础上加上1
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    let obj = {
        id,
        name,
        content,
        dt: Date.now()
    }
    // console.log(obj);

    arr.push(obj);

    let str = JSON.stringify(arr);
    // console.log(arr);

    fs.writeFile(fileAbs, str, err => {
        if (err) throw err;
        console.log("添加成功");

    });


}
const del = id => {
    let arr = get();
    //   普通函数 转 箭头函数
    let a = arr.findIndex(item => item.id == id);
    // console.log(a); //输出 下标
    if (a == -1) {
        console.log("该id不存在或该id已经被删除");
        return;
    }
    //此处的a就是从哪个下标开始
    arr.splice(a, 1);
    //转化为json格式的字符串
    // console.log(arr);

    var str = JSON.stringify(arr);
    //覆盖目标文件的内容
    fs.writeFile(fileAbs, str, err => {
        if (err) throw err;
        console.log("删除成功");

    })
}
module.exports = {
    get,
    insert,
    del,
}