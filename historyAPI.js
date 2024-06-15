// Web History API
/*
    history API allows us to access the browser’s history.
    It can be used to navigate through the history.
    There are just a few methods and a property that you need to know about:

    back()    −> This method navigates back to the previous page in the history.
    forward() −> This method navigates forward to the next page in the history.
    go()      −> This method navigates to a specific page in the history. The number that you pass to the go() method is the relative position of the page that you want to navigate to. For example, to navigate to the previous page in the history, you would pass -1 to the go() method.
    length    −> This property returns the length of the history list. It tells us the number of pages that have been visited by the user.

*/

function historyback_function(){
    window.history.back();
}

function historygo_function(){
    window.history.go(-2);
}
function historyforward_function(){
    window.history.forward();
}