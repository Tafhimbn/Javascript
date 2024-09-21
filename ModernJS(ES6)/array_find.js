// Array.prototype.find()
/*
The find() method returns the value of the first array element that satisfies the provided test function.

Syntax:  array.find(function(currentValue, index, arr), thisValue)

Parameters:
    function(currentValue, index, arr): A function to execute on each value in the array until the first element satisfying the condition is found. 
                                        It takes three parameters:
       
        currentValue    : The current element being processed in the array.
        index (optional): The index of the current element being processed in the array.
        arr (optional)  : The array find() was called upon.
    
        thisValue (optional): A value to use as this when executing the callback function.
*/

// Input array contain some elements.
let num_array = [-10, -0.20, 0.30, -40, -50];

// Method (return element > 0)
let found = num_array.find(function (currentValue){
    return currentValue;
});

// Printing desired values.
console.log(found);


// example 2: find higher value
let num_array1 = [2, 7, 8, 9];
let found1 = num_array1.find(function (element) {   // Provided testing method (return element > 4).
    return element > 5;
});
console.log(found1);                                // Printing desired values.



// example 2: find even value
function isEven(element) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven = randomArray.find(isEven);
  console.log("1st Even Value: "+ firstEven); // 8
  
  // using arrow operator
  let firstOdd = randomArray.find((element) => element % 2 == 1);
  console.log("1st Odd Value: "+ firstOdd); // 1
