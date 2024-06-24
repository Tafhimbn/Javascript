// Create a Web Worker File

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);  // used to post a message back to the HTML page.
  setTimeout("timedCount()",500);
}

timedCount();


/*
postMessage() is used to send data locally between the Window objects and does not generate an HTTP request to send data.

syntax :
         targetWindow.postMessage(message, targetOrigin);

targetWindow -> A reference to the window or an iframe to which you want to send the message.
message      -> The data or message you want to send. This can be a string, object, or any serializable data.
targetOrigin -> The target domain or origin to which the message should be sent. 

*/