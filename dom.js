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

1. write("string")                      -> writes the given string on the document.
2. writeln("string")                    -> writes the given string on the document with newline character at the end.
3. getElementById("ID")                 -> returns the element having the given id value.
4. getElementsByName()                  -> returns all the elements having the given name value.
5. getElementsByTagName("Tag")          -> returns all the elements having the given tag name.
6. getElementsByClassName("class_name") -> returns all the elements having the given class name.
*/

// getElementById()
console.log(document.getElementById("str"));
let txt = document.getElementById("str");

/*
Properties:
    tagName : returns tag for element nodes
    innerText : returns the text content of the element and all its children
    innerHTML : returns the plain text or HTML contents in the element
    textContent : returns textual content even for hidden elements

*/

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

/* document.querySelector(“#myId / .myClass / tag”) //returns first element
  document.querySelectorAll(“#myId / .myClass / tag”) //returns a NodeList
*/

let qs = document.querySelector('.cls');
console.log(qs);

let it = document.querySelector('.cls:last-child');
it.style.color = "yellow";

let its = document.querySelectorAll('.cls:last-child');
console.log(its);

let it2 = document.querySelectorAll('.cls:nth-child(2)');
console.log(it2);
/*  
  Style:
    node.style 
    node.style.color="color_name";
    node.style.backgroundColor="color_name"; 
    node.style.fontsize="100px"; 
*/
for (let i of its){
    i.style.color="pink";
}

/* --------> DOM Traversing  <---------
    Parent/child relation  
*/

const dada = document.querySelector('.grandfather');
const baab = dada.children;
//const chele = baab[1].children;
const chele = dada.querySelectorAll('.child');
console.log(chele);

/* reverse order */
// const chele = document.querySelector('.child');
// const baab = chele.parentElement;
// console.log(baab);
// const dada = chele.closest('.grandfather');
// console.log(dada);

/* parallel  order */
// const chele_1 = document.querySelector('.child');
// const chele_2 = chele_1.nextElementSibling;
// const chele_3 = chele_2.nextElementSibling;
// chele_2.style.color = "red";

/* ----> DOM Manipulation <------

  Attributes:
    getAttribute( attr)            //  to get the attribute value
    setAttribute( attr, value )    //  to set the attribute value
*/

let division = document.querySelector('div');
console.log(division);

let id = division.getAttribute('id');
console.log(id);

// creating and element
const divElement = document.createElement('div'); // create element
divElement.classname = 'red'; //creating class of this element

divElement.setAttribute('id','red'); // adding attribute of this element
divElement.setAttribute('title','Red div');


/* Insert Elements
    node.prepend( el )     //adds at the start of node (inside)
    node.before( el )      //adds before the node (outside)
    node.after( el )       //adds after the node (outside)
*/
// add element dynamically 
const container = document.querySelector('.classA'); // use "." before class
// const h2Element = container.querySelector('h2');  
// container.insertBefore(divElement,h2Element);   
// "in_which_element".insertBefore("insert_element","before_which_element");

container.appendChild(divElement); // add only html element in last part of element
// container.append(divElement); // add text/html element in last part of element


/*
Delete Element
    node.remove( ) //removes the node

*/



