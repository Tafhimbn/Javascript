function string(){ // Avoid it; write code inside function to avoid global variable conflict



// Javascript String
// String can be declare by Single Quotes/ Double Quotes/ Constructor


let str="This is String"

document.write(str, "<br>")

document.write( "length of String: ", str.length, "<br>");

for (let i=0;i<str.length;i++){

document.write( "String ",i,": ", str[i], "<br>");
}


// Template Literals ---> a way to have embedded expressions in strings

let info={nam:"Tafhim",cgpa:4.00, pass:2020}


document.write(`Hello ${info.nam} ! You are graduated in ${info.pass} with CGPA ${info.cgpa} out 4.00. <br>`)



// String Interpolation  --> to create strings by doing substitution of placeholders
//


// String Syntax: `string text ${expression} string text`


// String methods -> These are built-in function to manipulate a string

// str.toUpperCase()
let name = "  Tafhim Bin Nasir  "

document.write(name.toUpperCase(),"<br>")

// str.toLowerCase()
document.write(name.toLowerCase(),"<br>")

// str.trim() --> it removes whitespace from Starting & End
document.write(name.trim( ),"<br>")

document.write(name,"<br>") 

// str.slice(start,end?)  --> returns part of string

let str2 = "Hello";
document.write(str2.slice(0,3),"<br>");

// str1.concat(str2) // joins str2 with str1
let str3 = "Tafhim"
let str4 = " Bin Nasir"

document.write(str3.concat(str4),"<br>");

// srt.replace(searchVal,newVal)

let str5 = "Bad"
document.write(str5.replace("a","e"),"<br>");

// str.charAt(idx) -> to find index of any character
let str6 = "Bangladesh"
document.write(str6.charAt(5),"<br>");


// sting is immutable (data can't be changed)
let str7="Fahim";
str7.replace("Fahim","Tafhim");
document.write(str7,"<br>");


} // Avoid it; write code inside function to avoid global variable conflict
string();