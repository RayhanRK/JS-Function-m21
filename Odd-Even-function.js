
/* Task-5 Write a function called odd_even() which takes an integer value and 
          tells whether this value is even or odd. If even return Even. If odd return Odd  **/


          function odd_even(number){
       
            if( number % 2 === 0 ){
                result = "Even";
                return result;
            }
            else{
                // result = "Odd"
                // return result;
                return "Odd";
            }
            
          }

          
          let num = odd_even(912);
          console.log(num);