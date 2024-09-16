//Array findIndex()

const num = [6, 3, 28, 47, 11];
let index = num.findIndex((value, index, array) => {
    return value > 20;
});

console.log(index);