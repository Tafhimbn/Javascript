// Function  --> block of code that performs a specific task, can be invoked whenever needed

// syntax:

//  function function_name(parameter1, parameter2,...){
//     statement;
//      
//     return return_value;
// }
//
//// function_name();     

function multi(num1, num2) {
    return num1 * num2;
  }

let val = multi(2,3); // () operator --> invokes (calls) the function


document.write(val);  
// () operator --> invokes (calls) the function


// Functions Used as Variable Values

// Local Variables -> Variables declared within a JavaScript function



function cal(x,y){
 sum=  x+y;               // local variable
 document.write(sum);
 return sum;
}
