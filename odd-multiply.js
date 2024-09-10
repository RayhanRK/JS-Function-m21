
/* Task-2 Take a number if the number is odd multiply it by 2 and return the result.
          If the number is even divide it by two and return the result.   */

        function oddMultiply(number){
            if(number % 2 === 1){
                result = number *2; 
                return result;
            }
            else{
                result = number / 2;
                return result;
            }
        }
        let number =oddMultiply(100);
        console.log(number);