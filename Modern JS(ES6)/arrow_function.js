// ES6 fat arrow function
/*
    Arrow functions allow us to write shorter function syntax:

                            let myFunction = (a, b) => a * b;

        Arrow Functions Return Value by Default:
                            let hello = () => "Hello World!";           

*/

// With Arrow Function:

let age = () => {
    return 10;
}

// Arrow Functions Return Value by Default:
let name = () => "Tafhim"

console.log(name());
console.log(age());

let city = () => console.log("Chittagong");

city();


// Arrow Function With Parameters:

let c_area = r => 2*r*3.14159;
console.log(c_area(10)+" sq. m");


let r_area = (l,w) => l*w;
console.log(r_area(10,10)+" sq. m");


