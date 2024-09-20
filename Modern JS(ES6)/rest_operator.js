// rest function/operator
/*
The rest parameter (...) allows a function to treat an indefinite number of arguments
*/

function func0 (...params) {
    console.log(params);
}

func0(5, 6, 7, 8, 9);

function func1 (a, ...params) {
    console.log(a);
    console.log(params);
}
func1(5, 6, 7, 8, 9);