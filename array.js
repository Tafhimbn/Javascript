function array(){ // Avoid it; write code inside function to avoid global variable conflict



    // Javascript Array  -> collection of items;  allows you to store multiple values in a single variable.

   // Syntax:
   //   let arrayName = [value1, value2, ...]; 


   let marks  =[58,68,46,69,68,83];

   document.write(marks,"<br>");
   document.write(typeof(marks),"<br>");
   document.write("Lenght of marks array:",marks.length,"<br>");
  
   // Array Indices
        for (i=0;i<marks.length;i++){         // Looping over array
            document.write(`marks ${i}: ${marks[i]}<br>`);
        }
    
    // array is mutable (data can be changed)
        let std=["Fahim","Rakib","Sakib"]
        std[0]="Tafhim";
        document.write(std,"<br>");
        
        let speed=[45,86,56]
        speed[1]=0;
        document.write(`Speed of car 1: ${speed[1]} <br>`);
    
    
    // Array method

    // push() Method: and to end
     let num =[1,2,3,4];
     num.push(5);
     document.write(num,"<br>");

    // pop() Method: delete from end & return
        let del_num = num.pop();
        document.write(num,"<br>");
        document.write(del_num,"<br>");

    // toString() Method: converts array to string
        let num_a=[1,2,3,4];
        document.write(typeof(num_a),"<br>");
        let num_s=num_a.toString();
        document.write(typeof(num_s),"<br>");

    // concat() Method: joins multiple arrays returns result
       let a1=[1,2,3,4];
       let a2=[5,6,7,8];
       let a3 = a1.concat(a2,"<br>");
       document.write(a1,"<br>");
       document.write(a3,"<br>");
    // unshift() Method: add to start
       let a4=[1,2,3];
       a4.unshift(0);
       document.write(a4,"<br>");

    // shift() Method: delete from start
        let a5=[1,2,3];
        a5.shift();
        document.write(a5,"<br>");

    // slice() Method: returns a piece of the array
    // slice(start index, end index)

    let a6=[1,2,3,4];
    let a7 =a6.slice(2,3);
    document.write(a7,"<br>");
    document.write(a6,"<br>");

    // splice() Method:change original array(add, remove, replace)
    // splice(start_index, del_count, new_element)

    let a8=[1,2,3,4,5,6,7,8];
    a8.splice(1,1);             // delete element
    document.write(a8,"<br>");
    a8.splice(3,0,9);
    document.write(a8,"<br>"); // add element
    a8.splice(5,1,99);
    document.write(a8,"<br>");  // replace element


    // forEach loop in Array
    // syntax:
    // arr.forEach(callBackFunction)
  let name=["tafhim","fahim","tanzim"]

  name.forEach((val, idx, name) => {
    console.log(val.toUpperCase(),idx,name);
});

/* map method
   -> Creates a new array with the results of some operation. The value its callback returns are
      used to form new array
syntax: array.map(callbackfunction(value,index,array))
*/
let number=[12,53,68];

number.map((val) =>{
    document.write(val,"<br>");
});

} // Avoid it; write code inside function to avoid global variable conflict
array();