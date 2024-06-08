/*
Objects
-> a variable that can store multiple data in key-value pairs.

syntax:

const objectName = {
    key1: value1,
    key2: value2,
    ...,
    keyN: valueN
};
 
objectName.key1    //// access property

*/

let marks={
    bangla:80,
    english:79, 
    math:95}

document.write(`Bangla: ${marks.bangla} <br>`);


const student = {
    name: "Tafhim",
    id:12345,
    age: 25,
};

document.write(`Student name: ${student.name} <br>`);


// Access Object Properties:
let price={
    Shirt:800,
    Pant:790, 
   shoe:950}

// 1. Using Dot Notation

document.write(`Price of shirt: ${price.Shirt} <br>`);

// 2. Using Bracket Notation

document.write(`Price of shirt: ${price["Pant"]} <br>`);








/*
 Object Operations:
*/

const employee = {
    name: "Tafhim",
    position: "Officer",
    id:1234,
    salary: 45000,
};

// 1. Modify Object Properties

employee.salary=50000;
document.write(`Employee salary: ${employee.salary} <br>`);

// 2. Add Object Properties
employee.department="Engineering";
document.write(`Employee salary: ${employee.department} <br>`);

// 3. Delete Object Properties
delete employee.position;
console.log(employee);


//Prototypes in JS
/*
JS objects have a special property called prototype.
A javaScript object is an entity having state and behavior (properties and method).

We can set prototype using _ _ proto _ _

*If object & prototype have same method, object’s method will be used.

*/
