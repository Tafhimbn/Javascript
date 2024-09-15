// ternary operator

var age = 55;


// without ternary operator

var type0;

if(age >= 18) {
    type0 = "adult";
} else {
    type0 ="child";
}

console.log(type0);


// ternary operator instead of if-else
var type1 = (age >= 18) ? "Adult":"child";

console.log(type1);


//  ternary operator instead of nested if-else
var type2 = age < 18 ? "child" : ((18 <= age) && (age < 50)) ? "Adult":"Old";

console.log(type2);
 

var work_hour =5;

var payable = work_hour >= 4;

console.log(payable);
