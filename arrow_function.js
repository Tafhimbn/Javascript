// ES6 fat arrow function
/*
    Arrow functions allow us to write shorter function syntax:

                            let myFunction = (a, b) => a * b;

        Arrow Functions Return Value by Default:
                            let hello = () => "Hello World!";           

*/



let age = () => {
    return 10;
}

let name = () => "Tafhim"

console.log(name());
console.log(age());

let city = () => console.log("Chittagong");

city();
