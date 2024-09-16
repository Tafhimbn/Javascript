// Function Default Parameter


function my_func(x = 10){
    return x;
}

console.log(my_func(5));
console.log(my_func(undefined));
console.log(my_func(null));