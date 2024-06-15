/* JS Web APIs 
   API stands for Application Programming Interface.
    There are different types of web APIs:
        Browser API (Client-Side JavaScript API) -> 
        Server API
        Third Party APIs
*/


// Browser API (Client-side JavaScript API)
/*
   A Browser API can extend the functionality of a web browser.
   The browser APIs are set of Web APIs that are provided by the browsers.
   
   Following is a list of common browser APIs −
        Storage API −> It allows you to store the data in the browser's local storage.
        DOM API     −> It allows you to access DOM elements and manipulate them.
        History API −> It allows you to get the browser’s history.
        Fetch API   −> It allows you to fetch data from web servers.
        Forms API   −> It allows you to validate the form data.
*/

// Form API or Validation API
/*
Constraint Validation DOM Methods:

checkValidity()     ->	Returns true if an input element contains valid data.
setCustomValidity() ->	Sets the validationMessage property of an input element.

Constraint Validation DOM Properties:

validity	   -> Contains boolean properties related to the validity of an input element.
validationMessage  -> Contains the message a browser will display when the validity is false.
willValidate	   -> Indicates if an input element will be validated.

Validity Properties:

customError	-> Set to true, if a custom validity message is set.
patternMismatch	-> Set to true, if an element's value does not match its pattern attribute.
rangeOverflow	-> Set to true, if an element's value is greater than its max attribute.
rangeUnderflow	-> Set to true, if an element's value is less than its min attribute.
stepMismatch	-> Set to true, if an element's value is invalid per its step attribute.
tooLong	        -> Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch	-> Set to true, if an element's value is invalid per its type attribute.
valueMissing	-> Set to true, if an element (with a required attribute) has no value.
valid	        -> Set to true, if an element's value is valid.

*/

function validation_inRange(){
        const input_obj0=document.getElementById('id_api0');

        if(!input_obj0.checkValidity()){ // checkValidity() Method
                document.getElementById("browserAPI0").innerHTML = input_obj0.validationMessage;
        } else {
                document.getElementById('browserAPI0').innerHTML = "Input OK";
        }
}

function validation_rangeOverflow(){
        const input_obj1=document.getElementById('id_api1');

        if(input_obj1.validity.rangeOverflow){   // rangeOverflow Property
                document.getElementById("browserAPI1").innerHTML = "Value too large";
        } else {
                document.getElementById('browserAPI1').innerHTML = "Input OK";
        }
}

function validation_rangeUnderflow(){
        const input_obj2=document.getElementById('id_api2');

        if(input_obj2.validity.rangeUnderflow){   // rangeUnderflow Property
                document.getElementById("browserAPI2").innerHTML = "Value too Small";
        } else {
                document.getElementById('browserAPI2').innerHTML = "Input OK";
        }
}