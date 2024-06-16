 /* Web Storage API
     -> a simple syntax for storing and retrieving data in the browser.

    JavaScript contains two different objects to store the data in the local.
      |-> localStorage
      |-> sessionStorage
 */


// Window localStorage Object
/*
   localStorage.setItem(key, value); // To set key-value pair
   localStorage.getItem(key);        // To get data using a key

   Here,
   key −> It can be any string.
   value −> It is a value in the string format.
*/

// Function to save input value to localStorage
function setItem() {
    const input_name = document.getElementById('p_name').value;
    const input_price = document.getElementById('p_price').value;
    
    const product = {
        name: input_name,
        price: input_price,
    }
    localStorage.setItem("product", JSON.stringify(product));
  }

// Function to load input value from localStorage

const output = document.getElementById("storageAPI0");

function getItem(){
    const product = localStorage.getItem("product");
    
    if (product !== null) {
       
      const product_out = JSON.parse(product);
        /*
          The JSON.parse() method in JavaScript is used to parse a JSON string which is written in a JSON format and returns a JavaScript object. 
              Syntax:
                      JSON.parse( string, function )
        */
      const output = document.getElementById('storageAPI0');
      output.innerHTML = `Product: ${product_out.name}, Price: ${product_out.price} BDT`;

    } else {
      output.innerHTML = 'No value saved in localStorage';
    }
}