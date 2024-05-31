// <style> tag connect HTML with CSS
// Syntax: <head> 
//             <link rel="stylesheet" href="style.css">  
//         </head>
// <script> tag connects HTML with JS
// Syntax: <body> 
//             <script src="javascript.js"></script>  
//         </body>


/*   DOM -> Document Object Model
               |       |       |-> HTML tree structure is the model
               |       |-----> HTML elements are Object
               |----> HTML page is a Document 
->  Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents
    when a web page is loaded, the browser creates a DOM of the page
 
    window -> document -> html -> head -> meta
                           |       |-> meta
                           |       |-> title
                           |       |-> link
                           |-> body -> div -> img
                                    |      |-> h1
                                    |      |-> p
                                    |      |-> div 
                                     -> script

*/

/* DOM Manipulation */

console.dir(typeof(document));
console.dir(document.title);
document.title = "Play with DOM";
console.dir(document.title);
console.log(document.head);
console.log(document.all); // print all elements of html page


/*  Methods of Document Object Model

1. write("string") -> writes the given string on the document.
2. writeln("string") -> writes the given string on the document with newline character at the end.
3. getElementById() -> returns the element having the given id value.
4. getElementsByName() -> returns all the elements having the given name value.
5. getElementsByTagName() -> returns all the elements having the given tag name.
6. getElementsByClassName() -> returns all the elements having the given class name.

*/

// getElementById()
console.log(document.getElementById("str"));
let txt = document.getElementById("str");

txt.textContent = "change element by getElementById() method "
txt.innerText = "getElementById() method "



/* DOM Manipulation */

