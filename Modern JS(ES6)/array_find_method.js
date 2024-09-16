// Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 10];


function test() {
    console.log("Counting...");
}


var result = numbers.find(function (currentValue, currentIndex, obj){
    this.test();
    return currentValue > 4;
},this);

console.log(result);



