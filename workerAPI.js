// Web Worker API
/*    -> a web API that allows us to run JavaScript code in the background thread.

Whenever the web page loads in the browser, it becomes interactive after every <script> tag loads in the browser. 
Web workers allows users to interact with the web page without loading the whole JavaScript code in the browser.
It increases the response time of the web page.

*/

let w ;

function startWorker() {

    if(typeof(Worker) !== "undefined") {   // Check Web Worker Support
        // check worker available or not
         
        // if w worker is not already defined; Create a Web Worker Object
     if (typeof(w) == "undefined") {
        // create a new worker called 'w'
         w = new Worker("worker_demo.js");  
     }
      
     // listening for worker events/messages
     w.onmessage = function (event){  // The onmessage event occurs when a message is received through an event source.
        console.log(event.data);
        document.getElementById("worker_data").innerHTML = event.data;
     };
    } else {
            alert("Sorry, Your browser dose not support web worker!");
        }
}


function stopWorker(){   // Terminate a Web Worker
    if(typeof(Worker) !== "undefined") { 
        w.terminate();
        w= undefined;  // to reuse the Web Worker
    } else {
            alert("Sorry, Your browser dose not support web worker!");
        }

}
