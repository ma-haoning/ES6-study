//引入fs模块
const fs = require("fs");
//引入path模块
const path = require("path");
//定义一下文件的绝对路径
let fileAbs = path.join(__dirname, "./message.json")
//读文件
let get_message = () => {
    let res = fs.readFileSync(fileAbs, "utf8");
    let arr = JSON.parse(res);
    // console.log(arr);
    return arr;
}

//添加文件
let add_message = (name, content) => {
    let arr = get_message();
    // console.log(arr);

    let obj = {
        id: arr.length + 1,
        name,
        content,
        dt: Date.now()
    }
    // console.log(obj);

    arr.push(obj);

    let str = JSON.stringify(arr);
    console.log(arr);

    fs.writeFile(fileAbs, str, err => {
        if (err) throw err;
        console.log("添加成功");

    });


}
add_message("mhn", 123456);