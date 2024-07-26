// AJAX

/*
AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.
AJAX just uses a combination of:
            A browser built-in XMLHttpRequest object (to request data from a web server)
            JavaScript and HTML DOM (to display or use the data)
            
    Read data from a web server - after the page has loaded 
    Update a web page without reloading the page 
    Send data to web server - in the background 


AJAX Process:
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

i. Creating an XMLHttpRequest object:

            xhr_variable = new XMLHttpRequest();


ii. Define a Callback Function:

            xhr_variable.onload = function() {
                                               // What to do when the response is ready
                }   

iii. Send a Request

            xhr_variable.open("GET", "ajax_data.txt");
            xhr_variable.send();


*/



function loadData1(){
    // create a new request 
    const xhr = new XMLHttpRequest();


    // When response arrived
    xhr.onload = function(){
        const container = document.getElementById("ajax0");
        container.innerHTML = xhr.responseText;
      // container.innerHTML = this.responseText;

    };  
    

    // prepare request - methods: GET, POST, PUT, PATCH DELETE, OPTIONS

    xhr.open("GET","./data/ajax_data.txt",);

    // send request
    xhr.send();

}


// Multiple callback

function loadData2(url,callback_function){
    // create a new request 
    const xhr = new XMLHttpRequest();


    // When response arrived
    xhr.onload = function(){
        callback_function(this);
    }
    

    // prepare request - methods: GET, POST, PUT, PATCH DELETE, OPTIONS

    xhr.open("GET",url);

    // send request
    xhr.send();

}

const url1 = "./data/ajax_data1.txt"
const url2 = "./data/ajax_data2.txt"

function callback1(xhr){
    const container = document.getElementById("ajax1");
    ajax1.innerHTML = xhr.responseText;
  }

function callback2(xhr){
    const container = document.getElementById("ajax1");
    ajax1.innerHTML = xhr.responseText;
  }

