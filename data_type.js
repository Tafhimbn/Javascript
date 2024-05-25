
function data_type() {  // aoid it; write code inside function to avoid global variable conflict


// There are two type of data types:
// i) Primitive data type
//    1) Number
//    2) String
//    3) Boolean
//    4) Undefined
//    5) Null
//    6) BigLnt  ->  represent very large or very small integers beyond the range of the regular number data type.
//    7) Symbol

let age = 25; // number
let nam = "Tafhim"; // string
let Graduated = true; // boolean
let x;  // undefined 
let y = null; // null
let z= BigInt("123"); // BigInt
let sym = Symbol('Hello!')


document.write("age ="+ age + "; type of age:"+typeof(age));
document.write("nam ="+ nam + "; type of nam:"+typeof(nam));
document.write("Graduated ="+ Graduated + "; type of Graduated:"+typeof(Graduated));
document.write("x ="+ x + "; type of x:"+typeof(x));
document.write("y ="+ y + "; type of y:"+typeof(y));
document.write("z ="+ z + "; type of z:"+typeof(z));




// ii) Non-primitive data type
//     1) "Object" represents instance though which we can access members
//     2) "Array" represents group of similar values
//     3) "RegExp" represents regular expression

let A ={ Name: "Tafhim", Age:25, City:"Dhaka"}; // Object

document.write(A);
document.write(A.City);
document.write("Type of A:" + typeof(A));
document.write("Type of Name:" + typeof(Age));

let B = ['Dhaka','Chittagong','Comilla']; // Array -> special type of object
document.write(B);
document.write(B[1]);
document.write("Type of B:" + typeof(B));
document.write("Type of B[2]:" + typeof(B[2]));


} // aoid it; write code inside function to avoid global variable conflict
data_type();