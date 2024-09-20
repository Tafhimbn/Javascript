// Destructuring 
/*
The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables.
*/

//  Before ES6:

// assigning object attributes to variables
const person0 = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name0 = person0.name;
let age0 = person0.age;
let gender0 = person0.gender;

console.log(name0); // Sara
console.log(age0); // 25
console.log(gender0); // female


// Using ES6:

// assigning object attributes to variables
const person1 = {
    name1: 'Sara',
    age1: 25,
    gender1: 'female'    
}

// destructuring assignment
let { age1, gender1 } = person1;

console.log(age1); // 25
console.log(gender1); // female


// Destructuring for nested object

const user = {
    id: 339,
    name: "Sakib",
    age: 35,
    education: {
        degree: "Master",
    },
};

const {
    education: {degree:x},
}= user;

/*
 const {education: {degree} = {} } = user;
*/

console.log(x);

// Array Destructuring

const arr0 = ['C++', 'JAVA', 'PYTHON', 'PHP', "JAVASCRIPT"];

const [, a, ,b, ] = arr0;  // destructuring assignment in arrays

console.log(a,b); 

// Nested Array Destructuring

const arr1 = ['C++', 'JAVA', 'PHP', ["JAVASCRIPT", "REACT"], 'PYTHON'];

const [, , ,[,p],q ] = arr1;  // destructuring assignment in arrays

console.log(p,q); 


// Value exchange 
let m =10, n=20;

[m,n] = [n,m];

console.log(m,n);
