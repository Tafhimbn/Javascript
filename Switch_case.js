function switch_case() {  // Avoid it; write code inside function to avoid global variable conflict


//  switch-case Statement
//  Syntax:
// switch(expression) {
//         case x:
//           statement
//           break;
//         case y:
//           statement
//           break;
//         default:
//           statement
//       }

let age=15;
let city="Chittagong"
switch(age) {
case (age<18 && city=="Dhaka"):
        document.write("You are eligible .")
break;
case (age>=18 && city=="Dhaka"):
        document.write("Your age is low.")
break;
default:
        document.write("Sorry, You are not eligible.")
}
 



} // Avoid it; write code inside function to avoid global variable conflict
switch_case();



