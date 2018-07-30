const exchange = (array, number1, number2) => {
    if(number1 == number2) return;
    let temp = array[number1];
    array[number1] = array[number2];
    array[number2] = temp;
}

const sort = (array, begin, end) => {
    if (begin >= end) return;
    let [_begin, _end] = [begin, end];
    while (begin != end) {
        while (array[end] >= array[_begin] && end > begin) end--;
        while (array[begin] <= array[_begin] && end > begin) begin++;
        exchange(array, begin, end);
        // console.log(array)
    }
    exchange(array, _begin, begin);
    // console.log(array)
    sort(array, _begin, begin - 1);
    sort(array, begin + 1, _end);
}

const bearkSort = (array) => {
    // console.log('begin', array)
    return sort(array, 0, array.length - 1);
}

let rightTime = 0;
let wrongTime = 0;
setInterval(() => {
    let array = [];
    for(let i = 0; i < 10; i++) {
        array.push(parseInt(Math.random()*1000));
    }
    bearkSort(array);
    // console.log(array)
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) {
            wrongTime++;
            break;
        };
        if(i == array.length - 2) {
            rightTime++;
            break;
        };
    }
    console.log(`rightTime: ${rightTime}, wrongTime: ${wrongTime}`);
}, 100)