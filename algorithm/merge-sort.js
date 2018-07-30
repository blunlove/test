const sort = (left, right) => {
    if (left.length == 0) return right;
    if (right.length == 0) return left;
    let array = [];
    let index = { left: 0, right: 0 }
    for (let i = 0; i < left.length + right.length; i++) {
        let temp = left[index.left] > right[index.right];
        temp ? array.push(right[index.right]) : array.push(left[index.left]);
        temp ? index.right++ : index.left++;
        if (index.right == right.length) return array.concat(left.slice(index.left));
        if (index.left == left.length) return array.concat(right.slice(index.right));
    }
}

const divide = (array) => {
    if (array.length <= 1) return array;
    let [main_array, middle_index] = [[], parseInt(array.length / 2)];
    let [left_array, right_array] = [array.slice(0, middle_index), array.slice(middle_index)];
    return main_array.concat(sort(divide(left_array), divide(right_array)));
}

const isRight = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        };
        if (i == array.length - 2) {
            return true;
        };
    }
}
let rightTime = 0;
let wrongTime = 0;
setInterval(() => {
    let array = [];
    let array_size = parseInt(Math.random() * 10 + 2);
    for (let i = 0; i < array_size; i++) {
        array.push(parseInt(Math.random() * 1000));
    }
    console.log(array);
    array = divide(array);
    console.log(array)
    isRight(array) ? rightTime++ : wrongTime++;
    console.log(`rightTime: ${rightTime}, wrongTime: ${wrongTime}`);
}, 500)