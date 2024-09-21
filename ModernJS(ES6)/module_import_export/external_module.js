export const pi =3.14;
export const a = 2.9;

const b = 5.7;
export default b; // declare default export variable 

// function export

export function my_function() {
    console.log("This Function import from external module.")
}

/*
export default function my_func() {
    console.log("This Function import from external module as default.")  // a module can't have multiple default export
}

*/