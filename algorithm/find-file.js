let fs = require("fs");

let data = fs.readFileSync("word.txt", "utf-8");
let datas = data.split('-----\r\n');
for (let i = 0; i < datas.length; i++) {
    let temp = datas[i].split('\r\n');
    for (let j = 0; j < temp.length; j++) {
        temp[j] = `${i + 1}--${temp[j]}\r\n`;
    }
    fs.appendFileSync("word2.txt", temp.join(''));
}