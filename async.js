/*
Synchronous:
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

Asynchronous:
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.

*/

function hello(){
    console.log("Hello!")
}
setTimeout(hello,2000); //timeout

// or
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
},2000) //timeout

console.log("three");
console.log("four");


/*
  Callbacks
       => A callback is a function passed as an argument to another function.
*/
function sum (a,b){ console.log(a+b);}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

/*
Callback Hell
     => Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)

     This style of programming becomes difficult to understand & manage.
*/

function getData(dataId, getNextData){
    //2s
    setTimeout( () => {
        if (getNextData){
            getNextData();
        }
    }, 3000);
}

getData(1, () => {                       // callback hell
    console.log("getting data2..");
    getData(2, () => {
       console.log("getting data3....");
       getData(3,() => {
            console.log("getting data4......");
            getData(4);
        });
    });
});


/*
Promises:
    => Promise is for “eventual” completion of task. It is an object in JS.
       It is a solution to callback hell.

    let promise = new Promise( (resolve, reject) => { .... } )

        *resolve & reject are callbacks provided by JS


A JavaScript Promise object can be:
    Pending  : the result is undefined
    Resolved/Fulfilled : the result is a value (fulfilled)          resolve( result)
    Rejected : the result is an error object              reject( error )

 *Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).
 
Promise Syntax:

    // "Producing Code" (May take some time)

        let myPromise = new Promise(function(myResolve, myReject) {   
                myResolve(); // when successful
                myReject();  // when error
                });

     then() method 
             =>  then() method is used with the callback when the promise is successfully fulfilled or resolved.
                syntax of then() method:
                                        promiseObject.then(onFulfilled, onRejected);
    
    catch() method
             => catch() method is used with the callback when the promise is rejected or if an error occurs.
                syntax of catch() method:
                                        promiseObject.catch(onRejected)
    
*/

const condition = true;

console.log('Task 1');


// promise declaration
const promise_value = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(condition){
            resolve('Task 2');
        } else{
            reject('failed');
        }
    },2000);
});

promise_value
    .then(function(value){
        console.log(value);
    })
    .catch(function(error){
        console.log(error);
    });

console.log('Task 3')




/*
let promise = new Promise ((resolve, reject) => {
// const promise = new Promise (function(resolve, reject) {
    console.log("I am promise");
});

function asyncFunc1() {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        console.log("data1");
        resolve("success");
       }, 4000);
    });
}
function asyncFunc2() {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        console.log("data1");
        resolve("success");
       }, 4000);
    });
}

console.log("fetching data1.....");
let pro1 = asyncFunc1();
pro1.then((res) => {
    console.log(res);
    console.log("fetching data2.....");
    let pro2 = asyncFunc2();
    pro2.then((res) => {
        console.log(res);
    });
});

*/

/*

Async-Await:

    async function always returns a promise.

    async function myFunc( ) { .... }

    await pauses the execution of its surrounding async function until the promise is settled.

*/


/*
IIFE : Immediately Invoked Function Expression
    => IIFE is a function that is called immediately as soon as it is defined.

*/