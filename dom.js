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

txt.textContent = "change element by getElementById() method ";
txt.innerText = "getElementById() method ";

console.log(txt.textContent); // write html file text format
console.log(txt.innerText);  // write element text format
console.log(txt.innerHTML); // write html file text format

txt.style.color="red"; // element style change 

// getElementsByClassName()

console.log(document.getElementsByClassName("item"));
let item = document.getElementsByClassName("item");
for(let i=0; i<item.length;i++){
    item[i].style.color = 'green';
}

let itemUL = document.getElementById("items");
console.log(itemUL);
let items = itemUL.getElementsByClassName("item");
console.log(items);
for(let i=0; i<items.length-1;i++){
    items[i].style.color = 'red';
}

// getElementsByTag()

let tg = document.getElementsByTagName("i");
console.log(tg);


// Query Selector   --- use instead of Jquery 
let qs = document.querySelector('.cls');
console.log(qs);



let it = document.querySelector('.cls:last-child');
it.style.color = "yellow";

let its = document.querySelectorAll('.cls:last-child');
console.log(its);

let it2 = document.querySelectorAll('.cls:nth-child(2)');
console.log(it2);

for (let i of its){
    i.style.color="pink";
}


// Parent/child relation



