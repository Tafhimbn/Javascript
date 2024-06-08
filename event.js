/* Event 
  The change in the state of an object is known as an Event
  Events are fired to notify code of "interesting changes" that may affect code execution

        Mouse events (click, double click etc.)
        Keyboard events (keypress, keyup, keydown)
        Form events (submit etc.)
        Print event & many more

*/

// Event Handling in JS
/*
    node.event = ( ) => {
    //handle here
    }

    btn.onclick = ( ) => {
    console.log(“btn was clicked”);
    }
*/
let btn1=document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
};

let p1=document.querySelector(".p1");

p1.onmouseover = () => {
    console.log("You are inside red rectangle.");
};


// Event Object
/* 
    It is a special object that has details about the event.

    All event handlers have access to the Event Object's properties and methods.

    node.event = (e) => {
    //handle here
    }

    e.target, e.type, e.clientX, e.clientY

*/
let btn2=document.querySelector("#btn2");

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};