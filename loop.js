function loop() {  // Avoid it; write code inside function to avoid global variable conflict



// JavaScript supports different kinds of loops:
// i)   for - loops through a block of code a number of times
// ii)  for/in - loops through the properties of an object
// iii) for/of - loops through the values of an iterable object
// iv)  while - loops through a block of code while a specified condition is true
// v)   do/while - also loops through a block of code while a specified condition is true


// for loop 

// for (expression 1; expression 2; expression 3) {
//   code block to be executed
// }

for (let i=0;i<=5;i++) {
    document.write("It is loop no. "+ i)
    document.write("<br>")
}


// Infinite loop -> A loop that never end
// for (let i=0;i=<5;i++) {
//     document.write("It is loop no. "+ i)
//     document.write("<br>")
// }


// For in Loop
// Syntax:
  // for (key in object) {
  //     statement 
  // }

const n = [68, 43, 26, 6, 9];

let sum = 0;
for (let x in n) {
  sum += n[x];
}
console.log("Sum of Array =" + sum);


let student_info={name:"Tafhim", age:25, cgpa:4.00,graduated:true};

for (let sec in student_info){
  document.write( "Section=", sec, "; Value= ", student_info[sec] ,"<br>");
}

let lan = ['C++', 'Python', 'Javascript'];
for (let i in lan){
    document.write( lan[i] +"<br>");
    i+=1;
}

// For of loop
// Syntax:
// for (variable of iterable) {
   // Statement
// }

let str = "Tafhim";
let size = 0;
for (let i of str){  // variable of iterable
  console.log("str=",i);
  size++;
}
console.log("String Size = "+ size);


// while loop
// Syntax:
  // while (condition) {
  //   statement
  // }


let i=1;

while (i<=5){
  console.log("i=",i);
  i++;
}



// do-while loop
// Syntax:
  // do{
  //   statement   
  // } while (condition);


let a=15;

do {
  console.log("a=",a);
  a++;
} while (a<=5);



} // Avoid it; write code inside function to avoid global variable conflict
loop();