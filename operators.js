
// Javascript Arithmetic Operator

var a = 3; 
var b = 5 // 

let c = (100 + 50);     // Addition
let d = b - 2;          // Subtraction
let e = 30 * a;      // Multiplication
let f = 15/a;           // Division
let g = b**2;           // Power
let h = b%a;         // Remainder
a++;                    // Increment 
b--;                    // Decrement 

document.write("100 + 50="+ d +"<br>");
document.write("5-2  ="+ d +"<br>");
document.write("30*3 ="+ e +"<br>");
document.write("15/3 ="+ f +"<br>");
document.write("5**2 ="+ g +"<br>");
document.write(" 5%3 ="+ h +"<br>");
document.write(" a++ ="+ a +"<br>");
document.write(" a-- ="+ b +"<br>");

//  JavaScript Assignment Operator

let m=10;
let n=10;
let o=10;
let p=10;
let q=10;

m+= 5;
n-= 5;
o*= 5;
p%= 5;
q**= 5;

document.write("m+=" + m +"<br>");
document.write("n-=" + n +"<br>");
document.write("o*=" + o +"<br>");
document.write("p%=" + p +"<br>");
document.write("q**=" + q +"<br>");


// JavaScript Comparison Operators


console.log(5 == 5);               // true; same value, same type  
console.log(2 == "2");             // true; same value, different type
console.log("hello" == "Hello");   // false; different values, same type
console.log(2 != 2);               // false; same value, same type
console.log(2 != "2");             // false; same value, different type
console.log(2 != 3);               // true; different value, same type
console.log(2 === 2);              // true; same value, same type
console.log(2 === "2");            // false; same value, same type
console.log(2 !== 2);              // false; same value, different type
console.log(2 !== "2");            // true; same value, different type
console.log("Hello" !== "World");  // true; different value, same type
console.log(3 > 2);                // true
console.log(4 > 4);                // false
console.log(2 > 5);                // false
console.log(3 >= 2);               // true
console.log(4 >= 4);               // true
console.log(2 >= 5);               // false
console.log(2 <= 5);               // true
console.log(4 <= 4);               // true
console.log(3 <= 2);               // false

// JavaScript Logical Operators
let _l = 2;

// Logical AND Operator
console.log((_l < 4) && (4 >= _l));    // true
console.log((_l <= 4) && (2 == 4));   // false
console.log((_l > 4) && (_l == 4));    // false

// Logical OR Operator
console.log((_l < 4) || (4 >= _l));     // true
console.log((_l <= 4) || (2 == 4));    // true
console.log((_l > 4) || (_l == 4));     // false

// Logical NOT Operator
console.log(!true);                   // false
console.log(!false);                  // true
console.log(!(2 < 3));                // false





// JavaScript Bitwise Operators



