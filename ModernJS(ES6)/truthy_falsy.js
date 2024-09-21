// truthy falsy
/*
Truthy Values: A value is considered truthy if, when coerced to a boolean, it evaluates to true. 
               Examples of truthy values include non-empty strings, numbers other than 0, arrays, objects, and functions.
Falsy Values: Values that are not true are considered False values. 0, null, undefined, NaN, false(Boolean value), and an empty string ("").
*/

var myVar = [];

if (!myVar) {
    console.log("It is truthy.");
} else {
    console.log("It is falsy");
}