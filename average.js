'use strict';
function average(numbers){
  //return numbers.reduce((accumulator,current)=>accumulator+current,0)/numbers.length; //This works fine.
  let sum=0;
  numbers.forEach((current)=>sum+=current);
  return sum/numbers.length;
}

console.log(average([1,2,2,4,5]));
