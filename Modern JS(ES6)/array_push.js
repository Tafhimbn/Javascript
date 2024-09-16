// Array push()
/*

push() method adds one or more elements to the end of an array and returns the new length of the array. 
It modifies the original array, increasing its length by the number of elements added.

Syntax: arr.push(element0, element1, … , elementN);

*/

    let vehicles = ['Car', 'Bus', 'Cycle'];
    // Pushing the element into the array
    let result = vehicles.push('Bike');
    console.log(vehicles);
    console.log(result);
