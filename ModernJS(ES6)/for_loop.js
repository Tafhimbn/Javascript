// for loop, for in, for of

// ---------- for loop ----------

let i=0;
for (;i<=5;i++){
    console.log(i);
}


// --------- for in -----------------    

/*  applicable for object only
    provide index of array
*/

const obj={
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich",
};

for (property in obj){
    console.log(property);
}

// EXAMPLE 2
const array = ["JavaScript","1995","Brendan Eich"];
for (property in array){
    console.log(property);
}



// ----------  for of ----------------

const arr = ["JavaScript","1995","Brendan Eich"];

for (property of arr){
    console.log(property);
}