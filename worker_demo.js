// Create a Web Worker File

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);  // used to post a message back to the HTML page.
  setTimeout("timedCount()",500);
}

timedCount();