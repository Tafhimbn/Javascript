// array filter
/* 
The filter() method creates a new array containing elements that satisfy a specified condition.
The filter() method skips empty elements and does not change the original array.

Syntax:
array.filter(callback(element, index, arr), thisValue)

Parameters:

    callback            :The function is to be called for each element of the array.
    element	            :The value of the element currently being processed.
    index(Optional)     : The index of the current element in the array, starting from 0.
    arr	(Optional)      :The complete array on which Array.every is called.
    thisValue (Optional): The context to be passed as this to be used while executing the callback function. 
                        If not provided, undefined is used as the default context.

*/

let age= [24, 33, 16, 40];

let filtered = age.filter((currentValue, index, arr) => {
    console.log(index);
    console.log(arr);
    return currentValue > 18
});

console.log("Eligible ages:" + filtered);

