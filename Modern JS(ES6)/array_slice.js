// Array slice()

/*
The Array slice() method returns selected elements in an array as a new array. It selects from a given start, up to a (not inclusive) given end. 
This method does not change the original array, enabling non-destructive extraction of array segments.

Syntax:
        arr.slice(begin, end);

Parameters:
           begin: This parameter defines the starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.
             end: Parameter specifying the end index for extracting a portion from an array, defaulting to array length if undefined, adjusting for exceeding length.

*/

var num =[1, 2, 3 ,4 , 5, 6];

var result0 = num.slice(1, 4);
console.log("Between Index 1 & 4:"+result0);

var result1 = num.slice();
console.log("Without indexing:"+ result1);

var result2 = num.slice(3);
console.log("With one Index:"+ result2);


