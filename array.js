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

    // push(): and to end
     let num =[1,2,3,4];
     num.push(5);
     document.write(num,"<br>");
     let del_num = num.pop();
     document.write(num,"<br>");
     document.write(del_num,"<br>");

    // Pop(): delete from end & return


    // Add Element to an Array
    // 1. Using the push() Method
    // 2. Using the unshift() Method







} // Avoid it; write code inside function to avoid global variable conflict
array();