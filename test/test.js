const log = console.log.bind(console);
const getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('alun');
        }, 1000);
    })
}
const getWord = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 2000);
    })
}
const getHappy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2333');
        }, 3000);
    })
}
const getMsg = (val) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val);
        }, 1000);
    });
}
const fixedTime = (number) => {
    let str = '00000';
    let temp = str + number;
    return temp.slice(temp.length - 2);
}
async function f() {
    // let times = 5;
    // for (let i = 0;  ; i++) {
    //     let now = new Date();
    //     log(await getMsg(Date.now()));
    // }
    while(true) {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let time = `${fixedTime(hours)}:${fixedTime(minutes)}:${fixedTime(seconds)}`
        log(await getMsg(time));
    }
    // log(await getName());
    // log(await getWord());
    // log(await getHappy());
}
// f();
function s(fn) {
    console.log(1)
    fn(2)
}
s((val) => {
    console.log(val)
})
console.log(3)