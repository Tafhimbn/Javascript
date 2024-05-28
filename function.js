// Function  --> block of code that performs a specific task, can be invoked whenever needed
/*
 syntax:

  function function_name(parameter1, parameter2,...){
    statement;
      
     return return_value;
 }

 Types Of Functions in Javascript:
  1. Named function
  2. Anonymous function
  3. Nested Functions
  4. Immediately invoked function expression (IIFE)
*/

/*
1.  Named function:
 Syntax:

      var functionName(){
          // Code here
          }
*/    

function multi(num1, num2) {
    return num1 * num2;
  }

let val = multi(2,3); // () operator --> invokes (calls) the function


document.write(val,"<br>");  


/* Variables can be declared in different scopes:

Global Scope
Local (Function) Scope -> Variables declared within a JavaScript function
Block-Level Scope

*/


function cal(x,y){
 sum=  x+y;               // local variable
 document.write(sum,"<br>");
 return sum;
}
cal(5,6);

/*
2.  Nested functions: 
        -> Functions within another function
 Syntax:


  function outer_Function() {
      function nested_Function() {
          .....Function logic here....
        }
      .....Call the nested function....
      nestedFunction();
      .....Rest of the outer function logic....
    }

  .....Call the outer function....

  outerFunction(outer_function_input)(nested_function_input);

*/  

function main_fun(a) {
  function sec_fun(b) {
      return a + b;
  }
  return sec_fun;
}

function str() {
  document.write(main_fun("My name is") (" Tafhim"),"<br>");
}
str();



/*
3. Anonymous Function 
     -> does not have any name associated with it
Syntax:

function() {
    // Function Body
 }

or

( () => {
    // Function Body...
} )();


N>B: n anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. 
*/


var str = function () { 
  console.log("This is anonymous function"); 
}; 

str(); 


// Arrow Function -> compact way of writing a function
/*
syntax:

 let function_name = (argument1, argument2 ,..) => {
         expression                    
}
*/


let sum_arrow=(a,b)=>{
  return a+b;
}

let sum_a = sum_arrow(5,3);
document.write(` Arrow sum ${sum_a} <br>`);


function adder(a,b){
  return a+b;
}

let sum_n = adder(5,3);
document.write(` Normal sum ${sum_n} <br>`);


// a self-executing function


(function () { 
  console.log("This is a self executing funcion!"); 
})(); 

/*
4. Immediately Invoked Function Expressions (IIFE)
      -> Executed immediately after they are defined. 
         They are typically used to create a local scope for variables to prevent them from polluting the global scope.
Syntax:

(function (){ 
// Function Logic Here. 
})();
*/

(function() {
  // IIFE code block
  var localVar = 'This is a local variable.';
  document.write(localVar); // Output: This is a local variable
})();


/*
 Function Recursion 
    -> a function calls itself repeatedly to solve a problem
*/
// recursive function
function counter(count) {
  document.write(count,"<br>");    // display count
  if(count > 1) {           // condition for stopping
      count = count - 1;     // decrease count
      counter(count);        // call counter with new value of count
  } else {
      return;                // terminate execution
  };
};

counter(5); // call or invoke function





















/*

Some common JavaScript library functions are:

Library Function	Description:

console.log()	-> Prints the string inside the quotation marks.
Math.sqrt()	-> Returns the square root of a number.
Math.pow()	-> Returns the power of a number.
toUpperCase()	-> Returns the string converted to uppercase.
toLowerCase()	-> Returns the string converted to lowercase.

*/