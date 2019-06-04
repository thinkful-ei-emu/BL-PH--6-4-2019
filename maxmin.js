'use strict';

function max(array){
  let i = 0;
  let max = array[0];
  while (i < array.length){
    if (array[i] > max){
      max = array[i];
    }
    i++;
  }
  return max;
}
function min(array){  
  let i = 0;
  let min = array[0];
  while (i < array.length){
    if (array[i] < min){
      min = array[i];
    }
    i++;
  }
  return min;
}