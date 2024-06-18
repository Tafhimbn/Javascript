// Javascript JSON

/*
    JSON is format for storing and transporting Data.
    JSON stands for JavaScript Object Notation
    Used when data is sent from a server to web page.
   
    JSON is a lightweight data interchange format
    JSON is language independent *
    JSON is "self-describing" and easy to understand

    * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

    The file type for JSON files is ".json"
    The MIME type for JSON text is "application/json"

    JSON Syntax Rules:
        Data is in name/value pairs
        Data is separated by commas
        Curly braces hold objects
        Square brackets hold arrays
    
    '{"name":"John", "age":30, "car":null}'

    In JSON, keys must be strings, written with double quotes:
    JSON
          {"name":"John"} 
    JavaScript
               {name:"John"}    

*/

/*
JSON Methods:
    JSON.parse() -> It parses a JSON string and creates a JavaScript object.
                    When receiving data from a web server, the data is always a string.
                    Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    
    JSON.stringify() -> It converts a JavaScript object to JSON string.
                        When sending data to a web server, the data has to be a string.
    
*/

const passenger = '{"name": "John", "age": 30, "city": "New York"}';

const pas_array = JSON.parse(passenger); // pass_str is now a object

const pass_str = JSON.stringify(pas_array); // pass_str is now a string, and ready to be sent to a server



// JSON Objects

const student_info = '{"name": "Tafhim","id": 1234,"Dept": "EEE"}';

const json_obj = JSON.parse(student_info); // Converting JSON string to JavaScript Objects
console.log(json_obj);
document.write(`Student name is ${json_obj.name}. Student ID is ${json_obj.id}. <br>`)
document.write(`Student name is ${json_obj["name"]}. Student ID is ${json_obj.id}. `)


// JSON Arrays

const car = '["Ford", "BMW", "Tesla"]';
const carArray = JSON.parse(car);


// Arrays in JSON Objects
const persons = {
    "employee": [   // array; In JSON array can contains object like JS 
                    // JSON names require double quotes. Javascript names do not.
        {"firstName":"Tafhim", "LastName":"Bin Nasir"},
        {"firstName":"Abdul", "LastName":"Quddus"},
        {"firstName":"Abdur", "LastName":"Suqqor"},        
    ]
};

