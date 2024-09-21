// Tagged Templates Literals
/*
Tagged templates are an advanced form of template literals in JavaScript. They allow you to parse template literals with a function.
Furthermore, you don't need to use parentheses () when passing the template literal to the function.
*/

function modifier(string, ...values) {
     // The function 'modifier' is a tagged template function that takes 'strings' (an array of literal string parts of the template) and 'values' (the interpolated expressions in the template)
    const m = string.reduce((prev, current,index) => {           
           // Use the reduce() method on 'strings' to iterate through all parts of the template string, combining them with the values
        return prev + current + (index <= values.length ? "Mr. " + values.shift() : "" );
    }, "");
    return m; // Return the modified string
}

var user1 = "Tafhim";
var user2 = "Tanzim";

// Call the 'modifier' tagged template with literal and interpolated values
console.log(modifier`Hello ${user1} and ${user2} . You both are welcome to our company.`); 
