/* Task-3 Write a function called make_avg() which will take an array of integers and the size of that array 
          and return the average of those values. */

function make_avg(arr , size){

  let sum = 0;
  for(i = 0; i < size; i++){
    sum += arr[i];

  }

    avg = sum /size; //here size of array = array.length and size is received from input argument.
    return avg;
}

let arr =[ 10, 20, 30, 40, 50];
let average = make_avg(arr , arr.length);

console.log('Average value:' , average);