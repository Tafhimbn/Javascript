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

function setItem() {
    const input_name = document.getElementById('p_name');
    console.log(input_name);
    const input_price = document.getElementById('p_price');

    const product = {
        name: input_name,
        price: input_price,
    }
    localStorage.setItem("product", JSON.stringify(product));
  }
const output = document.getElementById("storageAPI0");

function getItem(){
    const product = localStorage.getItem("product");
    output.innerHTML = "The Product is:"+ product;
}