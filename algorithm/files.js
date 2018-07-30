//文件遍历
let fs = require('fs');

const base_path = '../vue-element/src';

const getFiles = path => {
  let status = fs.readdirSync(path);
  let array = [];
  for (let i = 0; i < status.length; i++) {
    let temp_path = `${path}/${status[i]}`;
    let isDirectory = fs.lstatSync(temp_path).isDirectory();
    if (isDirectory) {
      array = array.concat(getFiles(temp_path));
    } else if (temp_path.endsWith('.spec.js')) {
      array.push(temp_path);
    }
  }
  return array;
};
console.log(getFiles(base_path));
