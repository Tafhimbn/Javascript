// Web Worker API
/*    -> a web API that allows us to run JavaScript code in the background thread.

Whenever the web page loads in the browser, it becomes interactive after every <script> tag loads in the browser. 
Web workers allows users to interact with the web page without loading the whole JavaScript code in the browser.
It increases the response time of the web page.

*/

let w = 0;

function startWorker() {
    if(typeof(w) === "undefined") {
        // if w worker is not define , create worker
        w = new Worker("demo ");    
    } else if (typeof(w) !== "undefined") {
      
    } else {
            alert("Sorry, Your browser dose not support web worker!");
        }
}
