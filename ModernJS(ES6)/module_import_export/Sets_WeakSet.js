// Set
/*
The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.
Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.
*/


let set0 = new Set();       // an empty set; To create a Set, need to use the 'new Set()' constructor.
console.log(set0)

set0.add(5).add(6).add("Bangladesh").delete(5);  // Adding values to a Set using the add() method. The add() method returns the Set object, so we can chain multiple add() calls together.
console.log(set0);


// When duplicate values are passed to a Set object, the duplicate values are excluded.

set0.add(1).add(1);
console.log(set0);

// Covert array to set
let myArray = [1,2,3];

let array2set = new Set(myArray);
console.log(array2set);


// Access Set Elements

const set1 = new Set ([1,2,3,4]);
console.log(set1.values()); // access the elements of a set 


console.log(set1.has(1)); // Check if an element is in set

// Removing Elements from Set using delete()

const set2 = new Set ([1, 2, 3, 4]);
console.log(set2);

set2.delete(3);

console.log(set2);

// clear() method removes all elements from a Set

const set3 = new Set ([1, 2, 3, 4]);
console.log(set3);

set3.clear();
console.log(set3);

//  Iterate through the Set elements using the for...of loop or forEach() method. 

const set4 = new Set ([1, 2, 3, 4, 5]);
console.log(set4);

for (let i of set4){
    console.log(i);
}


// JavaScript WeakSet
/*
WeakSet is used to store a collection of objects. The major difference of a WeakSet with a set is that a WeakSet is a collection of objects and not values of some particular type. 
Syntax:  new WeakSet(object)

*/

const ws = new WeakSet([{a:4,}]);
console.log(ws);

ws.add({b:1, c:2,}); // only add object

console.log(ws);



// WeakSet Methods

const ws0 = new WeakSet();
console.log(ws0); // WeakSet {}

const obj = {a:1};

// add to a weakSet
ws0.add(obj);
console.log(ws0); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(ws0.has(obj)); // true

// delete elements
ws0.delete(obj);
console.log(ws0); // WeakSet {}


