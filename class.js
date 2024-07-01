/* Classes in JS

Those objects will have some state (variables) & some behavior (functions) inside it.
Class is a program-code template for creating objects.

class MyClass { 

constructor( ) { ... }

myMethod( ) { ... }

}

let myObj = new MyClass( ) ;

*/

class ToyotaCar {

    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop");
    }
    setBrand (brand){
        this.brand=brand;
    }
}


let Pajaro = new ToyotaCar();
Pajaro.setBrand("Pajaro");
let Premio = new ToyotaCar();
Premio.setBrand("Premio");


/*
    Constructor Method
      
    ->The constructor method is a special method:
            constructor method is called automatically when a new object is created.
            It has to have the exact name "constructor"
            It is executed automatically when a new object is created
            It is used to initialize object properties

    Constructor is used when anything need to add during initialization of Object 
  */
 
class Tata {
    constructor (brand,mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;}
    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop");
    }
    setBrand (brand){
        this.brand=brand;
    }
}

let Alto = new Tata("Alto", 25);


// Inheritance in JS

/*
    => inheritance is passing down properties & methods from parent class to child class.

    class Parent {
    }

    class Child extends Parent {
    }

    *If Child & Parent have same method, child’s method will be used. [Method Overriding]
*/


class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent {}

let obj = new child(); 


class person{
    eat(){
        console.log("Icecream");
    }
    sleep(){  
    }
    work(){
        console.log("Do nothing")
    }
}

class engineer extends person {
    work(){
        console.log("solve problem, build something")
    }
}

let tafhim = new engineer();

//  super Keyword

/*
    => The super keyword is used to call the constructor of its parent class to access the parent's
    properties and methods.

    super( args ) // calls Parent‘s constructor

    super.parentMethod( args )
*/
class employees{
    constructor(name){
        console.log("Enter parent constructor");
        this.department="Software";
        this.name = name;
    }
    eat(){
        console.log("Icecream");
    }
    sleep(){  
    }
    work(){
        console.log("Do nothing")
    }
}

class developer extends employees {
    constructor (name) {
        console.log("Enter child constructor");
        super(name); // to invoke parent constructor 
        console.log("Exit child constructor");
        this.name = name;
        
    }
    work(){
        console.log("solve problem, build something")
    }
}

let tbn = new developer();


// Error Handling

/*
    try-catch

    try {
    ... normal code
    } catch ( err ) { //err is error object
    ... handling error
    }

*/


