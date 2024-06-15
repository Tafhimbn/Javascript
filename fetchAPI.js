// Fetch API
/*
    The fetch API provides an interface for fetching (sending/receiving) resources
    It uses Request and Resource objects.
    The fetch() method is used to fetch a resource (data).

let promise = fetch(url.[option]) 

*/

const url="https://cat-fact.herokuapp.com/facts";

let data = fetch(url);

console.log(data);

const getFacts = async () => {
  console.log("Getting data ......");
  let response = await fetch(URL);
  console.log(response);
  console.log(response);
};


/*
AJAX
AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.
AJAX just uses a combination of:
            A browser built-in XMLHttpRequest object (to request data from a web server)
            JavaScript and HTML DOM (to display or use the data)

*/


/*
JSON:

    JSON stands for JavaScript Object Notation
    JSON is a lightweight data interchange format
    JSON is language independent *
    JSON is "self-describing" and easy to understand

    * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

    JSON Syntax Rules:
        Data is in name/value pairs
        Data is separated by commas
        Curly braces hold objects
        Square brackets hold arrays

*/
 