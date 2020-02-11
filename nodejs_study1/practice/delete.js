//引入fs模块
const fs = require("fs");
//引入path模块
const path = require("path");
//定义一下文件的绝对路径
let fileAbs = path.join(__dirname, "./message.json");
//读文件
let get_message = () => {
    let res = fs.readFileSync(fileAbs, "utf8");
    let arr = JSON.parse(res);
    return arr;
}

// let del_message = id => {
//     //先获取数组
//   
//     // console.log(arr);
//     arr.forEach((item, index, arr) => {
//         if (id == item.id) {
//             arr.splice(index, 1);
//             var str = JSON.stringify(arr);
//             //覆盖目标文件的内容
//             fs.writeFile(fileAbs, str, err => {
//                 if (err) throw err;
//                 console.log("删除成功");
//             })
//         }
//     });


// }




let del_message = id => {
    let arr = get_message();
    //   普通函数 转 箭头函数
    let a = arr.findIndex(item => item.id == id);
    console.log(a); //输出 下标
    //此处的a就是从哪个下标开始
    arr.splice(a, 1);
    //转化为json格式的字符串
    console.log(arr);

    var str = JSON.stringify(arr);
    //覆盖目标文件的内容
    fs.writeFile(fileAbs, str, err => {
        if (err) throw err;
        console.log("删除成功");

    })
}

del_message(8);