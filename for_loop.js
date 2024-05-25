function for_loop() {  // Avoid it; write code inside function to avoid global variable conflict



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

} // Avoid it; write code inside function to avoid global variable conflict
for_loop();