/* method 
    -> function defined within an object
Syntax:
    objectName.methodKey()
*/

// food object
const food = {
    item1: "Egg",
    item2: function () {          // method
        console.log("Milk");
    }
};

// access method
food.item2();


// "this" Keyword -> this keyword in an object method to access a property of the same object

let mark={
    bangla:80,
    english:79, 
    math:95,
    result:function(){
        document.write(`Bangla: ${this.bangla} <br>`);
    }
}

mark.result();  // access the result() method

