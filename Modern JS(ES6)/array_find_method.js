// Array.prototype.find()
/*
The find() method returns the value of the first array element that satisfies the provided test function.

Syntax:  array.find(function(currentValue, index, arr), thisValue)

Parameters:
    function(currentValue, index, arr): A function to execute on each value in the array until the first element satisfying the condition is found. 
                                        It takes three parameters:
       
        currentValue     : The current element being processed in the array.
        index (optional): The index of the current element being processed in the array.
        arr (optional)  : The array find() was called upon.
    
        thisValue (optional): A value to use as this when executing the callback function.
*/

// Input array contain some elements.
let num_array = [-10, -0.20, 0.30, -40, -50];

// Method (return element > 0)
let found = num_array.find(function (currentValue){
    return currentValue > 0;
});

// Printing desired values.
console.log(found);





/*


var count = () => console.log("Counting...");   // Arrow Functions


var result = numbers.find(function (currentValue, currentIndex, obj){
    count();
    return currentValue > 4;
});

console.log(result);
*/


