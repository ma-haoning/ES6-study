//引入核心模块fs模块
const fs = require("fs");
//引入核心模块path模块
const path = require("path");

//定义一下database/user.json的绝对地址
const FILE_PATH = path.join(__dirname, "../database/user.json");
//定义一个函数 获取databas/user.json的数据
const get = () => {
    let read_file = fs.readFileSync(FILE_PATH, "utf-8");
    // console.log(read_file);
    //把字符串转化为数组  JSON.parse
    let arr = JSON.parse(read_file);
    // console.log(arr);
    //把得到的数组返回出去 下面的添加数据会用到
    return arr;
}
//定义一个函数 添加数据
const add = (name, pwd, avatarUrl) => {
    //获取json文件下的数据
    let arr = get();
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    //定义一个对象
    let obj = {
        id,
        name,
        pwd,
        avatarUrl
    }
    //把这个对象添加到数组的后面
    arr.push(obj);
    //把所得到的新数组覆盖模式添加到json文件下
    fs.writeFileSync(FILE_PATH, JSON.stringify(arr));
}

// add("mhnn", 1232, "cc")
//导出get和add函方法
module.exports = {
    get,
    add
}