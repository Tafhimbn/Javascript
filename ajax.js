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
    /*.open(method,url,async)
                                  method: the type of request: GET or POST
                                     url: the server (file) location
                                  async: true (asynchronous) or false (synchronous)
    */
    //xhr.open("GET",url + Math.random());  // To avoid cached result, add a unique ID to the URL
  
    // send request
    xhr.send();
    /* 
      send()	Sends the request to the server (used for GET)
      send(string)	Sends the request to the server (used for POST)
    */
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



  function loadData2(url,callback_function){
    // create a new request 
      const xhr = new XMLHttpRequest();
  
  
    // When response arrived
      xhr.onload = function(){
          callback_function(this);
      }
      
  
    // prepare request - methods: GET, POST, PUT, PATCH DELETE, OPTIONS
  
      xhr.open("GET",url);   
      /*.open(method,url,async)
                                    method: the type of request: GET or POST
                                       url: the server (file) location
                                    async: true (asynchronous) or false (synchronous)
      */
      //xhr.open("GET",url + Math.random());  // To avoid cached result, add a unique ID to the URL
    
      // send request
      xhr.send();
      /* 
        send()	Sends the request to the server (used for GET)
        send(string)	Sends the request to the server (used for POST)
      */
  }



function loadData3(){
  // create a new request 
  const xhr = new XMLHttpRequest();


  // When response arrived
  xhr.onload = function(){
      const container = document.getElementById("ajax2");
      container.innerHTML = xhr.responseText;
      container.innerHTML = this.responseText;
     
     //console.log(this.getAllResponseHeaders());
     console.log(this.getResponseHeader("etag"));
     

  };  
  

  // prepare request - methods: GET, POST, PUT, PATCH DELETE, OPTIONS

  xhr.open("GET","./data/ajax_data.txt",);

  // send request
  xhr.send();

}



function sendRequest(method, url, data) {
  
  const promise = new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      //handle application error
      if(this.status >= 400) {
        reject(`There was an application error and the response status is ${this.status} .`);
         }
      resolve(this.response);
    };
    
    xhr.onerror = function () {
      reject("There was an error.");
    }

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.send(data);
});

return promise;

}


function getData() {

  sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1").then(responseData => {
    console.log(responseData);
  
  })
  .catch((err) => {
    console.log(err);
  });

}


function sendData() {
  sendRequest("POST","https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  ).then((responseData) => {
    console.log(responseData);

  });
}



const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);







/* if you want to call all function individually  

Function getData() {

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    console.log(this.responseText); // JSON String
    console.log(JSON.parse(this.responseText)); // Object
    console.log(JSON.parse(this.responseText).userId);

   // console.log(this.response);  // when used xhr.responseType = "json"
  };

  xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
  
  // xhr.responseType = "json";

  xhr.send();
}

*/