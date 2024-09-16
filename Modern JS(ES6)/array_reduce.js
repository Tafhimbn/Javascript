// Array Reduce() method
/*
Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a single output value. 
It takes an initial value and processes elements from left to right, reducing the array to a single result.

Syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

Parameters:

accumulator/total	       :Specifies the initial value or previously returned value of the function	(Required)
             currentValue  :Specifies the value of the current element (Required)
            currentIndex   :Specifies the array index of the current element	(Optional)
            arr	           :Specifies the array object the current element belongs to (Optional)

*/

var num = [1, 2, 3, 4, 5, 6];

var result = num.reduce((preValue, currentValue) => {
    return preValue + currentValue;
}, 0);

console.log(result);


// -------- Subtracting Numbers in Array ---------

const numbers = [1800, 50, 300, 20, 100];

// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100 = 1330

let difference = numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
console.log(difference);



const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500  = 2700
let remaining = expenses.reduce((accumulator, currentValue) => accumulator - currentValue, salary);
console.log(remaining);


// ----- Remove Duplicate Items from Array ----

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueAgeGroup = ageGroup.reduce((total, currentValue) => {
  if (total.indexOf(currentValue) == -1) {                        // indexOf() method returns -1 if the value is not found.
    total.push(currentValue);
  }
  return total;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]