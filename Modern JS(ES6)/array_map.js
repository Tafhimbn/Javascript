// Array map()
/*
map() method creates a new array by applying a function to each element of the original array.
map() skips empty elements, does not modify the original array.

Syntax: array.map((element, index, array) => { })

Parameters:
            element: It is a required parameter and it holds the value of the current element.
            index  : It is an optional parameter and it holds the index of the current element.
            arr    : It is an optional parameter and it holds the array.


*/

let num = [1,2,3,4,5,6];

let result = num.map((n) => {
    return 2 * n;
});

console.log(num);
console.log(result);