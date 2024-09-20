// Spread(...) Operator
/*
spread operator ... is used to expand or spread out elements of an iterable, such as an array, string, or object.
*/

var numbers = [1, 2, 3];

var newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);

var n =[...numbers];

var n_s = [...n, 5,6,7];

console.log(n_s);

var obj1 = {
            x:1,
            y:2
          };

var obj2 = {
            a:1,
            b:2
          };

var obj_final ={...obj1, ...obj2};

console.log(obj_final);