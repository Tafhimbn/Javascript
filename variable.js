
// JavaScript Variables can be declared in 4 ways:
// i)   Automatically
// ii)  Using "var"  - can be declared and accessed globally
// iii) Using "let" - can be declared globally, but its access is limited to the block in which it is declared
//  iv) Using "const"
    
// Variable names are case sensitive; “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names.

var _x=10;  // Variable can be re-declared & updated. A global scope variable.
let _y=15;  // Variable cannot be re-declared but can be updated. A block scope variable.
const _n=3; // Variable cannot be re-declared or updated. A block scope variable.
var _z=_x+_y;
_m=_y/_n;
document.write("Z ="+ _z);
document.write("m ="+ _m);

