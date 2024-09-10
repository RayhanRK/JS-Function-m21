/* Task-4 
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) 
as parameter and count how many 0’s are there in that string.  */

function count_zero(string){
    let count = 0;

    for(let i=0; i < string.length; i++ ){
        if( string[i] === "0"){
            count++;
      }
    }
     
    return count;
}

let binary = count_zero("110010110");
console.log(binary);