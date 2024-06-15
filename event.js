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

    drawback: HTML code will become bulky 
*/
let btn1=document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
};

let p1=document.querySelector('.p1');

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

    example: event_node.target,  event_node.type,  event_node.clientX,  event_node.clientY

    drawback: only one function can be handle at time
*/
let btn2=document.querySelector("#btn2");

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};


// Event Listener
/*

node.addEventListener( event, callback )
node.removeEventListener( event, callback )

*Note : the callback reference should be same to remove;
          here callback is event handler

=> multiple event Listener can be created

*/

let btn3=document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    console.log("Button3 was clicked")
});


let p2=document.querySelector('.p2');

p2.addEventListener("mouseover",  mOver => {
    mOver.target.style.backgroundColor= "green"; 
    mOver.target.innerText="Thank You! 😊";   
    console.log("Mouse over");
});

p2.addEventListener("mouseout",  mOut  => {
    mOut.target.style.backgroundColor= "red"; 
    mOut.target.innerText = "Mouse Over Me";
    console.log("Mouse out");
 });


btn3.addEventListener("click", () => {
    console.log("Button3 was clicked-handler 1")
});

const handler3 = () => {
    console.log("Button3 was clicked-handler 2")
};
btn3.addEventListener("click",handler3 );


btn3.addEventListener("click", () => {
    console.log("Button3 was clicked-handler 3")
});
// will remove handler 2
btn3.removeEventListener("click",handler3 );


// for more: https://developer.mozilla.org/en-US/docs/Web/Events