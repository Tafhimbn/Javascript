
// JavaScript Variables can be declared in 4 ways:
// i)   Automatically
// ii)  Using "var"
// iii) Using "let"
//  iv) Using "const"
    
// Variable names are case sensitive; “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names.

       var x=10;  // Variable can be re-declared & updated. A global scope variable.
       let y=15;  // Variable cannot be re-declared but can be updated. A block scope variable.
       const n=3; // Variable cannot be re-declared or updated. A block scope variable.
       var z=x+y;
       m=y/n;
       document.write("Z ="+ z);
       document.write("m ="+ m);

