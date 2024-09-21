// module import / export

import external, {pi, a, my_function} from "./external_module.js"; // unnamed import  .... external for import function

import {a as varA, pi as varPi} from "./external_module.js";  // named import

import {} from "./external_module.js";  // default import

console.log(pi,a);
console.log("varA :"+varA, "varPi :"+varPi);
console.log("Default Value: " +{});

my_function();

/*
external(); // for import default function
*/
