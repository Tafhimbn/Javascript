
// Conditional statement
// i) if
// ii) else if 
// iii) switch




// if-else statement

let age=15;
let city="Dhaka"
if (age>=18 && city=="Dhaka")
{
   document.write("You are eligible .")
}
else if(age<18 && city=="Dhaka")
{
document.write("Your age is low.")
}
else
{
document.write("Sorry, You are not eligible.")
}

document.write("<br>");


// Short Hand If...Else (Ternary Operator) or compact 
// syntax: variable = (condition) ? expressionTrue : expressionFalse;

age>=18 ? document.write("adult") : document.write("not adult");
