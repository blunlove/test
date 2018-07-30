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
async function f() {
    log(await getName());
    log(await getWord());
    log(await getHappy());
}
f();