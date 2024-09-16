// Array splice() Method

/*
Array splice() Method is an inbuilt method that is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. 
It modifies the original array and returns an array of the removed elements.

Syntax:          Array.splice( index, remove_count, item_list )

Parameters:
                index       : It is a required parameter. This parameter is the index from which the modification of the array starts (with the origin at 0). This can be negative also, which begins after many elements counting from the end.
                remove_count: The number of elements to be removed from the starting index.
                items_list  : The list of new items separated by a comma operator that is to be inserted from the starting index.

*/

let lan =["C++", "HTML", "JAVA", "PYTHON"];

let removed_lan = lan.splice(1, 2, "JAVASCRIPT", "REACT", "NODEJS");

console.log(removed_lan);
console.log(lan);